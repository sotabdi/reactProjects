import './App.css';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import Expert from './Components/Expert/Expert';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Protfolio from './Components/Protfolio/Protfolio';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';


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
     <Footer/>
    </>
  )
}

export default App
