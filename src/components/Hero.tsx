import heroImage from "../assets/hero copy.png";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        
        {/* Left Content */}
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500 md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-3 text-xs font-medium text-white shadow-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="rounded-md border border-slate-200 px-6 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}