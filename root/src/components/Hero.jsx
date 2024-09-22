import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const MovingStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0002;
      starsRef.current.rotation.y += 0.0002;
    }
  });

  return <Stars ref={starsRef} />;
};

const Hero = () => {
  
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    gsap.to(text, {
      xPercent: 100,
      ease: "linear",
      duration: 15,
      repeat: -1
     
    });

  }, []);
  const services = [
    'On-Page SEO', 'Content Marketing', 'Off-Page SEO', 
    'Social Media Marketing', 'Analytics and Reporting', 'Influencer Marketing'
  ];

  const mainRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const clientsRef = useRef(null);
  const servicesRef = useRef(null);
  const socialRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(h1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(pRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(clientsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(servicesRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(socialRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(logosRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6");

  }, []);

  return (
    <>
    <div className="absolute inset-0 z-0">
      <Canvas>
        <MovingStars />
      </Canvas>
    </div>
    <main ref={mainRef} className="container mx-auto bg-black bg-opacity-80 px-4 pt-32 text-white relative z-5">
      <h1 
        ref={h1Ref}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center"
      >
        Transform Your <span className="text-blue-600">Online Business</span> With <span className="relative">Metanics<svg className="absolute w-full h-4 bottom-0 left-0" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="#2563EB" strokeWidth="4"/>
        </svg></span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div 
          ref={clientsRef}
          className="flex flex-col sm:flex-row items-center mb-4 md:mb-0"
        >
          <div className="flex -space-x-4 mb-2 sm:mb-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-blue-500" />
            ))}
          </div>
          <span className="ml-0 sm:ml-2 text-lg sm:text-xl font-bold">1500+ Trusted Clients</span>
        </div>
        <p 
          ref={pRef}
          className="text-sm sm:text-base md:text-lg max-w-xl text-center md:text-left"
        >
          Viverra vitae congue eu consequat ac. Tortor condimentum lacinia quis vel eros donec. Faucibus interdum posuere lorem ipsum.
        </p>
      </div>
      <div 
        ref={servicesRef}
        className=" rounded-3xl p-4 sm:p-6 md:p-8 mb-12"
      >
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div 
              key={service}
              className="bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-5 rounded-full text-center text-xs sm:text-sm hover:bg-black hover:border-white border border-blue-500 transition-colors relative"
            >
              {service}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mb-3 sm:mb-0">
            View Portfolio
          </button>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div 
        ref={socialRef}
        className="flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
          {[
            { Icon: FaFacebook, hoverColor: 'hover:bg-[#1877F2]' },
            { Icon: FaTwitter, hoverColor: 'hover:bg-[#1DA1F2]' },
            { Icon: FaInstagram, hoverColor: 'hover:bg-[#E4405F]' },
            { Icon: FaPinterest, hoverColor: 'hover:bg-[#BD081C]' },
            { Icon: FaYoutube, hoverColor: 'hover:bg-[#FF0000]' }
          ].map(({ Icon, hoverColor }, index) => (
            <div 
              key={index} 
              className={`w-8 h-8 sm:w-10 sm:h-10 bg-aspire-green rounded-full flex items-center justify-center transition-colors duration-300 ${hoverColor}`}
            >
              <Icon className="text-white text-lg sm:text-xl" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-6">
          {['Proven Results', 'Experienced Team', 'Affordable Pricing'].map((text, index) => (
            <span key={index} className="text-xs sm:text-sm">{text}</span>
          ))}
        </div>
      </div>
      
    </main>
    </>
  );
};


export default Hero;