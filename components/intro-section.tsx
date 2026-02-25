export function IntroSection() {
  return (
    <section className="relative w-full bg-[--color-section-bg]">
      {/* Decorative lace border at top */}
      {/* <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-8 md:h-10"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="lace" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L15 20 L30 40 L45 20 L60 40" stroke="#d6cfc0" strokeWidth="1" fill="none" />
              <circle cx="15" cy="20" r="3" fill="#d6cfc0" opacity="0.5" />
              <circle cx="45" cy="20" r="3" fill="#d6cfc0" opacity="0.5" />
              <path d="M7 30 Q15 10 23 30" stroke="#d6cfc0" strokeWidth="0.8" fill="none" opacity="0.6" />
              <path d="M37 30 Q45 10 53 30" stroke="#d6cfc0" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle cx="30" cy="35" r="2" fill="#d6cfc0" opacity="0.4" />
              <circle cx="0" cy="35" r="2" fill="#d6cfc0" opacity="0.4" />
              <circle cx="60" cy="35" r="2" fill="#d6cfc0" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="1200" height="40" fill="url(#lace)" />
        </svg>
      </div> */}

      {/* Content */}
      <div className="flex flex-col items-center px-6 py-12 md:py-16 lg:py-20">
        {/* Script Heading */}
        <h2
          className="text-center text-[#727054] text-3xl md:text-4xl lg:text-5xl leading-snug"
          style={{ fontFamily: "var(--font-dancing-script), cursive" }}
        >
          Despierta donde comienza
          <br />
          tu para siempre
        </h2>

        {/* Body Text */}
        <p className="mt-6 max-w-xl text-center text-[#727054] text-sm md:text-base leading-relaxed">
          Una boda frente al Pac&iacute;fico donde cada detalle est&aacute; pensado
          para que solo te preocupes por disfrutar.
        </p>

        {/* Separator */}
        <div className="mt-8 w-full max-w-lg border-t border-[#727054]" />

        {/* Price callout */}
        <p
          className="mt-6 text-center text-[#727054] text-lg md:text-xl lg:text-2xl italic"
          style={{ fontFamily: "var(--font-dancing-script), cursive" }}
        >
          <span className="align-super text-xs not-italic">*</span>
          {"O desde $60,000 MXN todo incluido frente al mar."}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#cita"
            className="inline-block bg-[#727054] text-[--color-section-bg] px-8 py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors hover:opacity-90 rounded-2xl"
          >
            Cita Wedding Planner
          </a>
          <a
            href="#paquetes"
            className="inline-block border border-[#727054] text-[#727054] bg-transparent px-8 py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors hover:bg-[#727054]/10 rounded-2xl"
          >
            Paquetes de Boda
          </a>
        </div>
      </div>
    </section>
  );
}
