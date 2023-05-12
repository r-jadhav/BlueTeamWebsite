import './App.css';
import {HashRouter as Router, Routes,Route, } from 'react-router-dom'
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Faq from './pages/Faq';

const App = () => {
  return (
   <>
  <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="aboutus" element={<AboutUs/>} />
        <Route path="services" element={<Services/>}/>
        <Route path="faq" element={<Faq/>}/>
      </Routes>
    <Footer/>
  </Router>

   </>
  );
}
export default App;


// bootstrap uninstall