import { useState } from 'react';
import DashNavUser from '../../Reusable/DashNavUser';
import './style.css'
import axios from 'axios';
import petApi from '../../../services/petApi';

const initialPet = {
    "ownerId": 2,
    "name": "",
    "petType": "Dog",
    "breed": "",
    "vaccination_status": false,
    "description": "",
    "ageInDays": 0,
    "motherBreed": "",
    "fatherBreed": "",
    "serviceCode": "S",
    "location": "Delhi",
    "quality": "0",
    "price": 0
}

console.log(localStorage)

const AddDog = () => {
    const [pet, setPet] = useState(initialPet)
    const [selectedImages, setSelectedImages] = useState([]);

    const submitDog = async () => {
        pet.ownerId = localStorage.getItem("userId")
        const addDogRequestDto = {
            ...pet,
            imageBlobs: selectedImages
        }
        const res = await petApi.addNewPet(addDogRequestDto);
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
                        <p className='newDogLabel'>Breed</p>
                        <select name='breed' value={pet.breed} onChange={handleChange}>
                            <option value="0">Select a breed</option>
                            <option value="mixed">Mixed Breed</option>
                            <option value="pitbull">Pitbull</option>
                            <option value="german_shephard">German Shephard</option>
                            <option value="toy_pom">Toy Pom</option>
                            <option value="doberman">Doberman</option>
                        </select>
                    </div>
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Name</p>
                        <div className='dogFormDiv'>
                            <input type="text" value={pet.name} name='name' onChange={handleChange} placeholder='Enter pet name'/>
                        </div>
                    </div>
                    <div className='newDogWrapper'>
                        <div className='dogFormDiv'>
                            <div>
                                <p className='newDogLabel' >Father Breed</p>
                                <select name="fatherBreed" onChange={handleChange} value={pet.fatherBreed}>
                                    <option value="0">Select a breed</option>
                                    <option value="mixed">Mixed Breed</option>
                                    <option value="pitbull">Pitbull</option>
                                    <option value="german_shephard">German Shephard</option>
                                    <option value="toy_pom">Toy Pom</option>
                                    <option value="doberman">Doberman</option>
                                </select>
                            </div>
                            <div>
                                <p className='newDogLabel'>Mother Breed</p>
                                <select name="motherBreed" onChange={handleChange} value={pet.motherBreed}>
                                    <option value="0">Select a breed</option>
                                    <option value="mixed">Mixed Breed</option>
                                    <option value="pitbull">Pitbull</option>
                                    <option value="german_shephard">German Shephard</option>
                                    <option value="toy_pom">Toy Pom</option>
                                    <option value="doberman">Doberman</option>
                                </select>
                            </div>
                        </div>
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Purpose</p>
                        <div className='dogFormDiv'>
                            <div>
                                <input name="serviceCode" value="M" type='radio' onChange={handleChange} disabled/> 
                                <label>Mating</label>
                            </div>
                            <div>
                                <input name="serviceCode" value="A" type='radio' onChange={handleChange} disabled/> 
                                <label>Adoption</label>
                            </div>
                            <div>
                                <input name="serviceCode" value="S" type='radio' checked onChange={handleChange}/>    
                                <label>Selling</label>
                            </div>           
                        </div>          
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Age in Days</p>
                        <input type='number' name='ageInDays' value={pet.ageInDays} placeholder='days' onChange={handleChange}/> <label>Days</label>
                    </div>
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Vaccinations</p>
                        <label>Is your dog vaccinated?</label>
                        <input type='checkbox' onChange={handleChange} value={pet.vaccination_status} name='vaccination_status'/> 
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Description</p>
                        <textarea value={pet.description} name='description' onChange={handleChange}/> 
                    </div>  
                </div>
                <div className='dogImgWrapper'>
                    <p>Upload Images</p>
                    <input type="file" onChange={handleImageInputChange}/>
                </div>
            </form>
            <button className='dogFormSubmitButton' onClick={submitDog}>Submit</button>
        </div>
    </div>
  )
}

export default AddDog


