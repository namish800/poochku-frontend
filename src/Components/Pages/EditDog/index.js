import { useEffect, useState } from 'react';
import DashNavUser from '../../Reusable/DashNavUser';
import './style.css'
import axios from 'axios';
import petApi from '../../../services/petApi';
import { useLocation, useNavigate } from 'react-router-dom';
import dogDb from '../../Reusable/breeds'
import { useCallback } from 'react';
import { useDropzone} from 'react-dropzone';

const initialPet = {
    "ownerId": localStorage.getItem('userId'),
    "name": "",
    "petType": "Dog",
    "breed": "",
    "vaccination_status": false,
    "description": "",
    "ageInDays": 0,
    "motherBreed": "",
    "fatherBreed": "",
    "serviceCode": "",
    "location": "Delhi",
    "quality": "0",
    "price": 0
}

// Styles
const dropzoneStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
  marginBottom: "2rem",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border 0.24s ease-in-out",
  cursor: "pointer",
};

const activeDropzoneStyle = {
  borderColor: "#00adb5",
};

const DropzoneText = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "center",
};

const ImagePreview = {
  display: "flex",
  width: "auto",
  height: "200px",
  maxHeight: "200px",
  margin: "auto",
  borderRadius: "2px",
};

const FileName = {
  display: "flex",
  fontSize: "14px",
  marginTop: "8px",
};

const EditDog = ({previousPath}) => {
    const [pet, setPet] = useState(initialPet);
    const [selectedImages, setSelectedImages] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [preview, setPreview] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        setSelectedImages(
            acceptedFiles.map((file) => 
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        )
        // const file = new FileReader;
        
        // file.onload = function() {
        //     setPreview(file.result);
        // }
        
        // file.readAsDataURL(acceptedFiles[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop,
        accept: "image/*",
        maxSize: 1024 * 1024 * 5,
        maxFiles: 3,
    });

    const fileList = selectedImages.map((file) => (
        <li key={file.name}>
          <img style={ImagePreview} src={file.preview} alt={file.name} />
          {/* <span style={FileName}>{file.name}</span> */}
        </li>
      ));

    const submitDog = async () => {
        pet.ownerId = localStorage.getItem("userId")
        const addDogRequestDto = {
            ...pet,
            imageBlobs: selectedImages
        }
        const res = await petApi.addNewPet(addDogRequestDto);
        if(previousPath.includes("mating")){
            navigate("/mating")
        }else if(previousPath.includes("sellerdashboard")){
            navigate("/sellerdashboard")
        }else if(previousPath.includes("sellerdashboard")){
            navigate("/sellerdashboard")
        }
    }
    const handleImageInputChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          const imageBlobs = [];
          for (const file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
            const uint8Array = new Uint8Array(event.target.result);
              imageBlobs.push({
                fileName: localStorage.getItem("userId") + "" +file.name,
                blob: Array.from(uint8Array)
              });
            };
            reader.readAsArrayBuffer(file);
          }
          setSelectedImages(imageBlobs);
        }
      };
    const handleChange = (e) => {
        console.log("state", pet, e.target.name, e.target.value, e)
        if(e.target.name === "vaccination_status"){
            setPet({...pet, 
                [e.target.name] : e.target.checked
                });
        }else{
            setPet({...pet, 
                [e.target.name] : e.target.value
                });
        }
    } 

    useEffect(() => {
        if(location.pathname.includes("seller")){
            setPet({
                ...pet,
                serviceCode: "S"
            })
        }if(location.pathname.includes("adoption")){
            setPet({
                ...pet,
                serviceCode: "A"
            })
        }if(location.pathname.includes("mydog")){
            setPet({
                ...pet,
                serviceCode: "M"
            })
        }
    }, [])
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper'>
            <div className='pageHeadingSticky'>
                <div>
                    <h1>New Pooch</h1>
                    <p className='pageInfo'>Add your pooch!</p>
                </div>
            </div>
            <form className='newDogForm'>
                <div className='dogInfo'>
                    <div className='newDogWrapper'>
                        <div className='dogFormDiv'>
                            <div>
                                <p className='newDogLabel'>Name</p>
                                <input type="text" value={pet.name} name='name' onChange={handleChange} placeholder='Enter pet name'/>
                            </div>
                            <div>
                                <p className='newDogLabel'>Age in Days</p>
                                <input type='number' name='ageInDays' value={pet.ageInDays} placeholder='days' onChange={handleChange}/> <label>Days</label>
                            </div>
                        </div>
                    </div>
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Breed</p>
                        <select name='breed' value={pet.breed} onChange={handleChange}>
                            <option value="0">Select a breed</option>
                            {
                                dogDb.map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
                            }
                        </select>
                    </div>
                    <div className='newDogWrapper'>
                    </div>
                    <div className='newDogWrapper'>
                        <div className='dogFormDiv'>
                            <div>
                                <p className='newDogLabel' >Father Breed</p>
                                <select name="fatherBreed" onChange={handleChange} value={pet.fatherBreed}>
                                    <option value="0">Select a breed</option>
                                    {
                                        dogDb.map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <p className='newDogLabel'>Mother Breed</p>
                                <select name="motherBreed" onChange={handleChange} value={pet.motherBreed}>
                                    <option value="0">Select a breed</option>
                                    {
                                        dogDb.map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Purpose</p>
                        <div className='dogFormDiv'>
                            <div>
                                <input name="serviceCode" value="M" type='radio' checked={pet.serviceCode==="M"} onChange={handleChange} disabled={pet.serviceCode !== "M"}/> 
                                <label>Mating</label>
                            </div>
                            <div>
                                <input name="serviceCode" value="A" type='radio' checked={pet.serviceCode==="A"} onChange={handleChange} disabled={pet.serviceCode !== "A"}/> 
                                <label>Adoption</label>
                            </div>
                            <div>
                                <input name="serviceCode" value="S" type='radio' checked={pet.serviceCode==="S"} onChange={handleChange} disabled={pet.serviceCode !== "S"}/>    
                                <label>Selling</label>
                            </div>           
                        </div>          
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Vaccinations</p>
                        <label>Is your dog vaccinated?</label>
                        <input type='checkbox' onChange={handleChange} value={pet.vaccination_status} name='vaccination_status'/> 
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Description</p>
                        <textarea value={pet.description} placeholder='Add dog description' name='description' onChange={handleChange}/> 
                    </div>  
                </div>
                <div className='dogImgWrapper'>
                    <p>Upload Images</p>
                    {/* <input type="file" onChange={handleImageInputChange}/> */}
                    <div style={
                            isDragActive
                            ? { ...dropzoneStyle, ...activeDropzoneStyle }
                            : dropzoneStyle
                        }
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p p style={DropzoneText}>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                    {   selectedImages.length > 0 &&
                        <div>
                            <p className='newDogLabel'>Image Preview</p>
                            <ul className='previewImages'>{fileList}</ul>
                        </div>
                    }
                </div>
            </form>
            <button className='dogFormSubmitButton' onClick={submitDog}>Submit</button>
        </div>
    </div>
  )
}

export default EditDog


