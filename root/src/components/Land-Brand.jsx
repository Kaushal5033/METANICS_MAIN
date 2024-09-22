import React from 'react';

const LandBrand = () => {
  const services = [
    {
      title: 'Visibility Boost',
      description: 'Habitasse curae suscipit fringilla himenaeos dis lectus mattis ultrices. Praesent maximus sollicitudin duis eu sit id curae.',
      category: 'On-Page SEO',
      imageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with actual image URL
    },
    {
      title: 'Traffic Surge',
      description: 'Habitasse curae suscipit fringilla himenaeos dis lectus mattis ultrices. Praesent maximus sollicitudin duis eu sit id curae.',
      category: 'Off-Page SEO',
      imageUrl: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with actual image URL
    },
    {
      title: 'Conversion Accelerator',
      description: 'Habitasse curae suscipit fringilla himenaeos dis lectus mattis ultrices. Praesent maximus sollicitudin duis eu sit id curae.',
      category: 'Analytics and Reporting',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with actual image URL
    },
    
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          Transforming Brands with Proven Strategies
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-96 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-0 left-0 m-4 p-2 bg-black bg-opacity-70 rounded-full">
                <span className="text-white font-bold text-sm tracking-wider">Logoipsum</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-blue-500 text-lg font-semibold mb-2 uppercase tracking-wide">{service.category}</h3>
              <h2 className="text-3xl font-bold mb-4 text-gray-100">{service.title}</h2>
              <p className="mb-6 text-gray-300">{service.description}</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-100 text-white font-bold py-3 px-4 rounded-full hover:from-blue-300 hover:to-blue-500 transition duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandBrand;
