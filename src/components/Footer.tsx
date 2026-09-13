export default function Footer() {
  
  
    return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] md:px-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-[10px] font-bold text-white">
              DS
            </span>

            <span className="text-sm">
              Dev{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Stack
              </span>
            </span>
          </div>

          <p className="mt-3 max-w-xs text-[10px] leading-4 text-slate-400">
            Curate tools, technologies, and resources for developers building
            modern software.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex gap-4 text-[10px] text-slate-500">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-[10px] font-bold uppercase text-slate-900">
            Product
          </h3>

          <div className="mt-3 space-y-2 text-[10px] text-slate-400">
            <a
              className="block transition hover:text-pink-600"
              href="#home"
            >
              Home
            </a>

            <a
              className="block transition hover:text-pink-600"
              href="#technologies"
            >
              Technologies
            </a>

            <a
              className="block transition hover:text-pink-600"
              href="#projects"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[10px] font-bold uppercase text-slate-900">
            Company
          </h3>

          <div className="mt-3 space-y-2 text-[10px] text-slate-400">
            <a
              className="block transition hover:text-pink-600"
              href="#about"
            >
              About
            </a>

            <a
              className="block transition hover:text-pink-600"
              href="#contact"
            >
              Contact
            </a>

            <a
              className="block transition hover:text-pink-600"
              href="#about"
            >
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div id="contact">
          <h3 className="text-[10px] font-bold uppercase text-slate-900">
            Legal
          </h3>

          <div className="mt-3 space-y-2 text-[10px] text-slate-400">
            <a
              className="block transition hover:text-pink-600"
              href="#privacy"
            >
              Privacy Policy
            </a>

            <a
              className="block transition hover:text-pink-600"
              href="#terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-4 text-[9px] text-slate-400 sm:flex-row md:px-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#privacy"
              className="transition hover:text-pink-600"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-pink-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
