import "./App.css";
import Brands from "./components/Brands";
import HeroSection from './components/HeroSection';
import Information from "./components/Information";
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Information />
   <Brands />
      <Testimonials />
    
    </div>
  );
}

export default App;
