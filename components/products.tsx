import { productCategories } from "@/lib/product-data";
import Image from 'next/image';
import Link from 'next/link';

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-green-50 dark:bg-green-900/30">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-green-800 dark:text-green-300">
            Our Fresh Products
          </h2>
          <p className="text-lg text-green-700 dark:text-green-200">
            Discover our wide range of fresh vegetables, from international favorites to traditional African leafy greens
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.id}/`}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-green-900/50 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-green-800"
            >
              <div className="p-8 text-center">
                {/* Category Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <h3 className="text-2xl font-bold mb-3 text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {category.name}
                </h3>
                
                {/* Category Description */}
                <p className="text-green-600 dark:text-green-400 mb-4">
                  {category.description}
                </p>
                
                {/* Product Count */}
                <div className="text-sm text-green-500 dark:text-green-500 mb-4">
                  {category.products.length} products available
                </div>
                
                {/* Featured Products Preview */}
                <div className="flex justify-center space-x-2 mb-4">
                  {category.products.slice(0, 3).map((product, index) => (
                    <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border border-green-200 dark:border-green-700">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ))}
                  {category.products.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xs text-green-600 dark:text-green-400 font-semibold">
                      +{category.products.length - 3}
                    </div>
                  )}
                </div>
                
                {/* View Products Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                    View All Products →
                  </span>
                </div>
              </div>
              
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/products/"
            className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
