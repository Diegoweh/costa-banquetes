import { BASE_PATH } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      className="relative w-full aspect-[16/9] max-h-screen overflow-hidden"
      aria-label="Bodas frente al mar en Hotel Costa de Oro"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${BASE_PATH}/img/hero-img.webp`}
          alt="Pareja de novios abrazados frente al mar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-[12%]">
        <h1 className="text-center text-[#ffffff] drop-shadow-lg">
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
          href="#paquetes"
          className="mt-8 inline-block bg-[#727054] hover:bg-[#8e6b16] text-[#ffffff] px-5 py-1 text-shadow-lg text-sm md:text-base font-bold font-royale-sans tracking-widest uppercase transition-colors rounded-2xl"
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
