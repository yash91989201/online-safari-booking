import { CorbettPreview } from "@/components/home/corbett-preview";
import { HeroSection } from "@/components/home/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <section className="bg-[#F1EFEC] py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-4xl">
            We Offer the Best Services
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            To ensure quality services at every step of your vacation, we go
            above and beyond. Our highly expert professionals are obsessed with
            the idea of empowering vacationers with the best deals. We have a
            team of expert professionals with over a decade of experience in
            travel and tourism. Here, you’ll find an array of ideas to inspire
            your wildlife holiday.
          </p>
        </div>
      </section>
      <CorbettPreview />
      <section>
        <div className="container mx-auto flex flex-col space-y-3 px-3 py-8 lg:flex-row lg:space-y-0 lg:px-6 lg:py-16">
          <div className="relative h-[30vh] w-full lg:h-[60vh] lg:w-2/5">
            {/* Background overlay */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-25"></div>
            <Image
              src="/assets/map-mock.png"
              className="h-full w-full"
              alt=""
              fill={true}
            />
          </div>

          <div className="mx-auto flex max-w-3xl flex-1 flex-col space-y-3 lg:p-8">
            <h1 className="text-2xl font-semibold">How to reach corbett ? </h1>
            <p>
              Ramnagar is perhaps the nearest to approach the Corbett National
              Park which configures the headquarters of CTR. This small city is
              well connected by the rail and road networks with the major cities
              of India like Delhi, Moradabad, Nainital, and Bareilly. Once you
              reach Ramnagar, then it takes only half an hour to reach Corbett
              National Park. The Park is around 15 km from Ramnagar railway
              station.
            </p>
            <p>
              <strong>By Road : </strong>Ramnagar has a very good network of
              roads that connects the different cities. The Corbett National
              Park is situated at an approximate surface distance of 260
              Kilometres from India&apos;s national capital, Delhi. The state
              government of Uttarakhand plies buses at a short interval of time
              from Delhi, Moradabad, Haldwani, and Nainital which reaches
              Corbett directly.
            </p>
            <p>
              <strong>By Rail: </strong>The Railway station in Ramnagar receives
              trains from different major cities of India like Delhi, Moradabad,
              and Bareilly. Also, the Direct train to Ramnagar runs from Delhi.
              You can go through the various trains arriving, namely, Ranikhet
              Express, Corbett Link Express, and Kathgodam Express which will
              take you directly to Ramnagar.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F1EFEC] py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-4xl">
            Top rated safari tours in India
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            India is an extremely bio-diverse land with a variety of wildlife
            spread across its undulating landscapes. From the Tigers of royal
            Rajasthan to the magnificently sized male tigers of Kanha National
            Park, from the historic forts of Bandhavgarh to the Himalayan
            Foothills in Corbett National Park, India encompasses a plethora of
            wildlife in its lap. Our top-rated Tiger Safari in India tour
            packages include these famous national parks and within them its
            bountiful wildlife. A tiger safari India tour indeed requires
            patience and perseverance, but more importantly an experienced team,
            which is where we come in.
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            We ensure that the fact file provided by us contains every little
            detail, as we answer all your questions regarding a tiger safari
            India tour. Some of the guest favorite tiger safari India tours are
            mentioned below. These include the Just Tigers Tour, which
            encompasses the best 3 national parks in central India - Bandhavgarh
            Tiger Reserve, Kanha National Park and Pench Tiger Reserve. While
            Kanha and Pench tie together beautifully to recite the story of the
            Indian Jungle book.
          </p>
        </div>
      </section>
    </main>
  );
}
