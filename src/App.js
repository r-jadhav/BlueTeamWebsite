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
import api from './constant/api';
import MobileFleetManagement from './pages/MobileFleetManagement';
import React from "react"
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [services, setService] = React.useState();
  const getServices = () => {
    api
      .get("/service/getServicecategory")
      .then((res) => {
        setService(res.data.data);
      })
  };
  React.useEffect(() => {
    getServices()
  }, [])
  
  return (
   <>
  <Router>
    <Header services={services}/>
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
        <Route path="mobilefleetmanagement" element={<MobileFleetManagement/>}/>
      </Routes>
    <Footer/>
  </Router>

   </>
  );
}
export default App;