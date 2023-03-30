import Container from 'react-bootstrap/Container';
import images from '../assets/Shashank.jpg';
import myHome from './home.css';

import { Helmet } from 'react-helmet';

export default function Home(){
    return (<Container className={{myHome}}>
        <Helmet>
        <title>Shashank R P</title>
      </Helmet>
        <h1>Welcome to My page</h1>
        <br/>
        <img src={images} width='136vw' height='136vh' style={{borderRadius: '50%'}} alt="Shashank RP"/>
        <br/>
        <br/>
        <p>Hi all, welcome to my page my name is <b>Shashank R P</b>, i am a <b>Software Enginner</b> at <a href='https://www.ellucian.com/' style={{color: 'black', textDecoration: 'none'}}><b>Ellucian</b></a> and i have <b>1 year 10 months</b> of expirience as of now and i am interested in <b>learning and developing</b> web applications, so i am working on different web applications the common languages or scriptings that i used for developing are <b>PHP, React JS, NodeJS and Flutter</b>, this site is actually been developed using <b>React JS and react-bootstrap</b>.</p>
    </Container>);
}