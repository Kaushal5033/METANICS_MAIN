import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPenFancy, FaSearch, FaLink, FaShareAlt, FaChartBar, FaUsers } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Content Marketing",
    description:
      "Create engaging and valuable content to attract and retain a clearly defined audience, ultimately driving profitable customer action.",
    icon: <FaPenFancy className="text-3xl text-blue-500" />,
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize individual web pages to rank higher and earn more relevant traffic in search engines through content and HTML source code improvements.",
    icon: <FaSearch className="text-3xl text-blue-500" />,
  },
  {
    title: "Off-Page SEO",
    description:
      "Improve site's rankings in search engine results pages through activities outside the boundaries of your website, like link building and social media marketing.",
    icon: <FaLink className="text-3xl text-blue-500" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Leverage social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic.",
    icon: <FaShareAlt className="text-3xl text-blue-500" />,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Track, measure, and analyze your marketing efforts to gain insights and make data-driven decisions for continuous improvement.",
    icon: <FaChartBar className="text-3xl text-blue-500" />,
  },
  {
    title: "Influencer Marketing",
    description:
      "Collaborate with influential people in your industry to increase brand awareness, drive traffic, and generate leads through their engaged audiences.",
    icon: <FaUsers className="text-3xl text-blue-500" />,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardRefs.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div ref={titleRef} className="text-center mb-12">
        <p className="text-blue-500 font-bold text-lg sm:text-xl mb-2">Services</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Comprehensive Solutions for Your <span className="text-blue-500">Digital Growth</span></h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center h-16 w-16 border-2 border-blue-500 text-black text-2xl rounded-full mb-6 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
            <p className="text-gray-400 text-center mb-6">{service.description}</p>
            <div className="text-center">
              <a
                href="#"
                className="text-blue-500 font-semibold inline-flex items-center hover:text-blue-400 transition duration-300"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
