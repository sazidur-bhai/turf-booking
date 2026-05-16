import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TurfCard } from "@/components/turf-card"
import { turfsData } from "@/lib/turfs-data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <section id="turfs" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Available Turfs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Browse through our collection of premium sports turfs and book your favorite one for your next game.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {turfsData.map((turf) => (
                <TurfCard
                  key={turf.id}
                  name={turf.name}
                  sportType={turf.sportType}
                  location={turf.location}
                  pricePerSlot={turf.pricePerSlot}
                  image={turf.image}
                  rating={turf.rating}
                  availableSlots={turf.availableSlots}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TurfBook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
