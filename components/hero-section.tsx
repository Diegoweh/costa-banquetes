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
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-4 pb-5 sm:px-6 sm:pb-8 lg:px-12 lg:pb-12">
        <div className="flex w-full max-w-[18rem] flex-col items-start rounded-[24px]  px-4 py-4 text-left backdrop-blur-[2px] sm:max-w-sm sm:px-5 sm:py-5 lg:max-w-lg lg:px-6 lg:py-6">
          <h1 className="text-[#ffffff] drop-shadow-lg">
            <span className="block font-royale-serif text-[1.7rem] leading-none sm:text-4xl md:text-5xl lg:text-6xl">
              {"S\u00ed quiero,"}
            </span>
            <span className="block font-royale-script text-[3.4rem] leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl">
              pero en el mar
            </span>
          </h1>

          {/* CTA Button */}
          <a
            href="#paquetes"
            className="mt-4 inline-block rounded-2xl bg-[#8e6b16] px-4 py-1 text-xs font-bold tracking-[0.18em] text-[#ffffff] text-shadow-lg uppercase transition-colors hover:bg-[#514528] sm:px-5 sm:text-sm md:text-base"
          >
            Tu boda gratis*
          </a>

          {/* Subtext */}
          <p className="mt-2 text-xs text-white/85 drop-shadow sm:text-sm md:text-base">
            Con 20 hab. x 2 noches
          </p>
        </div>
      </div>
    </section>
  );
}
