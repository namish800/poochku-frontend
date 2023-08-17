import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DogForSaleCard from '../../Reusable/DogForSaleCard';

const PetSection = () => {
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
                        <div className='addDogCard'>
                            + <br/> Add Dog
                        </div>
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
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
                        <div className='addDogCard'>
                            + <br/> Add Dog
                        </div>
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                        <DogForSaleCard />
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default PetSection