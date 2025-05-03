import { getAssetPath } from "@/utils/path-utils"
import Image from 'next/image'

export function Products() {
  const products = [
    {
      name: "Green Capsicum",
      description: "Fresh, crisp green bell peppers",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Capsicum.jpeg-Z8FJex7z6xFkh0YDUjml6BH6bQUh6P.jpeg",
    },
    {
      name: "Broccoli",
      description: "Nutritious and tender broccoli florets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broccoli-ywQgeB5uy1jGTfmArJJnEOd9xOpcr2.jpeg",
    },
    {
      name: "Cauliflower",
      description: "Snow-white, compact cauliflower heads",
      image: "./images/cauliflower.png",
    },
    {
      name: "Cucumber",
      description: "Cool, refreshing cucumbers",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cucumber-q4mPpG1990os8L2nkdKZelKlbH3B1m.jpeg",
    },
    {
      name: "Lettuce",
      description: "Crisp, leafy lettuce varieties",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lettuce.jpeg-iF7blKydrUSTr2gCE86QkR9iLkrXKe.jpeg",
    },
    {
      name: "Celery",
      description: "Crunchy, flavorful celery stalks",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Celery-5vTrovgJkyJ8Od9KYe3D47PRyvf7to.jpeg",
    },
    {
      name: "Coriander",
      description: "Aromatic, fresh coriander leaves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coriander-ZUGsoikYG1mgRZ5YmrPLrfDOrHksXv.jpeg",
    },
    {
      name: "Beetroot",
      description: "Deep purple, earthy beetroots",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beetroot.jpeg-EkXdGUruaoYoFh2YaYWP3D6ApVrMjh.jpeg",
    },
    {
      name: "Tomatoes",
      description: "Juicy, ripe tomatoes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tomatoes-e03AvEX6zEuXjnup9DSWsgU1xTwDGR.jpeg",
    },
    {
      name: "Strawberry",
      description: "Sweet, fragrant strawberries",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strawberry.jpeg-seDMzRtquoA6DbQjpPVQFYW9Lp7sb4.jpeg",
    },
    {
      name: "Nursery Seedlings",
      description: "Quality seedlings of cabbage, spinach, kale, and more",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nursery%20seedlings-tZFkHUf6MOZQTWqFLX3yFtXxF98oGb.jpeg",
    },
    {
      name: "Colored Capsicum",
      description: "Vibrant red, yellow, and orange bell peppers",
      image: "./images/colored-capsicum.png",
    },
    {
      name: "Mushrooms",
      description: "Organic, farm-fresh mushrooms with rich flavor and texture",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mushrooms-drqHJ1UOY7ijO4z7VfQGOn9uvWvuwo.jpeg",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-green-50 dark:bg-green-900/30">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-green-800 dark:text-green-300">
            Our Fresh Products
          </h2>
          <p className="text-lg text-green-700 dark:text-green-200">
            Harvested at peak freshness to deliver exceptional flavor and nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-green-900/50 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100 dark:border-green-800 w-full max-w-xs"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 h-40 w-40 flex items-center justify-center">
                  <div className="relative h-[150px] w-[150px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="150px"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">{product.name}</h3>
                <p className="text-green-600 dark:text-green-400 text-center">{product.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
