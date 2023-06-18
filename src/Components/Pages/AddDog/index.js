import DashNavUser from '../../Reusable/DashNavUser';
import './style.css'

const AddDog = () => {
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper'>
            <h3>New Pooch</h3>
            <p className='pageInfo'>Add your pooch!</p>
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
                        <div style={{display:"flex"}}>
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
                        <label>Mating</label>
                        <input name="purpose" type='radio'/> 
                        <label>Adoption</label>
                        <input name="purpose" type='radio'/> 
                        <label>Selling</label>
                        <input name="purpose" type='radio'/>                         
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
            <button>Create</button>
        </div>
    </div>
  )
}

export default AddDog