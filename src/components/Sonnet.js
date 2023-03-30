import Contact from './contact.js';
import Home from './home.js';
import Services from './Services.js';

export default function Sonnet({name}){
    return(
        <div>
            {name === 'home' ? <Home/>: ""}
            {name === 'contact' ? <Contact />: ""}
            {name === 'services' ? <Services />: ""}
        </div>
    );
}