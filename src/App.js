import "./App.css";
import SoftwareBuilding from "./components/SoftwareBuilding";
import DevelopmentApproach from "./components/DevelopmentApproach";
import { TimeLine } from "./components/TimeLine";
import CaseStudies from "./components/CaseStudies";
import Brands from "./components/Brands";
import HeroSection from './components/HeroSection';
import Information from "./components/Information";
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
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
      <TimeLine />

</div>
  );
}

export default App;
