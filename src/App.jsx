import React,{useState} from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contac from './components/contac/Contac';
import Portfolio from './components/portfolio/Portfolio';
import './app.scss'
import Menu from './components/menu/Menu';


const uri='https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=4e7e30485ac513416d23ba5645054524'
function App() {
const [menuOpen,setMenuOpen]=useState(false)

  return (
    <div className='app'>
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
      
      <Intro/> 
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contac/>
 
      
    
      </div>
    </div>
    
  );
}

export default App;
