import { getProductById, productCategories } from "@/lib/product-data";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  const allProducts = productCategories.flatMap(category => category.products);
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  const category = productCategories.find(cat => cat.id === product.category);

  return (
    <div className="min-h-screen bg-green-50 dark:bg-green-900/30">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        {/* Back to Home Button */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
          <Link href="/" className="hover:text-green-800 dark:hover:text-green-300">
            Home
          </Link>
          <span>/</span>
          <Link href="/products/" className="hover:text-green-800 dark:hover:text-green-300">
            Products
          </Link>
          <span>/</span>
          <span className="text-green-800 dark:text-green-300">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-white dark:bg-green-900/50 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{category?.icon}</span>
                <span className="text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
                  {category?.name}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-green-700 dark:text-green-200 mb-6">
                {product.description}
              </p>
            </div>

            {/* Detailed Description */}
            {product.detailedDescription && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  About This Product
                </h2>
                <p className="text-green-700 dark:text-green-200 leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>
            )}

            {/* Nutritional Information */}
            {product.nutritionalInfo && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  Nutritional Information
                </h2>
                <p className="text-green-700 dark:text-green-200">
                  {product.nutritionalInfo}
                </p>
              </div>
            )}

            {/* Growing Season */}
            {product.growingSeason && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  Growing Season
                </h2>
                <p className="text-green-700 dark:text-green-200">
                  {product.growingSeason}
                </p>
              </div>
            )}

            {/* Uses */}
            {product.uses && product.uses.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  Common Uses
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.uses.map((use, index) => (
                    <span
                      key={index}
                      className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  Health Benefits
                </h2>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2 text-green-700 dark:text-green-200">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back to Products Button */}
            <div className="pt-6">
              <Link
                href="/products/"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                ← Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-8 text-center">
          More from {category?.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category?.products
            .filter(p => p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}/`}
                className="group bg-white dark:bg-green-900/50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="relative h-32 w-full mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    {relatedProduct.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
