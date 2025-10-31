import { getProductsByCategory, productCategories } from "@/lib/product-data";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  try {
    console.log('generateStaticParams called, categories:', productCategories.length);
    if (!productCategories || productCategories.length === 0) {
      console.error('ERROR: productCategories is empty or undefined!');
      return [];
    }
    const params = productCategories.map((category) => {
      if (!category || !category.id) {
        console.error('ERROR: Invalid category found:', category);
        return null;
      }
      return {
        slug: category.id,
      };
    }).filter(Boolean);
    console.log('Generated params:', params);
    return params;
  } catch (error) {
    console.error('ERROR in generateStaticParams:', error);
    throw error;
  }
}

// Ensure static generation
export const dynamicParams = false;
export const dynamic = 'force-static';
export const revalidate = false;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.slug;
  const category = productCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categoryId);

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
          <span className="text-green-800 dark:text-green-300">{category.name}</span>
        </nav>
      </div>

      {/* Category Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-6xl">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-300">
              {category.name}
            </h1>
          </div>
          <p className="text-xl text-green-700 dark:text-green-200 max-w-3xl mx-auto">
            {category.description}
          </p>
          <div className="mt-4">
            <Link
              href="/products/"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}/`}
              className="group bg-white dark:bg-green-900/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-green-100 dark:border-green-800"
            >
              <div className="p-6">
                {/* Product Image */}
                <div className="relative h-40 w-full mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded">
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
    </div>
  );
}
