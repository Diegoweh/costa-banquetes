import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

const features = [
  {
    heading: "Ceremonia con vista a la playa",
    body: 'Tu "sí acepto" con vista al mar y el atardecer del Pacífico como testigo. Decoración personalizada con pérgola frente al mar.',
    image: `${BASE_PATH}/img/intro-1.webp`,
    alt: "Ceremonia de boda en la playa con pérgola decorada con flores blancas frente al mar",
  },
  {
    heading: "Todo incluido, cero estrés",
    body: "Wedding planner dedicada + banquete gourmet + decoración + coordinación completa. Tú solo disfruta de tu día.",
    image: `${BASE_PATH}/img/intro-2.webp`,
    alt: "Mesa de banquete elegante con vajilla dorada, copas de cristal y arreglo floral blanco",
  },
  {
    heading: "Tus invitados, felices",
    body: "Hospedaje all-inclusive con tarifas especiales. Todos disfrutan, tú te relajas sabiendo que están en el paraíso.",
    image: `${BASE_PATH}/img/intro-3.webp`,
    alt: "Huéspedes disfrutando de la piscina del resort con vista al mar y palmeras",
  },
];

export function FeaturesSection() {
  return (
    <section className=" py-16 px-6 md:py-24 md:px-12 lg:px-20">
      {/* Section heading */}
      <div className="mx-auto max-w-4xl text-center mb-14 md:mb-20">
        <h2
          className=" text-3xl md:text-4xl lg:text-[2.75rem] leading-snug text-[#8e6b16] font-royale-serif"          
        >
          {"Más que una boda,"}
          <br />
          {"una experiencia que todos recordarán"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-[#8e6b16] font-royale-serif">
          En Costa de Oro creamos momentos que tus invitados contarán por años
        </p>
      </div>

      {/* Feature rows */}
      <div className="mx-auto max-w-5xl flex flex-col gap-12 md:gap-16">
        {features.map((feature, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={feature.heading}
              className={`flex flex-col items-center gap-6 md:gap-10 ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text */}
              <div className="flex-1 md:max-w-sm">
                <h3 className="text-lg md:text-xl font-royale-serif font-bold text-[#8e6b16] mb-3">
                  {feature.heading}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-500 font-royale-serif">
                  {feature.body}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/2] w-full overflow-hidden rounded-xl">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
