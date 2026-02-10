
export function HeroSection() {  

  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/pergola.webp"
          alt="Costa de Oro beachfront view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance">
            Di acepto, pero<span className="block font-semibold">Frente al mar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Haz de tu evento algo inolvidable con el océano como fondo. Espacios frente al mar, atardeceres únicos y la atención perfecta para celebrar como siempre lo soñaste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hotelcostadeoro.mx/english/index.html?open=reserva"
              className="bg-yellow-700 hover:bg-yellow-900 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Reserva ahora
            </a>

            <a href="https://hotelcostadeoro.mx/english/pages/habitaciones.html" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Ver Habitaciones
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
