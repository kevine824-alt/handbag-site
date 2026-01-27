import Image from "next/image";
import Link from "next/link";

export default function CommissionPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
      {/* Top: Editorial split (text left, image right) */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <div className="max-w-xl">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Commission a One of One Bag
            </h1>

            <p className="mt-4 text-lg text-gray-700">
              A commission is a collaboration. You bring the idea, the theme, or
              the need. We bring the design, materials, and craftsmanship.
              Together, we create a bag that exists nowhere else.
            </p>

            <div className="prose prose-gray mt-8 max-w-none">
              <h2>What you can request</h2>
              <ul>
                <li>A bag inspired by a favorite theme, fandom, or aesthetic</li>
                <li>
                  A custom version of an existing Sew Nerdy style (size, colors,
                  features)
                </li>
                <li>
                  A bag you saw at a show or online, recreated as closely as
                  possible
                </li>
                <li>A gift piece with personal touches</li>
              </ul>

              <h2>What to expect</h2>
              <ul>
                <li>A free consultation to talk through your idea</li>
                <li>Clear pricing before any work begins</li>
                <li>A deposit is required to start the commission</li>
                <li>Timelines depend on complexity and our current queue</li>
              </ul>

              <h2>A quick note</h2>
              <p>
                We’ll always do our best to match your vision, but some details
                depend on materials and availability. If you’re open to our
                creative direction, the result is often even better.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#commission-request"
                className="inline-flex items-center justify-center border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Start a Commission Request
              </Link>

              <p className="text-sm text-gray-600">
                Prefer to browse first?{" "}
                <Link
                  href="/gallery"
                  className="text-orange-700 hover:text-orange-800"
                >
                  View the gallery →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full overflow-hidden">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/commission.jpg"
                alt="Commission bag example"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 lg:mt-20 border-t" />

      {/* Form */}
      <div id="commission-request" className="mt-12 lg:mt-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Commission Request
          </h2>
          <p className="mt-3 text-gray-700">
            Share a few details and we’ll get back to you with next steps.
            Consultation is free. Pricing will be provided and agreed upon
            before any work begins. A deposit is required to start the
            commission.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Form submission will be connected next. For now, this is the final
            layout and field set.
          </p>
        </div>

        <form className="mt-10 grid gap-6">
          {/* Contact */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-900"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-900"
              >
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          {/* Request basics */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="bagType"
                className="text-sm font-semibold text-gray-900"
              >
                Bag type
              </label>
              <select
                id="bagType"
                name="bagType"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="tote">Tote</option>
                <option value="crossbody">Crossbody</option>
                <option value="backpack">Backpack</option>
                <option value="pouch">Pouch / small accessory</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="purpose"
                className="text-sm font-semibold text-gray-900"
              >
                Purpose (optional)
              </label>
              <select
                id="purpose"
                name="purpose"
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue=""
              >
                <option value="">Select one</option>
                <option value="everyday">Everyday</option>
                <option value="travel">Travel</option>
                <option value="work">Work / laptop</option>
                <option value="gift">Gift</option>
                <option value="event">Convention / event</option>
              </select>
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="theme"
                className="text-sm font-semibold text-gray-900"
              >
                Theme / inspiration
              </label>
              <input
                id="theme"
                name="theme"
                type="text"
                required
                placeholder='Example: "retro gaming", "comic panels", "coastal", "Studio Ghibli vibe"'
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="direction"
                className="text-sm font-semibold text-gray-900"
              >
                How close should we follow your idea?
              </label>
              <select
                id="direction"
                name="direction"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="specific">
                  Very specific (I know exactly what I want)
                </option>
                <option value="balanced">
                  Balanced (some direction + some creative freedom)
                </option>
                <option value="surprise">Surprise me (creative freedom)</option>
              </select>
            </div>
          </div>

          {/* Features */}
          <fieldset className="border border-gray-200 p-5">
            <legend className="px-2 text-sm font-semibold text-gray-900">
              Must-have features (optional)
            </legend>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                ["zipperTop", "Zipper top"],
                ["exteriorPocket", "Exterior pocket"],
                ["interiorPockets", "Interior pocket(s)"],
                ["keyClip", "Key clip"],
                ["bottlePocket", "Water bottle pocket"],
                ["adjustableStrap", "Adjustable strap"],
                ["divider", "Divider / organizer"],
              ].map(([id, label]) => (
                <label
                  key={id}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    id={id}
                    name="features"
                    value={id}
                    className="h-4 w-4 border-gray-300"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Practical constraints */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="timeline"
                className="text-sm font-semibold text-gray-900"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="no-rush">No rush</option>
                <option value="2-4">2–4 weeks</option>
                <option value="4-8">4–8 weeks</option>
                <option value="specific">Specific date (we’ll follow up)</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="budget"
                className="text-sm font-semibold text-gray-900"
              >
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="h-11 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="under-150">Under $150</option>
                <option value="150-250">$150–$250</option>
                <option value="250-400">$250–$400</option>
                <option value="400-plus">$400+</option>
                <option value="not-sure">Not sure, I’d like guidance</option>
              </select>
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="notes"
                className="text-sm font-semibold text-gray-900"
              >
                Anything else we should know? (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          {/* No client JS yet */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-400 cursor-not-allowed"
            >
              Submit Request (coming next)
            </button>

            <p className="text-sm text-gray-600">
              Next step: we’ll wire this to email with a simple submission flow.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
