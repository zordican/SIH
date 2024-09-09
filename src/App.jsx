import './App.css'
import Chartii from './Components/Chart/Chartii'; 
import Hero from './Pages/Hero/Hero'


function App() {
  console.log("Rendering App component");

  return (
    <>
     <Hero/>
     <Chartii/>
    </>
  );
}

export default App;
