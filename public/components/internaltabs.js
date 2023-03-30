import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from './Sonnet';

function Internaltabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      variant='pills'
      style={{backgroundColor: 'black'}}
      justify
    >
      <Tab eventKey="home" title="About">
        <Sonnet name="home"/>
      </Tab>
      <Tab id="services" eventKey="services" title="Services">
        <Sonnet name="services"/>
      </Tab>
      <Tab eventKey="contact" title="Contact Me" >
        <Sonnet name="contact"/>
      </Tab>
    </Tabs>
  );
}

export default Internaltabs;