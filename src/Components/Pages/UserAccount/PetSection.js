import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DogForSaleCard from '../../Reusable/DogForSaleCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import userApi from '../../../services/userApi'

const PetSection = () => {
    const [adoptionList, setAdoptionList] = useState([]);
    const [matingList, setMatingList] = useState([]);
    const [sellingList, setSellingList] = useState([]);
    const [userRole, setUserRole] = useState("");
    const navigate = useNavigate();
    
    const getDogsList = async () => {
        let userDetails = await userApi.getUserById(localStorage.getItem("userId"));
        
        setAdoptionList(userDetails?.pets?.pets_for_adoption);
        setMatingList(userDetails?.pets?.pets_for_mating);
        setSellingList(userDetails?.pets?.pets_for_sell);
        setUserRole(userDetails.role);
    }

    useEffect(() => {
        getDogsList();
    }, [])
  return (
    <div>
        <Tabs className="profilePetSection">
            <TabList>
                {userRole==="seller"? <Tab>Selling</Tab> : <span></span>}
                <Tab>Adoption</Tab>
                <Tab>Mating</Tab>
            </TabList>
            {userRole==="seller" ? 
            <TabPanel>
                <div className='petSection'>
                    <div className='sectionHeader'>
                        <h2>Dogs for Selling</h2>
                        {/* <button className='addDog'>+ New Dog</button> */}
                    </div>
                    <div className='dogWrapper'>
                        <div className='addDogCard' onClick={()=>navigate("/newDog/seller")}>
                            + <br/> Add Dog
                        </div>
                        {
                            sellingList!=null && sellingList.length > 0 && sellingList.map((e, i) => {
                                return(
                                    <DogForSaleCard key={i} dogDetails={e}/>
                                )
                            })
                        }
                    </div>
                </div>
            </TabPanel>
            : 
            <span></span>
            }
            <TabPanel>
                <div className='petSection'>
                    <div className='sectionHeader'>
                        <h2>Dogs for Adoption</h2>
                        {/* <button className='addDog'>+ New Dog</button> */}
                    </div>
                    <div className='dogWrapper'>
                        <div className='addDogCard' onClick={()=>navigate("/newDog/adoption")}>
                            + <br/> Add Dog
                        </div>
                        {
                            adoptionList!=null && adoptionList.length > 0 && adoptionList.map((e, i) => {
                                return(
                                    <DogForSaleCard key={i} dogDetails={e}/>
                                )
                            })
                        }
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='petSection'>
                    <div className='sectionHeader'>
                        <h2>Dogs for Mating</h2>
                        {/* <button className='addDog'>+ New Dog</button> */}
                    </div>
                    <div className='dogWrapper'>
                        <div className='addDogCard' onClick={()=>navigate("/newDog/mydog")}>
                            + <br/> Add Dog
                        </div>
                        {
                            matingList.length > 0 && matingList.map((e, i) => {
                                return(
                                    <DogForSaleCard dogDetails={e}/>
                                )
                            })
                        }
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default PetSection