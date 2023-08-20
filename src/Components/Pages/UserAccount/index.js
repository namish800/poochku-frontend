import React from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocationOpt from '../../Reusable/LocationOpt';
import PetSection from './PetSection';
import "./style.css"
import MobileNav from '../../Reusable/MobileNav';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const UserAccount = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let callback = function(key) {};

  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper'>
          <div className='pageHeadingSticky nonStick'>
            <div>
              <h1 className='buyPageHeading'>My Account</h1>
              <p className='buyPageInfo'>Manage your account and pet details here.</p>
            </div>
          </div>
          <div className='userTabsWrapper'>
          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
            className='userAccountWrapper'
            >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="My Pets" {...a11yProps(1)} />
                <Tab label="Security" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <h2>Edit your profile</h2>
                <form className='profileForm'>
                  <div className='formRow'>
                    <div>
                      <label>First Name*</label>
                      <input type="text" placeholder='Enter your first name' name="fname"/>
                    </div>
                    <div>
                      <label>Last Name*</label>
                      <input type="text" placeholder='Enter your last name' name="lname"/>
                    </div>
                  </div>
                  <div className='formRow'>
                    <div>
                      <label>Whatsapp Number</label>
                      <input type="number" placeholder='Enter your whatsapp number' name="wanumber"/>
                    </div>
                    <div>
                      <label>Contact Number</label>
                      <input type="number" placeholder='Enter your number' name="number"/>
                    </div>
                  </div>
                  <div className='formRow'>
                    <div>
                      <label>Email</label>
                      <input type="email" placeholder='Enter your email id' name="email"/>
                    </div>
                    <div>
                      <label>Gender</label>
                      <select>
                        <option value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className='formRow'>
                    <div>
                      <label>Select State</label>
                      <LocationOpt />
                    </div>
                  </div>
                </form>
                <button className='landingButtonMain secondary adopt'>Update</button>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PetSection />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h2>Edit your profile</h2>
                <form className='profileForm security'>
                  <div className='formRow'>
                      <div>
                        <label>Current Password</label>
                        <input type="text"/>
                      </div>
                      <div>
                        <label>New Password</label>
                        <input type="password"/>
                      </div>
                      <div>
                        <label>Confirm New Password</label>
                        <input type="password"/>
                      </div>
                    </div>
                </form>
                <button className='landingButtonMain secondary adopt'>Update Password</button>
            </TabPanel>
          </Box>
          </div>
        </div>
        <MobileNav/>
    </div>
  )
}

export default UserAccount