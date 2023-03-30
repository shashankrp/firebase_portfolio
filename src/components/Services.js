import { Button,Container } from "react-bootstrap";
import myService from "./Service.css";

export default function Services(){
    return(
        <Container className={{myService}}>
            <h1> <u>Services that i offer</u> :-) </h1>
            <br />
            <ol>
  <li>Web Design / Front end Design (ReactJS, flutter with Bootstrap)</li>
  <li>Back end development (NodeJS, PHP, SpringMVC, SpringBoot)</li>
  <li>Integration of front end with back end</li>
  <li>Full Stack</li>
</ol> 
<Button variant="primary" onClick={()=>document.getElementById("justify-tab-example-tab-contact").click()}>Hire me</Button>{''}

        </Container>
    );
}