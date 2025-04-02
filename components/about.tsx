export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-8 border-dashed border-green-200 dark:border-green-800 opacity-30 rotate-12"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 text-green-800 dark:text-green-300">
            About Our Farm
          </h2>

          <div className="relative mb-12">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-green-300 dark:from-green-600 dark:to-green-800"></div>
            <div className="pl-6">
              <p className="text-lg text-green-700 dark:text-green-200 mb-4">
                Established in 2020, Zuberi Fresh Farm is a premium horticulture farm dedicated to growing the highest
                quality vegetables and fruits using sustainable farming practices.
              </p>
              <p className="text-lg text-green-700 dark:text-green-200">
                Our farm specializes in a variety of produce including colored and green capsicum, broccoli,
                cauliflower, cucumber, lettuce, celery, coriander, beetroot, tomatoes, and strawberries. We also offer
                nursery seedlings of cabbage, spinach, kale, and more.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-green-900/50 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 dark:bg-green-400 rounded-sm rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">Fresh</h3>
              <p className="text-green-600 dark:text-green-400">
                Harvested at peak ripeness for maximum flavor and nutrition
              </p>
            </div>

            <div className="bg-white dark:bg-green-900/50 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 dark:bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">Sustainable</h3>
              <p className="text-green-600 dark:text-green-400">Environmentally conscious farming practices</p>
            </div>

            <div className="bg-white dark:bg-green-900/50 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-green-500 dark:border-green-400"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">Quality</h3>
              <p className="text-green-600 dark:text-green-400">Premium produce grown with care and expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

