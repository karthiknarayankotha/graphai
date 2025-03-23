import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Innovative Graph AI Solutions
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            We combine cutting-edge graph technology with artificial intelligence to solve complex problems and deliver transformative insights.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 