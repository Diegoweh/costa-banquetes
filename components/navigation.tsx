import Link from "next/link"
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="bg-yellow-700/60 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            {/* Logo image */}
            <img 
              src="./img/costa-logo.png" 
              alt="Costa de Oro Logo" 
              width="90" 
              height="90" 
              loading="lazy" 
            />

            </Link>
          </div>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/habitaciones"
              className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors"
            >
              HABITACIONES
            </Link>
            <Link
              href="/todo-incluido"
              className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors"
            >
              TODO INCLUIDO
            </Link>
            <Link
              href="/restaurantes"
              className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors"
            >
              RESTAURANTES
            </Link>
            <Link href="/eventos" className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors">
              EVENTOS
            </Link>
            <Link href="/mazatlan" className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors">
              MAZATLÁN
            </Link>
            <Link
              href="/club-vacacional"
              className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors"
            >
              CLUB VACACIONAL
            </Link> */}

            {/* Language/Country Selector */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-red-500 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-white to-green-500"></div>
              </div>
            </div> */}

            {/* Reserve Button */}
            {/* <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              RESERVA
            </button> */}
          {/* </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
