import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const blogs = [
        {
          id: 1,
          title: "Creating Compelling Content That Convert",
          date: "August 11, 2024",
          description:
            "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus...",
          image: "https://via.placeholder.com/500",
          comments: 0,
        },
        {
          id: 2,
          title: "Getting Started with Google Ads",
          date: "August 11, 2024",
          description:
            "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus...",
          image: "https://via.placeholder.com/500",
          comments: 0,
        },
        {
          id: 3,
          title: "The Power of Influencer Marketing in 2024",
          date: "August 11, 2024",
          description:
            "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus...",
          image: "https://via.placeholder.com/500",
          comments: 0,
        },
      ];
    
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Client',
      message: 'Pellentesque primis litora malesuada, torquent venenatis commodo. Egestas taciti in posuere.',
      img: 'https://images.pexels.com/photos/3064714/pexels-photo-3064714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Client',
      message: 'Pellentesque primis litora malesuada, torquent venenatis commodo. Egestas taciti in posuere.',
      img: 'https://images.pexels.com/photos/5682131/pexels-photo-5682131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Peter Walk',
      role: 'Client',
      message: 'Pellentesque primis litora malesuada, torquent venenatis commodo. Egestas taciti in posuere.',
      img: 'https://images.pexels.com/photos/5685289/pexels-photo-5685289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const testimonialRefs = useRef([]);
  const blogRefs = useRef([]);
  const blogGridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;
    const testimonialElements = testimonialRefs.current;

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

    gsap.fromTo(
      leftSection,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightSection,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    testimonialElements.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5 + index * 0.2,
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
    <>
    <section ref={sectionRef} className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div ref={leftSectionRef} className="md:w-1/2 lg:w-2/5 relative">
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Success Stories From Those Who Know Us Best</h2>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Vel inceptos euismod justo turpis platea eu. Est risus quam bibendum accumsan aliquam cubilia.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 duration-300 text-sm md:text-base">
              View More
            </button>
            <div className="mt-8 md:mt-10 lg:mt-12 relative">
              <img
                className="rounded-xl w-full md:w-11/12 lg:w-5/6 md:h-40 lg:h-48 object-cover shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
                src="https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Testimonial group"
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 p-4 md:p-6 rounded-lg text-center transform translate-y-1/3 translate-x-1/6 md:translate-y-1/2 md:translate-x-1/4 hover:bg-opacity-90 transition duration-300">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">99%</h3>
                <p className="text-white font-semibold text-sm md:text-base">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div ref={rightSectionRef} className="md:w-1/2 md:ml-16 mt-10 md:mt-0">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                ref={el => testimonialRefs.current[index] = el}
                className="bg-black p-6 rounded-lg mb-6 shadow-lg transition-all duration-300 ease-in-out hover:border-blue-500 hover:border-2 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <span className="text-blue-400 text-sm font-semibold">{testimonial.role}</span>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed">{testimonial.message}</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-white mt-4 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* blog portion */}
    <section className="bg-black text-white py-16">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h4 className="text-blue-500 text-lg font-bold">Insight</h4>
        <h2 className="text-4xl font-bold">Access Our Comprehensive Blog Archive</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={blogGridRef}>
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            ref={el => blogRefs.current[index] = el}
          >
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-white text-lg font-bold">Read Now</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">{blog.title}</h3>
              <p className="text-blue-400 text-sm mb-4">{blog.date}</p>
              <p className="text-gray-300 mb-6">{blog.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-500 font-bold hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  Read More <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <div className="text-gray-500 flex items-center">
                  <i className="fas fa-comment-alt mr-2"></i> {blog.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
  );
};

export default Testimonials;
