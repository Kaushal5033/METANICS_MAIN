import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      
    },
    {
      id: 2,
      title: "Market Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
     
    },
    {
      id: 3,
      title: "Strategy Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      
    },
  ];
const stats = [
  { number: 20, label: 'Years of Experience' },
  { number: 173, label: 'Projects Done' },
  { number: 1500, label: 'Trusted Clients' },
  { number: 52, label: 'Expert Team' }
];

export default function Stats() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const numbers = numberRefs.current;

    numbers.forEach((number, index) => {
      const targetNumber = stats[index].number;

      gsap.to(number, {
        innerHTML: targetNumber,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          onEnter: () => gsap.to(number, {
            innerHTML: targetNumber,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          })
        }
      });
    });
  }, []);

  return (
    <>
    <div ref={sectionRef} className="bg-[url('https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?t=st=1726913187~exp=1726916787~hmac=4b9ef068bb436e5223621b0f35904d262046d4a4738fb40f11f3ed2143e68b68&w=1480')] bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-8 relative before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30 before:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-9">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-600 bg-opacity-20 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 backdrop-filter backdrop-blur-lg border border-blue-300 border-opacity-30">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white">
              <span ref={el => numberRefs.current[index] = el}>0</span>
              {stat.number > 100 ? '+' : ''}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="text-center mb-10">
        <h2 className="text-lg sm:text-xl text-blue-400 mb-2 gsap-title" ref={titleRef}>Our Process</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gsap-subtitle" ref={subtitleRef}>Step-by-<span className="text-blue-500">Step to Achieving</span> Your Goals</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="p-8 border border-gray-700 rounded-lg text-center transition-all duration-300 transform hover:border-blue-500 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm gsap-card relative mt-10"
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}

          >
            <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
            <div className="absolute top-0 left-0 text-white text-8xl font-bold z-[-1]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
