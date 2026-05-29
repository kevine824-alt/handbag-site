import Image from "next/image";

export default function OurStoryPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Image column */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full overflow-hidden">
            {/* Adjust the aspect ratio if needed once you see the real image */}
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/our-story.jpg" // <-- replace with your real image path
                alt="Elaine and Megan at a trade show"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="order-2 lg:order-1">
          <div className="max-w-xl">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h1>

            <p className="mt-4 text-lg text-gray-700">
              Sew Nerdy Bags is a family collaboration between Elaine and her
              daughter Megan, built on creativity, craftsmanship, and a shared
              love of making things that feel personal.
            </p>

            <div className="prose prose-gray mt-8 max-w-none">
              <p>
                Elaine has spent most of her life creating. She is self taught
                and endlessly curious. Over the years, she has built and run
                several creative businesses. These have ranged from WWII and
                early aviation collectibles to embroidery and more. She brings
                nearly three decades of experience to her work. One idea has
                always guided her. Make things well and never stop pushing the
                craft forward.
              </p>

              <p>
                Sew Nerdy Bags is, in many ways, a return to embroidery for
                Elaine. This time, though, it has a new direction.
              </p>

              <p>
                About ten years ago, after Megan relocated to Pensacola, the two
                decided to build something together. It started as a
                partnership. Elaine brought experience. Megan brought new ideas
                and new interests. She also brought a growing love for pop
                culture and comics. Over time, the designs changed. They became
                more playful. More nerdy. More their own.
              </p>

              <p>
                They work out of their home studios. Each bag is taken from
                concept to completion by hand. No two pieces are ever the same.
                A lot of time goes into every bag. Time is spent choosing
                fabrics. Time is spent building the structure. Time is spent
                stitching the details. Time is spent refining the final result.
                They are their own worst critics. Nothing is sold unless they
                are genuinely proud of it.
              </p>

              <p>
                At the heart of Sew Nerdy is a simple idea. These are not just
                products. They are one of one pieces. Each bag is made to be
                used and loved. It should also feel special. Mass produced
                things rarely do.
              </p>

              <p>
                A big part of what keeps Elaine and Megan going is the people
                they meet. At conventions and shows, they see how the bags
                connect with customers. Sometimes it is a reminder of
                childhood. Sometimes it is the excitement of finding a new
                favorite accessory. Over the years, they have built a loyal
                group of customers. Many come back again and again. That
                connection means everything to them.
              </p>

              <p>
                Working together is not always simple. They come from different
                generations. They have different tastes and different
                instincts. They challenge each other. They push each other.
                Sometimes they disagree. Over time, they have learned to
                appreciate those differences. They have also learned to rely on
                them. That contrast keeps the work interesting. It also keeps
                it moving forward.
              </p>

              <p>
                Sew Nerdy Bags is playful, nerdy, and a little quirky by
                nature. Underneath that is a serious commitment to quality and
                care. These bags are made by hand. They are made by family.
                They are made in small numbers. Each one carries a lot of
                thought and pride in every stitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}