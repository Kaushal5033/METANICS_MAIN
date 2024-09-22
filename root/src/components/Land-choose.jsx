import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const features = [
    {
      title: "Proven Expertise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Innovation and Adaptability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Comprehensive Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Dedicated Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
  ];

  const imageContainer = useRef(null);
  const ratingCard = useRef(null);
  const featuresContainer = useRef(null);
  const featureItem = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imageContainer.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ratingCard.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    const featureItems = featureItem.current.children;
    gsap.fromTo(
      featureItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresContainer.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Image and Overlapping Rating Card */}
        <div className="relative w-full lg:w-1/2 p-6" ref={imageContainer}>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Business Meeting"
            className="rounded-lg w-full object-cover"
          />
          {/* Overlapping Rating Card */}
          <div className="absolute bottom-0 left-0 sm:bottom-[-30px] sm:left-[-20px] bg-black p-4 sm:p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 max-w-[80%] sm:max-w-[250px]" ref={ratingCard}>
            <h3 className="text-2xl sm:text-3xl font-bold">4.9</h3>
            <div className="flex items-center mb-1 sm:mb-2">
              <span className="text-blue-400 text-sm sm:text-base mr-1 sm:mr-2">★★★★★</span>
            </div>
            <p className="text-xs sm:text-sm">
              Client Ratings
            </p>
            <p className="text-gray-400 text-xs hidden sm:block">
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="w-full lg:w-1/2 space-y-8 mt-12 lg:mt-0 p-6" ref={featuresContainer}>
          <div className="text-blue-400 uppercase mb-4 text-sm" ref={titleRef}>
            Why Choose Us
          </div>
          <h1 className="text-4xl font-bold mb-6" ref={subtitleRef}>
            Empowering Your Business to Thrive
          </h1>
          <p className="text-gray-400 mb-8">
            Scelerisque placerat fames aliquam tortor augue interdum quisque proin. Justo ornare commodo cursus; sodales magnis nam.
          </p>
          <ul className="space-y-6" ref={titleRef}>
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4" ref={featureItem}>
                <div className="text-3xl text-blue-400">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title} </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div className="bg-blue-500 bg-opacity-80 rounded-xl shadow-xl w-full max-w-7xl mx-auto overflow-hidden">
        {/* Replace with your actual image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder for your image
            alt="Background"
            className="w-full object-cover h-[300px] lg:h-[400px]"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-8 rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-center">
              <span className="text-blue-400">Unlock Your Potential</span>, Reach Out <br /> and Transform Your Business!
            </h2>
            <p className="text-white text-center mb-6 max-w-md mx-auto">
              Commodo facilisis egestas maximus volutpat iaculis maecenas augue tortor aptent. Effictur interdum laoreet ullamcorper des velit purus praesent conubia magna.
            </p>
            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChooseUs;
