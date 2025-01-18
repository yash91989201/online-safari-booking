import Image from "next/image";
import { EnquiryForm } from "../enquiry-form";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[40vh] w-full items-center lg:min-h-[90vh]">
      {/* Background overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-35"></div>

      {/* Content container */}
      <div className="container z-20 mx-auto flex w-full items-center justify-between p-4 text-white lg:p-8">
        <div className="flex flex-col">
          <p className="text-lg lg:text-xl">
            Unforgettable Wildlife Experiences in India.
          </p>
          <h1 className="mt-2 text-2xl font-bold lg:text-4xl">
            Explore Corbett and Ranthambore
          </h1>
          <h3 className="mt-2 text-lg lg:text-2xl">
            Book safari tickets today!
          </h3>
        </div>
        <EnquiryForm />
      </div>

      {/* Background image */}
      <Image
        src="/assets/landing-hero-img.png"
        alt="Corbett scenery"
        fill={true}
        className="z-0"
      />
    </section>
  );
};
