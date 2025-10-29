import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-600 dark:text-green-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">
            Product Not Found
          </h2>
          <p className="text-lg text-green-700 dark:text-green-200 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the product you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/products/"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 mr-4"
          >
            Browse All Products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-green-600 dark:text-green-400">
            Need help? <a href="#contact" className="underline hover:text-green-800 dark:hover:text-green-300">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
