import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DogForSaleCard from '../../Reusable/DogForSaleCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PetSection = () => {
    const [adoptionList, setAdoptionList] = useState([]);
    const [matingList, setMatingList] = useState([])
    const navigate = useNavigate();

    const getAdoptionList = async () => {
        try{
            const res = await axios.get("https://poochku-prod.azurewebsites.net/pet", {params: {
                serviceCode: "A",
                page: "0",
                size: "10"
            }});
            console.log("pets for adoption", res)
            setAdoptionList(res?.data?.pets)
        }catch(err){
            console.log(err)
        }
    }
    const getMatingList = async () => {
        try{
            const res = await axios.get("https://poochku-prod.azurewebsites.net/pet", {params: {
                serviceCode: "M",
                page: "0",
                size: "10"
            }});
            // console.log("pets for mating", res)
            setMatingList(res?.data?.pets)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAdoptionList();
        getMatingList();
    }, [])
  return (
    <div>
        <Tabs className="profilePetSection">
            <TabList>
                <Tab>Mating</Tab>
                <Tab>Adoption</Tab>
            </TabList>
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
                            adoptionList.length > 0 && adoptionList.map((e, i) => {
                                return(
                                    <DogForSaleCard key={i} dogDetails={e}/>
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