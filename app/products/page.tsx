import { productCategories } from "@/lib/product-data";
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-green-900/30">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        {/* Back to Home Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-300 mb-4">
            Our Fresh Products
          </h1>
          <p className="text-xl text-green-700 dark:text-green-200 max-w-3xl mx-auto">
            Discover our wide range of fresh vegetables, from international favorites to traditional African leafy greens. 
            Each product is grown with care to deliver exceptional flavor and nutrition.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/category/${category.id}/`}
                className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-green-900/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600"
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="text-center">
                  <div className="font-semibold text-green-800 dark:text-green-300">{category.name}</div>
                  <div className="text-sm text-green-600 dark:text-green-400">{category.products.length} products</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              How to Browse Products
            </h3>
            <p className="text-blue-700 dark:text-blue-200">
              <strong>Click on any category above</strong> to see only products from that category<br/>
              <strong>Scroll down</strong> to see all products organized by category<br/>
              <strong>Click "View Details"</strong> on any product to see full information
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {productCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300">
                    {category.name}
                  </h2>
                </div>
                <p className="text-lg text-green-700 dark:text-green-200 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}/`}
                    className="group bg-white dark:bg-green-900/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-green-100 dark:border-green-800"
                  >
                    <div className="p-6">
                      {/* Product Image */}
                      <div className="relative h-40 w-full mb-4 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-green-600 dark:text-green-400 text-sm mb-3">
                          {product.description}
                        </p>
                        
                        {/* Nutritional Info Preview */}
                        {product.nutritionalInfo && (
                          <p className="text-xs text-green-500 dark:text-green-500 mb-3">
                            {product.nutritionalInfo.split(',')[0]}...
                          </p>
                        )}

                        {/* View Details Button */}
                        <div className="mt-3">
                          <span className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>

                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
