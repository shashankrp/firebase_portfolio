import { LinkedIn } from "@mui/icons-material";
import Email from "@mui/icons-material/Email";

export default function Footer(){
    return(
        <div style={{backgroundColor: 'black', color: 'white', position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
            <h5> Contacts:- <a href="mailto:shashankrp2@gmail.com"><Email fontSize="small"/></a> <a href="https://www.linkedin.com/in/shashank-r-patil-5a866b15a/"><LinkedIn fontSize="small"/></a></h5>
             
            <p style={{textAlign: 'center'}}>&#169; All copy rights Reserved. Shashank R P</p>
        </div>
    );
}