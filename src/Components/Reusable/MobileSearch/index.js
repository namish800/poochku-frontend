import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreedOpt from '../BreedOpt'
import './style.css'
import LocationOpt from '../LocationOpt'

const MobileSearch = () => {
  return (
    <div className='mobileSearchWrapper'>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <div>Filters</div>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
            <BreedOpt />
            <LocationOpt />
            <select className='filterInput'>
              <option>Select Gender</option>
              <option>Male</option>  
              <option>Female</option>  
            </select>
            <select className='filterInput'>
              <option value="AQ">Any Quality</option>
              <option value="KR">KCI Registered</option>  
              <option value="CB">Champion Bloodline</option>  
            </select>
          </div>
          <button className='filterButton'>SEARCH</button>
        </AccordionDetails>
      </Accordion>
        {/* <input type="text" className='filterInput' placeholder='Search Location'/> */}
        
    </div>
  )
}

export default MobileSearch