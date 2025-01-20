import Image from "next/image";
import Link from "next/link";

export const CorbettPreview = () => {
  return (
    <section className="relative h-auto bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-35" />
      {/* Background image */}
      <Image
        src="/assets/corbett-mock-img.png"
        alt="Corbett scenery"
        fill={true}
        className="z-0 hidden md:block"
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto space-y-6 px-6 py-16 text-white">
        {/* Section Title */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-gray-300">
            A Sanctuary of Wilderness and Conservation.
          </p>
          <h2 className="mb-4 text-4xl font-bold">Corbett Bookings</h2>
          <p className="max-w-2xl text-gray-300">
            Corbett Tiger Reserve is more than just a tourist destination; it is
            a living testament to the power of dedicated wildlife conservation.
            Home to the world&apos;s highest density of tigers, this reserve
            exemplifies the success that can be achieved through timely and
            effective intervention.
          </p>
        </div>

        {/* Available Bookings */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Available Bookings
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                imgSrc: "/assets/jeep-safari-img.png",
                heading: "Jeep Safari",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a metus porta, vestibulum diam vel, ultrices dolor.",
                link: "/corbett-bookings/jeep-safari",
              },
              {
                imgSrc: "/assets/canter-safari-img.png",
                heading: "Canter Safari",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a metus porta, vestibulum diam vel, ultrices dolor.",
                link: "/corbett-bookings/canter-safari",
              },
            ].map((booking, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-[#F1EFEC]"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={booking.imgSrc}
                    alt={booking.heading}
                    fill={true}
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-primary">
                    {booking.heading}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600">{booking.desc}</p>
                  <Link
                    href={booking.link}
                    className="inline-block rounded bg-warning px-4 py-2 transition hover:opacity-80"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}

            {/* "More Coming Soon" Card */}
            <div className="flex items-center justify-center rounded-lg bg-black bg-opacity-25">
              <p className="font-semibold text-white lg:text-xl">
                More coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
