export function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] max-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/hero-img.webp"
          alt="Pareja de novios abrazados frente al mar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-[12%]">
        <h1 className="text-center text-[--color-hero-text] drop-shadow-lg">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-royale-serif">
            {"S\u00ed quiero,"}
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-9xl font-royale-script"

          >
            pero en el mar
          </span>
        </h1>

        {/* CTA Button */}
        <a
          href="https://hotelcostadeoro.mx/english/index.html?open=reserva"
          className="mt-8 inline-block bg-[#727054] hover:bg-[--color-hero-cta-hover] text-[--color-hero-text] px-5 py-1 text-shadow-lg text-sm md:text-base font-bold font-royale-sans tracking-widest uppercase transition-colors rounded-2xl"
        >
          Tu boda gratis*
        </a>

        {/* Subtext */}
        <p className="mt-3 text-sm md:text-base text-gray-800 drop-shadow text-shadow-lg">
          Con 20 hab. x 2 noches
        </p>
      </div>
    </section>
  );
}
