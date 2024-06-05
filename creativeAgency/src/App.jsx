import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Service from './Components/Service/Service';
import Protfolio from './Components/Protfolio/Protfolio';
import Expert from './Components/Expert/Expert';
import Testimonial from './Components/Testimonial/Testimonial';
import Blog from './Components/Blog/Blog';


function App() {

  return (
    <>
     <Navbar/>
     <Banner />
     <Service/>
     <Protfolio/>
     <Expert/>
     <Testimonial/>
     <Blog/>
    </>
  )
}

export default App
