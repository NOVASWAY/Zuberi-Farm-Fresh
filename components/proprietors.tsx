export function Proprietors() {
  const proprietors = [
    {
      name: "Njeri Njau",
      role: "Co-Founder & Managing Director",
      description:
        "With a Master's degree in Agronomy and a passion for sustainable agriculture, Njeri oversees the farm operations and ensures the highest quality standards for all our produce.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2012.46.11-Ds6VLvcK56ujysxwx8cWGC7JcvF4x5.jpeg",
    },
    {
      name: "Cyrus Kagotho Muigai",
      role: "Co-Founder & Technology Director",
      description:
        "Cyrus specializes in agricultural technology, implementing advanced irrigation systems and energy-efficient solutions that optimize farm productivity while conserving resources.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2012.45.38-N9ZgLTsrveNASulzDxCyb3CdIIc3P4.jpeg",
    },
  ]

  return (
    <section id="proprietors" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -z-10 top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-green-100 dark:bg-green-800 opacity-20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-green-800 dark:text-green-300">
            Meet Our Proprietors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {proprietors.map((proprietor, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-green-900/50 rounded-lg shadow-md p-6 border border-green-100 dark:border-green-800"
              >
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-green-200 dark:border-green-700">
                  <img
                    src={proprietor.image || "/placeholder.svg"}
                    alt={proprietor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-1">{proprietor.name}</h3>
                <p className="text-green-600 dark:text-green-400 mb-4 font-medium">{proprietor.role}</p>
                <p className="text-center text-green-700 dark:text-green-200">{proprietor.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-green-700 dark:text-green-200">
              Together, Njeri and Cyrus have built Zuberi Fresh Farm with a shared vision of providing the freshest,
              highest-quality produce while maintaining sustainable farming practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

