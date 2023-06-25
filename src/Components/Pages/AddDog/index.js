import DashNavUser from '../../Reusable/DashNavUser';
import './style.css'

const AddDog = () => {
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
                        <select>
                            <option>Select a breed</option>
                            <option>Mixed Breed</option>
                            <option>Pitbull</option>
                            <option>German Shephard</option>
                            <option>Toy Pom</option>
                            <option>Doberman</option>
                        </select>
                    </div>
                    <div className='newDogWrapper'>
                        <div className='dogFormDiv'>
                            <div>
                                <p className='newDogLabel'>Father Breed</p>
                                <select>
                                    <option>Select a breed</option>
                                    <option>Mixed Breed</option>
                                    <option>Pitbull</option>
                                    <option>German Shephard</option>
                                    <option>Toy Pom</option>
                                    <option>Doberman</option>
                                </select>
                            </div>
                            <div>
                                <p className='newDogLabel'>Mother Breed</p>
                                <select>
                                    <option>Select a breed</option>
                                    <option>Mixed Breed</option>
                                    <option>Pitbull</option>
                                    <option>German Shephard</option>
                                    <option>Toy Pom</option>
                                    <option>Doberman</option>
                                </select>
                            </div>
                        </div>
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Purpose</p>
                        <div className='dogFormDiv'>
                            <div>
                                <input name="purpose" type='radio'/> 
                                <label>Mating</label>
                            </div>
                            <div>
                                <input name="purpose" type='radio'/> 
                                <label>Adoption</label>
                            </div>
                            <div>
                                <input name="purpose" type='radio'/>    
                                <label>Selling</label>
                            </div>           
                        </div>          
                    </div>  
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Age</p>
                        <div>
                            <input type='number' placeholder='weeks' /> <label>Weeks</label>
                            <input type='number' placeholder='months' /> <label>Months</label>
                        </div>
                    </div>
                    <div className='newDogWrapper'>
                        <p className='newDogLabel'>Vaccinations</p>
                        <label>Is your dog vaccinated?</label>
                        <input type='checkbox'/> 
                    </div>  
                </div>
                <div className='dogImgWrapper'>
                    <p>Upload Images</p>
                    <input type="file" />
                </div>
            </form>
            <button className='dogFormSubmitButton'>Submit</button>
        </div>
    </div>
  )
}

export default AddDog