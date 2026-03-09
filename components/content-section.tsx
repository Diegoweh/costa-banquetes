import { ImageCarousel } from "./image-carousel";
import { Testimonials } from "./testimonials";
import { IntroSection } from "./intro-section";
import { FeaturesSection } from "./features-section";
import { CtaSection } from "./cta-section";
import { PaquetesSection } from "./paquetes-section";

export function ContentSection() {
  return (
    <div className="bg-white">
      <IntroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <FeaturesSection />
        <PaquetesSection />

        <section className="mb-20" aria-labelledby="galeria-bodas">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2
              id="galeria-bodas"
              className="text-3xl md:text-4xl font-royale-serif text-[#727054]"
            >
              Galería de bodas en la playa
            </h2>
            <p className="mt-3 text-gray-600 font-royale-serif">
              Explora montajes, ceremonias y recepciones realizadas frente al mar en Mazatlán.
            </p>
          </div>
          <ImageCarousel
            slides={[{
                image: "./img/hero1.webp",
                title: "Decoración de Ensueño",
                description: "Transformamos tu visión en realidad con decoración personalizada, desde elegantes pérgolas frente al mar hasta detalles que reflejan tu estilo único."
              },
              {
                image: "./img/hero2.webp",
                title: "Amplios Espacios para Celebrar",                
                description: "Desde ceremonias íntimas en la playa hasta recepciones grandiosas en nuestros salones, tenemos el espacio perfecto para tu boda de ensueño."
              },
              {
                image: "./img/pergola.webp",
                title: "Ceremonia Frente al Mar",
                description: "Una ceremonia perfecta con el océano Pacífico como telón de fondo. Decoración personalizada y atención a cada detalle para tu día especial."
              }
            ]}
            autoPlayInterval={5000}
          />
        </section>

        <section aria-labelledby="testimonios-bodas">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2
              id="testimonios-bodas"
              className="text-3xl md:text-4xl font-royale-serif text-[#727054]"
            >
              Testimonios de parejas
            </h2>
            <p className="mt-3 text-gray-600 font-royale-serif">
              Historias de novios que celebraron su boda en Hotel Costa de Oro.
            </p>
          </div>

          <Testimonials
            testimonials={[
              {
                name: "María & Carlos",
                location: "Ciudad de México",
                rating: 5,
                text: "Nuestra boda en Costa de Oro fue absolutamente perfecta. La ceremonia frente al mar fue mágica y el servicio excepcional. Nuestros invitados no dejan de hablar de lo increíble que fue todo.",
                date: "Junio 2024"
              },
              {
                name: "Ana & Roberto",
                location: "Guadalajara",
                rating: 5,
                text: "Desde el primer momento, el equipo de Costa de Oro hizo que todo fuera fácil. La wedding planner estuvo con nosotros en cada paso. El atardecer durante nuestra ceremonia fue algo que nunca olvidaremos.",
                date: "Septiembre 2024"
              },
              {
                name: "Laura & Miguel",
                location: "Monterrey",
                rating: 5,
                text: "Elegir Costa de Oro fue la mejor decisión. El lugar es espectacular, la comida deliciosa y la atención al detalle impecable. Todos nuestros sueños se hicieron realidad.",
                date: "Noviembre 2025"
              }
            ]}
            autoPlayInterval={6000}
          />
        </section>

      </div>

      <CtaSection />
    </div>
  )
}
