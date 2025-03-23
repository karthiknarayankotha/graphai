const About = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About GraphAI
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Pioneering the future of graph-based artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {/* Company mission */}
          <div className="text-lg max-w-prose mx-auto">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-8 text-lg text-gray-500">
              At GraphAI, we are dedicated to solving complex problems through innovative graph-based AI solutions. 
              We believe that the connections between data points are just as important as the data itself, and our 
              mission is to unlock these insights to drive value for our clients.
            </p>
            <p className="mt-8 text-lg text-gray-500">
              We combine cutting-edge graph technologies with advanced machine learning to deliver powerful, 
              scalable solutions across a variety of industries. Our expertise allows us to tackle challenges that 
              traditional approaches cannot address effectively.
            </p>
          </div>

          {/* Values section */}
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Values</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Value 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Innovation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We continuously push the boundaries of what's possible with graph-based AI technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Collaboration</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We believe in working closely with our clients to understand their unique challenges and deliver tailored solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Excellence</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We strive for excellence in everything we do, from research and development to customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team section */}
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Team</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Our diverse team brings together expertise in graph theory, machine learning, and software engineering.
            </p>
            <div className="mt-10">
              <p className="text-center text-gray-500">
                We're a growing team of passionate individuals dedicated to pushing the boundaries of what's possible with graph-based AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 