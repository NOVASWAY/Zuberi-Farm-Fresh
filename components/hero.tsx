export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Artistic background elements */}
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-green-200 dark:bg-green-800 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-yellow-200 dark:bg-yellow-900 opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 rounded-full bg-red-200 dark:bg-red-900 opacity-20 blur-2xl"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 mx-auto flex flex-col items-center">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight text-green-800 dark:text-green-300">
              Zuberi Fresh Farm
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-green-700 dark:text-green-200 max-w-2xl">
            Quality vegetables and fruits
            <span className="block text-sm text-red-600 dark:text-red-400 mt-2">🚀 DEPLOYMENT TEST - UPDATED</span>
          </p>

          <div className="pt-6">
            <div className="relative inline-block">
              <a
                href="#products"
                className="relative z-10 px-6 sm:px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors inline-block text-sm sm:text-base"
              >
                Explore Our Products
              </a>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-green-500 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

