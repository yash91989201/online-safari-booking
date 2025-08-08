import { Button } from "@/components/ui/button";
import {
  Camera,
  MapPin,
  Calendar,
  Users,
  Star,
  Trees,
  Binoculars,
  Mountain,
  Sunset,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] bg-gradient-to-br from-green-900 via-green-800 to-orange-900">
        <Image
          src="/hero-image.jpg"
          alt="Ranthambore National Park Wildlife Safari"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto flex h-full items-center justify-end px-4">
          <div className="max-w-2xl text-white">
            <h2 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Experience the Wild Heart of
              <span className="text-orange-400"> Ranthambore</span>
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Discover the majestic Royal Bengal Tigers and diverse wildlife in
              one of India&apos;s most renowned national parks. Book your
              unforgettable safari adventure today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-orange-600 px-8 text-white hover:bg-orange-700"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Safari Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-gray-900"
              >
                <Camera className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
          <div className="rounded-lg bg-white/10 px-6 py-4 text-white backdrop-blur-sm">
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>392 km²</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>60+ Tigers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>4.5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-4xl font-bold text-gray-900">
                Welcome to Ranthambore National Park
              </h3>
              <p className="mb-6 text-lg text-gray-600">
                Ranthambore National Park is one of the largest national parks
                in northern India, situated in the Sawai Madhopur district of
                southeastern Rajasthan. The park is a vital Project Tiger
                reserve and is famous for its tiger population and is one of the
                best places in India to see these magnificent predators in their
                natural habitat.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                The park covers an area of 392 square kilometers and is known
                for its diverse wildlife, ancient ruins, lakes, and the majestic
                Ranthambore Fort, a UNESCO World Heritage Site.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Trees className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">392 km² Area</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Historic Fort</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Binoculars className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">300+ Bird Species</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sunset className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">10 Safari Zones</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-green-100 p-6 text-center">
                  <Users className="mx-auto mb-2 h-8 w-8 text-green-600" />
                  <div className="text-2xl font-bold text-gray-900">60+</div>
                  <div className="text-sm text-gray-600">Tigers</div>
                </div>
                <div className="rounded-lg bg-orange-100 p-6 text-center">
                  <Trees className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Bird Species</div>
                </div>
                <div className="rounded-lg bg-blue-100 p-6 text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">10</div>
                  <div className="text-sm text-gray-600">Safari Zones</div>
                </div>
                <div className="rounded-lg bg-purple-100 p-6 text-center">
                  <Mountain className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600">UNESCO Site</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Things to Do Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-4xl font-bold text-gray-900">
              Top Things to Do
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover the best experiences Ranthambore National Park has to
              offer, from thrilling tiger safaris to exploring ancient ruins.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Tiger Safari Card */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-56 bg-gradient-to-br from-orange-500 to-red-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Binoculars className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2">
                  <h4 className="flex items-center gap-2 text-xl font-semibold">
                    <Camera className="h-5 w-5 text-orange-600" />
                    Tiger Safari
                  </h4>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  Experience the thrill of spotting Royal Bengal Tigers in their
                  natural habitat
                </p>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>3-4 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.8</span>
                  </div>
                </div>
                <p className="mb-6 flex-1 text-gray-600">
                  Join our expert guides for an unforgettable tiger tracking
                  experience across multiple zones.
                </p>
                <Button className="w-full">Book Tiger Safari</Button>
              </div>
            </div>

            {/* Bird Watching Card */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-56 bg-gradient-to-br from-green-500 to-teal-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trees className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2">
                  <h4 className="flex items-center gap-2 text-xl font-semibold">
                    <Trees className="h-5 w-5 text-green-600" />
                    Bird Watching
                  </h4>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  Spot over 300 bird species including rare and migratory birds
                </p>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.6</span>
                  </div>
                </div>
                <p className="mb-6 flex-1 text-gray-600">
                  Perfect for nature enthusiasts and photographers looking to
                  capture diverse avian species.
                </p>
                <Button variant="outline" className="w-full">
                  Book Bird Tour
                </Button>
              </div>
            </div>

            {/* Fort Exploration Card */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-56 bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2">
                  <h4 className="flex items-center gap-2 text-xl font-semibold">
                    <Mountain className="h-5 w-5 text-purple-600" />
                    Fort Exploration
                  </h4>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  Explore the historic Ranthambore Fort, a UNESCO World Heritage
                  Site
                </p>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.4</span>
                  </div>
                </div>
                <p className="mb-6 flex-1 text-gray-600">
                  Discover ancient temples, ruins, and breathtaking views from
                  this 10th-century fort.
                </p>
                <Button variant="secondary" className="w-full">
                  Explore Fort
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Best Safari Experience Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h3 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              The Best Safari Experience
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Immerse yourself in the untamed beauty of Ranthambore National
              Park, where every safari brings you closer to nature&apos;s most
              magnificent creatures. Our expert guides ensure you witness the
              park&apos;s diverse wildlife in their natural habitat, creating
              memories that will last a lifetime.
            </p>
          </div>

          {/* Safari Experience Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Safari Zones Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <div className="relative h-80 bg-gradient-to-br from-green-600 to-green-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trees className="h-20 w-20 text-white/70" />
                </div>
                <div className="absolute right-6 bottom-6 left-6 text-center">
                  <h4 className="mb-3 text-2xl font-bold text-white">
                    Safari Zones
                  </h4>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-green-800"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Explore Zones
                  </Button>
                </div>
              </div>
            </div>

            {/* Conservation Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <div className="relative h-80 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="h-20 w-20 text-white/70" />
                </div>
                <div className="absolute right-6 bottom-6 left-6 text-center">
                  <h4 className="mb-3 text-2xl font-bold text-white">
                    Conservation
                  </h4>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-blue-800"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Wildlife Protection Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <div className="relative h-80 bg-gradient-to-br from-orange-600 to-red-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Binoculars className="h-20 w-20 text-white/70" />
                </div>
                <div className="absolute right-6 bottom-6 left-6 text-center">
                  <h4 className="mb-3 text-2xl font-bold text-white">
                    Wildlife Protection
                  </h4>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-orange-800"
                  >
                    Support Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Park Membership Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <div className="relative h-80 bg-gradient-to-br from-purple-600 to-indigo-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/70" />
                </div>
                <div className="absolute right-6 bottom-6 left-6 text-center">
                  <h4 className="mb-3 text-2xl font-bold text-white">
                    Park Membership
                  </h4>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-purple-800"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
