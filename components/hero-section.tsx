
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
          {/* Promo badge */}
          <div className="mb-6 inline-block animate-slide-down rounded-full bg-yellow-700 px-8 py-3 text-sm font-bold tracking-wide text-dark-navy shadow-[0_8px_25px_rgba(212,175,55,0.4)]">
            TU BODA GRATIS* | Con 20 hab x 2 noches
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance ">
            &ldquo;Si quiero, pero<span className="block font-semibold font-[family-name:var(--font-dancing-script)]">en el mar&rdquo;</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Despierta donde comienza tu para siempre. Una boda frente al Pacifico donde cada detalle esta pensado para que solo te preocupes por disfrutar.
          </p>

          {/* Price highlight */}
          <p className="my-6 text-xl font-semibold opacity-90">
            {'*O desde '}
            <span className="text-sand-gold">$60,000 MXN</span>
            {' todo incluido frente al mar'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hotelcostadeoro.mx/english/index.html?open=reserva"
              className="bg-yellow-700 hover:bg-yellow-900 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Agendar cita con wedding planner
            </a>

            <a href="https://hotelcostadeoro.mx/english/pages/habitaciones.html" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Ver paquetes de boda
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
