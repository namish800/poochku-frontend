import { useEffect, useState } from 'react';
import DashNavUser from '../../Reusable/DashNavUser';
import './style.scss'
import petApi from '../../../services/petApi';
import { useLocation, useNavigate } from 'react-router-dom';
import dogDb from '../../Reusable/breeds'
import { useCallback } from 'react';
import { useDropzone} from 'react-dropzone';
import MobileNav from '../../Reusable/MobileNav';
import GenderOpt from '../../Reusable/GenderOpt';
import { styled, useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Dog from '../../../Assets/pitbull.png'
import Cat from '../../../Assets/cat.png'
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';



const initialPet = {
    "ownerId": localStorage.getItem('userId'),
    "name": "",
    "petType": "Dog",
    "breed": "",
    "vaccination_status": false,
    "description": "",
    "age": 0,
    "serviceCode": "",
    "location": "Delhi",
    "price": null,
    "gender": "",
    "socials": {"instagram": ""},
    "age": {"months":0, "years":0}
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

const AddDog = () => {
    const [pet, setPet] = useState(initialPet);
    const [selectedImages, setSelectedImages] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const { prevPath } = location.state || { prevPath: "/" };
    // const [preview, setPreview] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        handleCallback(acceptedFiles)
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

    const submitDog = async (event) => {
        event.preventDefault();
        pet.ownerId = localStorage.getItem("userId")
        const addDogRequestDto = {
            ...pet,
            imageBlobs: selectedImages
        }
        console.log(addDogRequestDto)
        const res = await petApi.addNewPet(addDogRequestDto);
        console.log(prevPath)
        if(prevPath.includes("mating")){
            navigate("/mating")
        }else if(prevPath.includes("useraccount")){
            navigate("/useraccount")
        }
    }
    const handleCallback = async (files) => {
        
        const newSelectedImages = [];
        console.log("files ", files);
        // Loop through the files
        for (const file of files) {
            const uint8Array = await readFileAsync(file);
            newSelectedImages.push({ fileName: file.name, blob: Array.from(uint8Array), preview: URL.createObjectURL(file) });
        }

        console.log("new selected images", newSelectedImages);
        // Update the state with the newSelectedImages array
        setSelectedImages((prevSelectedImages) => [
            ...prevSelectedImages,
            ...newSelectedImages,
        ]);
    }

    const readFileAsync = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
    
          // Set up the FileReader callbacks
          reader.onload = (event) => {
            const uint8Array = new Uint8Array(event.target.result);
            resolve(uint8Array); // Resolve with the Uint8Array content
          };
    
          reader.onerror = (error) => {
            reject(error);
          };
    
          // Read the file as a Blob
          reader.readAsArrayBuffer(file);
        });
      };

    const handleChange = (e) => {
        console.log("state", pet, e.target.name, e.target.value)
        
        if(e.target.name==='instagram'){
            let socials = {...pet.socials, [e.target.name]: e.target.value}
            setPet({...pet, 
                "socials" : socials
                })
        } else if(e.target.name==='months' || e.target.name==='years') {
            let age = {...pet.age, [e.target.name]: e.target.value}
            setPet({...pet, "age": age})
        } else {
            setPet({...pet, 
                [e.target.name] : e.target.value
                });
        }
    } 

  

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const BackButton = styled(Button)(() => ({
        color: '#fff',
        fontFamily: 'cabin',
        padding: "10px 20px 10px 10px",
        backgroundColor: "#6504b5",
        '&:hover': {
          backgroundColor:"#7b1fa2",
        },
      }));

      const NextButton = styled(Button)(() => ({
        color: '#fff',
        fontFamily: 'cabin',
        padding: "10px 10px 10px 20px",
        backgroundColor: "#6504b5",
        '&:hover': {
          backgroundColor:"#7b1fa2",
        },
      }));


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
                    <h1>Add Your Pooch</h1>
                    {/* <p className='pageInfo'>Add your pooch!</p> */}
                </div>
            </div>
            <form className='newDogForm'>
                <MobileStepper
                    variant="progress"
                    steps={6}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: '100%', flexGrow: 1, '& .MuiLinearProgress-bar': {backgroundColor:"#7b1fa2"}, '& .MuiMobileStepper-progress': {backgroundColor: "rgba(255, 255, 255, 0.7)"} }}
                    nextButton={
                        <NextButton size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                        </NextButton>
                    }
                    backButton={
                        <BackButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                        </BackButton>
                    }
                />
                { activeStep === 0 && <div className='formView view-1'>
                    <div className='dogFormDiv'>
                        <div>
                            <p className='newDogLabel'>What type of pooch do you have?</p>
                            <div className='poochTypeWrapper'>
                                    <input type='radio' className='form-petType' value='Dog' checked={pet?.petType === 'Dog'} name='petType'/>
                                <label className='imgLabel'>
                                    <img className='labelImg' src={Dog}/>
                                </label>
                                    <input type='radio' className='form-petType' value='Cat' checked={pet?.petType === 'Cat'} name='petType'/>
                                <label className='imgLabel'>
                                    <img className='labelImg' src={Cat}/>
                                </label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>What do you call your pooch?</p>
                            <input type="text" className='poochTextField' value={pet.name} name='name' onChange={handleChange} placeholder='Enter pooch name'/>
                        </div>
                    </div>
                </div>}
                {activeStep === 1 && <div className='formView view-2'>
                    <div className='dogFormDiv'>
                        <div>
                            <p className='newDogLabel'>What's the breed of {`${pet?.name || 'your pooch'}`}?</p>
                            <div className='poochBreedWrapper'>
                            <input type="radio" value="purebred" name='breedType' onChange={handleChange} />
                            <label>Purebred</label>
                            <input type="radio" value="mixbreed" name='breedType' onChange={handleChange} />
                            <label>Mix Breed</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>Primary Breed</p>
                            <select name='breed' value={pet.breed} onChange={handleChange}>
                                <option value="0">Select a breed</option>
                                {
                                    dogDb.sort((a, b) => {
                                        let fa = a.breed.toLowerCase(),
                                            fb = b.breed.toLowerCase();
                                    
                                        if (fa < fb) {
                                            return -1;
                                        }
                                        if (fa > fb) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <p className='newDogLabel'>Boy or Girl?</p>
                            <div className='poochGenderWrapper'>
                                <input type='radio' className='form-gender' value='Boy' onChange={handleChange} checked={pet?.gender === 'Boy'} name='gender'/>
                                <label><MaleIcon sx={{fontSize: "3rem"}} /></label>
                                <input type='radio' className='form-gender' value='Girl' onChange={handleChange} checked={pet?.gender === 'Girl'} name='gender'/>
                                <label><FemaleIcon sx={{fontSize: "3rem"}}/></label>
                            </div>
                        </div>
                    </div>
                </div>}
                {activeStep === 2 && <div className='formView view-3'>
                    <div className='dogFormDiv'>
                        <div>
                            <p className='newDogLabel'>Pedigree Certified</p>
                            <div className='poochTypeWrapper'>
                                <input type='radio' className='form-pedigreeCertified' value='Yes' onChange={handleChange} checked={pet?.pedigreeCertified === 'Yes'} name='pedigreeCertified'/>
                                <label>Yes</label>
                                <input type='radio' className='form-pedigreeCertified' value='No' onChange={handleChange} checked={pet?.pedigreeCertified === 'No'} name='pedigreeCertified'/>
                                <label>No</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>DNA Tested</p>
                            <div className='poochTypeWrapper'>
                                <input type='radio' className='form-dnaTested' value='Yes' onChange={handleChange} checked={pet?.dnaTested === 'Yes'} name='dnaTested'/>
                                <label>Yes</label>
                                <input type='radio' className='form-dnaTested' value='No' onChange={handleChange} checked={pet?.dnaTested === 'No'} name='dnaTested'/>
                                <label>No</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>Vaccinated</p>
                            <div className='poochTypeWrapper'>
                                <input type='radio' className='form-vaccination_status' value='Yes' onChange={handleChange} checked={pet?.vaccination_status === 'Yes'} name='vaccination_status'/>
                                <label>Yes</label>
                                <input type='radio' className='form-vaccination_status' value='No' onChange={handleChange} checked={pet?.vaccination_status === 'No'} name='vaccination_status'/>
                                <label>No</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>Breeding for the first time</p>
                            <div className='poochTypeWrapper'>
                                <input type='radio' className='form-firstTime' value='Yes' onChange={handleChange} checked={pet?.breedingForTheFirstTime === 'Yes'} name='breedingForTheFirstTime'/>
                                <label>Yes</label>
                                <input type='radio' className='form-firstTime' value='No' onChange={handleChange} checked={pet?.breedingForTheFirstTime === 'No'} name='breedingForTheFirstTime'/>
                                <label>No</label>
                            </div>
                        </div>
                        
                    </div>
                </div>}
                {activeStep === 3 && <div className='formView view-4'>
                    <div className='dogFormDiv'>
                        <div>
                            <p className='newDogLabel'>How old is {`${pet?.name || 'your pooch'}`}?</p>
                            <div className='poochTypeWrapper'>
                                <input type='number' className='form-years poochTextField' onChange={handleChange} value={pet?.age?.years} name='years'/>
                                <label>years</label>
                                <input type='number' className='form-months poochTextField' onChange={handleChange} value={pet?.age?.months} name='months'/>
                                <label>months</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>What is {`${pet?.name || 'your pooch'}`}'s weight?</p>
                            <div className='poochTypeWrapper'>
                                <input type='number' className='form-weight poochTextField' onChange={handleChange} value={pet?.weight} name='weight'/>
                                <label>kgs</label>
                            </div>
                        </div>
                        <div>
                            <p className='newDogLabel'>Tell us more about {`${pet?.name || 'your pooch'}`}</p>
                            <textarea rows={5} className='form-description poochTextField' onChange={handleChange} value={pet?.description} name='description'/>
                        </div>
                    </div>
                </div>}
                {activeStep === 4 && <div className='formView view-5'>
                    <div className='dogFormDiv'>
                         <div>
                            <p className='newDogLabel'>What's the stud fee?</p>
                            <div className='poochTypeWrapper'>
                                <input type='number' className='form-price poochTextField' value={pet?.price} placeholder='0' name='price' onChange={handleChange}/>
                                <label>Rupees</label>
                            </div>
                        </div>
                        <p className='newDogLabel'>Instagram handle of {`${pet?.name || 'your pooch'}`} (optional)</p>
                        <div className='poochTypeWrapper'> 
                            <label>@</label>
                            <input type="text" className='poochTextField' value={pet?.socials?.instagram} name='instagram' onChange={handleChange} placeholder='instagram'/>
                        </div>
                    </div>
                </div>}
                {activeStep === 5 && <div className='formView view-6'>
                    <div className='dogFormDiv'>
                        <div>
                            <p className='newDogLabel heading-view-6'>Add some photos of {`${pet?.name || 'your pooch'}`}</p>
                            <div className='dogImgWrapper'>
                                {/* <p>Upload Images</p> */}
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
                                        <p p style={DropzoneText}>Drag 'n' drop some images here, or click to select files</p>
                                    }
                                </div>
                                {   selectedImages.length > 0 &&
                                    <div>
                                        <p className='newDogLabel'>Image Preview</p>
                                        <ul className='previewImages'>{fileList}</ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <button className='dogFormSubmitButton' onClick={submitDog}>Submit</button>
                </div>}
                {/* <div className='dogInfo'>
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
                                dogDb.sort((a, b) => {
                                    let fa = a.breed.toLowerCase(),
                                        fb = b.breed.toLowerCase();
                                
                                    if (fa < fb) {
                                        return -1;
                                    }
                                    if (fa > fb) {
                                        return 1;
                                    }
                                    return 0;
                                }).map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
                            }
                        </select>
                    </div>
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Gender</p>
                        <select name='gender' className='filterInput' value={pet.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option key="M" value="M">Male</option>
                            <option key="F" value="F">Female</option>
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
                </div> */}
                {/* <div className='dogImgWrapper'>
                    <p>Upload Images</p>
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
                </div> */}
            </form>
        </div>
        <MobileNav/>
    </div>
  )
}

export default AddDog


