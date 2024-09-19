import './App.css'
import About from './Components/About'
import ContactUS from './Components/ContactUS'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import PortFolio from './Components/PortFolio'
import SocialLinks from './Components/SocialLinks'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      
      <PortFolio />
      <Experience />
      <ContactUS />
    </>
  )
}

export default App
