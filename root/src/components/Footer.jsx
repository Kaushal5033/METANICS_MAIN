import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section - Logo and About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-500">Metanics</h2>
            <p className="text-sm">
              Quam lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor sit. Vel quam elementum pulvinar etiam.
            </p>
            <p className="text-sm">
              <span className="block">Somewhere, Earth</span>
              <a href="mailto:aspire@dummy.com" className="block hover:text-green-500 transition-colors">
                aspire@dummy.com
              </a>
              <span className="block">+123 123 123</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Contact', 'Team', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mt-8 lg:mt-0">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'On-Page SEO',
                'Content Marketing',
                'Off-Page SEO',
                'Social Media Marketing',
                'Analytics and Reporting',
                'Influencer Marketing'
              ].map((service) => (
                <li key={service}>
                  <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-blue-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Days and Contact */}
          <div className="space-y-4 mt-8 lg:mt-0">
            <h3 className="font-semibold text-lg">Work Days</h3>
            <p className="text-sm">
              Euismod elementum nisi quis eleifend quam adipiscing vitae proin
              sagittis.
            </p>
            <p className="text-sm">
              <span className="block">Mon to Fri, 09:00 - 17:00</span>
            </p>
            <a
              href="#contact-us"
              className="inline-block px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            Aspire © {new Date().getFullYear()} All Rights Reserved by FoxCreation
          </p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'pinterest', 'youtube'].map((social) => (
              <a key={social} href={`#${social}`} className="hover:text-green-500 transition-colors">
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
