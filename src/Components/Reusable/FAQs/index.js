import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><b>How do I adopt a dog through your platform?</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            To adopt a dog, browse our available dogs on the <Link to ="/adopt">Adopt</Link> page, choose the one you connect with, and click on the "Enquire" button. Directly connect with the person who's listed the dog for adoption.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><b>Do you offer any health guarantees?</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            We work with responsible breeders who offer health guarantees for the dogs they sell. In case of any health issues, we are here to assist you and address any concerns.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><b>What makes Poochku different from other Websites?</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            We are a social network platform, directly connecting pooch lovers with responsible dog breeders across India, be it home bred or kennel bred. Members of our Poochku community prioritize the well-being of different dog breeds and puppies above all else. Poochku partners make sure their dogs have a comfortable transition into your home. Our breeders in India love each puppy like their own pet. We strictly adhere to their natural breeding and our volunteers are the well-trained experts & dog breeders.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><b>What should I know before getting a dog?</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Before buying a dog, there are several important factors to consider to ensure a successful and fulfilling dog ownership experience. Here's a list of essential things to know before bringing a dog into your life:
            <ul>
                <li><b>Time Commitment:</b> Dogs require time and attention. They need regular exercise, mental stimulation, training, and socialization. Be prepared to dedicate time daily to meet their needs.</li>
                <li><b>Lifestyle Compatibility:</b> Consider your lifestyle and how it aligns with dog ownership. Some breeds may require more exercise, grooming, or space than others.</li>
                <li><b>Space and Housing:</b> Ensure you have enough space and a suitable living environment for the size and needs of the dog you plan to bring home.</li>
                <li><b>Financial Responsibility:</b> Dogs come with various expenses, including food, grooming, veterinary care, training, and accessories. Budget accordingly for the lifetime of the dog.</li>
                <li><b>Health and Veterinary Care:</b> Learn about the general health concerns and specific needs of the breed you are interested in. Regular veterinary check-ups and preventive care are essential for a healthy dog.</li>
                <li><b>Training and Socialization:</b> Be prepared to invest time and effort in training your dog and exposing them to different environments to ensure proper socialization.</li>
                <li><b>Long-Term Commitment:</b> Dogs can live for many years. Make sure you are ready for a long-term commitment and prepared to provide care for the dog throughout its life.</li>
            </ul>
            </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default FAQs