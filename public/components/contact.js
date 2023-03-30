import { Container } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myContact from './contact.css'

export default function Contact(){
    return (
        <Container className={{myContact}}>
            <div>
            <Phone fontSize="large" />
            <a href="#" style={{textDecoration: 'none', paddingLeft: '1vw', pointerEvents: 'none'}}> +91-8660-488087
            </a>
            </div>
            <div>
            <EmailIcon fontSize="large"/>
            <a href="mailto:shashankrp2@gmail.com" style={{textDecoration: 'none', paddingLeft: '1vw'}}> Shashankrp2@gmail.com
            </a>
            </div>
            <div>
                <LinkedInIcon fontSize="large"/>
                <a href="https://www.linkedin.com/in/shashank-r-patil-5a866b15a/" style={{textDecoration: 'none', paddingLeft: '1vw'}}> Shashank R Patil </a>
            </div>
        </Container>
    );
}