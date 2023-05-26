import './App.css';
import {BrowserRouter as Router, Routes,Route, } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Packages from './pages/Packages';
import PackagesDetails from './pages/PackagesDetails';

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
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="terms-condition" element={<TermsCondition/>}/>
        <Route path="contactus" element={<Contact/>}/>
        <Route path="membership" element={<Membership/>}/>
        <Route path="packages" element={<Packages/>}/>
        <Route path="packages-details" element={<PackagesDetails/>}/>
      </Routes>
    <Footer/>
  </Router>

   </>
  );
}
export default App;


// bootstrap uninstall