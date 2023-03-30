import './App.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Container, Navbar} from 'react-bootstrap';
import Internaltabs from './components/internaltabs.js';
import Footer from './components/footer';


function App() {
  return (
    <div>
<div className='Container text-center'>  
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shashank R P</Navbar.Brand>
          {/* <Nav className="d-flex ">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <Internaltabs/>
      <Footer/>
</div>
</div>
  );
}

export default App;
