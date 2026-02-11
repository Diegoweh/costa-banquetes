
import { WiSunset } from "react-icons/wi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { ImageCarousel } from "./image-carousel";
import { Testimonials } from "./testimonials";
import { FaCheck } from "react-icons/fa";



export function ContentSection() {

  const perks = [
  "Upgrade gratis a suite nupcial",
  "Sesion de fotos pre-boda en la playa (1 hora)",
  "Spa de cortesia para la novia",
  "Botella de champagne en la suite",
]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 text-balance">Mas que una boda, una experiencia que todos recordaran</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            En Costa de Oro creamos momentos que tus invitados contaran por años
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <WiSunset className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ceremonia en la playa</h3>
            <p className="text-gray-600">Tu "si acepto" con los pies en la arena y el atardecer del Pacifico como testigo. Decoracion personalizada con pergola frente al mar.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdOutlineWorkspacePremium className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Todo incluido, cero estres</h3>
            <p className="text-gray-600">Wedding planner dedicada + banquete gourmet + decoracion + coordinacion completa. Tu solo disfruta tu dia.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tus invitados, felices</h3>
            <p className="text-gray-600">Hospedaje all-inclusive con tarifas especiales. Todos disfrutan, tu te relajas sabiendo que estan en el paraiso.</p>
          </div>
        </div>

        {/* Image Gallery Carousel */}
        <div className="mb-20">
          <ImageCarousel
            slides={[
              {
                image: "./img/hero1.webp",
                title: "Decoracion de Ensueño",
                description: "Transformamos tu vision en realidad con decoracion personalizada, desde elegantes pergolas frente al mar hasta detalles que reflejan tu estilo unico."
              },
              {
                image: "./img/hero2.webp",
                title: "Amplios Espacios para Celebrar",                
                description: "Desde ceremonias intimas en la playa hasta recepciones grandiosas en nuestros salones, tenemos el espacio perfecto para tu boda de ensueño."
              },
              {
                image: "./img/pergola.webp",
                title: "Ceremonia Frente al Mar",
                description: "Una ceremonia perfecta con el océano Pacífico como telón de fondo. Decoración personalizada y atención a cada detalle para tu día especial."
              }
            ]}
            autoPlayInterval={5000}
          />
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

        {/* Call to Action */}
        <div className="text-center bg-yellow-50 rounded-2xl p-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Las mejores fechas se van rápido</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Los atardeceres de febrero a abril son los mas romanticos del Pacifico. Si ya tienen fecha en mente, es momento de asegurar su dia sonado.
          </p>

          {/* Urgency box */}
          <div className="mx-auto max-w-[600px] rounded-[20px] border-2 border-white/30 bg-white/15 p-10 backdrop-blur-[10px]">
            <h3 className="mb-5 text-2xl font-semibold text-gray-800">Reserva este mes y recibe:
            </h3>
            <ul className="space-y-3 text-left">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 py-2 text-gray-800">
                  <FaCheck className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" strokeWidth={3} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hotelcostadeoro.mx/english/index.html?open=reserva" className="bg-yellow-500 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Agendar videollamada con wedding planner
            </a >
            <a href="tel:18773418355" className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              WhatsApp: Quiero mi boda aqui
            </a >
            
          </div>
          <p className="mt-8 text-sm text-gray-800">
              Llamada gratuita USA/Canada: 1-877-341-8355
            </p>
        </div>
      </div>
    </div>
  )
}
