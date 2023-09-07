import "./App.css";
import Stacks from "./components/Stacks";
import { HireDeveloperSection } from "./components/HireDeveloperSection";
import { Footer } from "./components/Footer";

import SoftwareBuilding from "./components/SoftwareBuilding";
import DevelopmentApproach from "./components/DevelopmentApproach";
import { TimeLine } from "./components/TimeLine";
import CaseStudies from "./components/CaseStudies";
import Brands from "./components/Brands";
import HeroSection from './components/HeroSection';
import Information from "./components/Information";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration:1600})
    AOS.refresh();
  })
  return (
    <div >
       <HeroSection />
      <Services />
      <Information />
     <Brands />
      <Testimonials />
      <CaseStudies />
     
      <SoftwareBuilding />
    <DevelopmentApproach />
    <Stacks />
      <TimeLine />

<HireDeveloperSection />
<Footer />


</div>
  );
}

export default App;
