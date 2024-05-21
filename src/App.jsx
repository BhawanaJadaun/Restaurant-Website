import React,{useState,useEffect} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import Banner from "./Components/Banner/Banner.jsx";
import WhyChoose from "./Components/WhyChoose/WhyChoose.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Popup from "./Components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css"
const App = () => {
  const[showPopup, setshowPopup] = React.useState(false);
  const HandlePopup = ()=>{
    setshowPopup(true);
  };
  React,useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (<div className= 'overflow-x-hidden'>
    <Navbar HandlePopup = {HandlePopup} />
    <Hero/>
  <Banner/>
  <WhyChoose/>
  <About HandlePopup = {HandlePopup} />
  <Banner/>
  <Footer/>
  <Popup showPopup = {showPopup} setshowPopup = {setshowPopup} />
  </div>
  );
}
export default App;