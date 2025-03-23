const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative py-16 bg-gradient-to-r from-indigo-700 to-blue-900">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Powerful graph-based AI solutions for your complex challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Main services section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What We Offer</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Comprehensive Graph AI Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We offer end-to-end services for implementing graph-based AI solutions across industries.
            </p>
          </div>

          {/* Services list */}
          <div className="mt-16">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {/* Service 1 */}
              <div className="relative">
                <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Graph Data Modeling</h3>
                      <p className="mt-2 text-base text-gray-500">
                        We design and implement custom graph data models that capture the complex relationships in your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="relative">
                <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Graph Analytics</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Extract valuable insights from your connected data using our advanced graph analytics solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="relative">
                <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Graph-Based Machine Learning</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Leverage the power of graph neural networks and other ML techniques for your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional services */}
          <div className="mt-16">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Service 4 */}
              <div className="relative">
                <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Custom Graph Software Development</h3>
                      <p className="mt-2 text-base text-gray-500">
                        End-to-end development of customized graph database and visualization solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="relative">
                <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Consulting & Training</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Expert guidance and training on graph technologies and implementation strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your data?</span>
            <span className="block text-blue-300">Contact us today to discuss your project.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 