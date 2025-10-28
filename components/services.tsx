export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -z-10 bottom-0 left-0 w-full h-1/2">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-green-100 to-transparent dark:from-green-900/50 dark:to-transparent opacity-70"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-green-800 dark:text-green-300">
            Our Services
          </h2>

          <div className="bg-white dark:bg-green-900/50 rounded-xl shadow-lg overflow-hidden border border-green-100 dark:border-green-800">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 border-2 border-green-500 dark:border-green-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300">Agronomic Support</h3>
              </div>

              <div className="space-y-4 pl-16">
                <p className="text-green-700 dark:text-green-200">
                  Our team provides comprehensive support to help you achieve optimal results in your farming endeavors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <div className="w-4 h-4 mt-1 bg-green-500 dark:bg-green-400 rounded-sm rotate-45 mr-3"></div>
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Soil Analysis</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Comprehensive soil testing and recommendations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-4 h-4 mt-1 bg-green-500 dark:bg-green-400 rounded-sm rotate-45 mr-3"></div>
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Crop Planning</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Strategic planning for optimal yields
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-4 h-4 mt-1 bg-green-500 dark:bg-green-400 rounded-sm rotate-45 mr-3"></div>
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Pest Management</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">Integrated pest management solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-4 h-4 mt-1 bg-green-500 dark:bg-green-400 rounded-sm rotate-45 mr-3"></div>
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Irrigation Consulting</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Advanced water management and irrigation systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-8 border-t border-green-100 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-300">Technology Solutions</h3>
              <p className="text-green-700 dark:text-green-200 mb-6">
                We offer cutting-edge agricultural technology solutions to enhance farm productivity and sustainability.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 bg-white dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  Efficient Irrigation Systems
                </span>
                <span className="inline-block px-3 py-1 bg-white dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  Energy-Efficient Equipment
                </span>
                <span className="inline-block px-3 py-1 bg-white dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  Resource Monitoring
                </span>
                <span className="inline-block px-3 py-1 bg-white dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  Sustainable Energy Solutions
                </span>
                <span className="inline-block px-3 py-1 bg-white dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  Farm Automation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

