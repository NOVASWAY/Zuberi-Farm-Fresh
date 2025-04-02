import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Proprietors } from "@/components/proprietors"
import { Products } from "@/components/products"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <Hero />
        <About />
        <Proprietors />
        <Products />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

