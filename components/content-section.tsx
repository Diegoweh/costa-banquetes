
import { WiSunset } from "react-icons/wi";
import { FaUmbrellaBeach } from "react-icons/fa";

export function ContentSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 text-balance">Una experiencia diseñada para celebrar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Espacios exclusivos, atención personalizada y el encanto del Pacífico como escenario. Aquí, cada evento se vive con estilo, comodidad y un servicio que supera expectativas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <WiSunset className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vista al Océano</h3>
            <p className="text-gray-600">Habitaciones con vistas panorámicas al océano Pacífico</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUmbrellaBeach className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Playa Privada</h3>
            <p className="text-gray-600">Acceso directo a nuestra playa exclusiva</p>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Servicio Premium</h3>
            <p className="text-gray-600">Atención personalizada 24/7</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-4">
            <img
              src="./img/hero1.webp"
              alt="Room with ocean view"
              className="w-full h-180 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Cuartos Lujosos</h3>
            <p className="text-gray-600">
              Nuestras habitaciones combinan la comodidad moderna con el estilo tradicional mexicano, ofreciendo impresionantes vistas al océano desde cada ventana.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="./img/hero2.webp"
              alt="Hotel restaurant"
              className="w-full h-180 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Comedor Excepcional</h3>
            <p className="text-gray-600">
              Disfruta de la mejor cocina mexicana e internacional en nuestros restaurantes, con ingredientes frescos y vistas panorámicas al océano.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-yellow-50 rounded-2xl p-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">¿Listo para tu escapada perfecta?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva ahora y descubre por qué Costa de Oro es el destino preferido en Mazatlán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hotelcostadeoro.mx/english/index.html?open=reserva" className="bg-yellow-500 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Reserva Ahora
            </a >
            <a href="tel:18773418355" className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Llamada Gratuita USA/Canadá
            </a >
          </div>
        </div>
      </div>
    </div>
  )
}
