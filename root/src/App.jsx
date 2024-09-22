import Header from './components/Header';
import Hero from './components/Hero';
import LandAbout from './components/Land-About';
import LandServices from './components/land-Services';
import LandCounting from './components/Land-Counting';
import LandChoose from './components/Land-choose';
import LandBrand from './components/Land-Brand';
import LandTestimonial from './components/Land-testimonial';
import Footer from './components/Footer';
import LandEnquiry from './components/Land-enquiry';
import LandLogoslider from './components/Land-logoslider';
function App() {
  
  return (
    
    <div>
      <div className="w-full h-screen bg-cover bg-black bg-center relative">
        <Header />
        <Hero />
        <LandLogoslider />
        <LandAbout />
        <LandServices />
        <LandCounting />
        <LandChoose />
        <LandBrand />
        <LandTestimonial />
        {/* <LandEnquiry /> */}
        <Footer />      
      </div>
    </div>
  );
}

export default App;
