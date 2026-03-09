import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#243e54] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
                {/* Logo image */}
                <img 
                  src="./img/costa-logo.png" 
                  alt="Hotel Costa de Oro" 
                  width="140" 
                  height="140" 
                  loading="lazy" 
                />
              </Link>
            </div>

            <p className="text-white font-royale-serif mb-6 max-w-md">
              Hotel Costa de Oro, tu destino de lujo en Mazatlán. Vive experiencias
              inolvidables frente al Océano Pacífico con un servicio todo incluido
              diseñado para disfrutar cada momento.
            </p>

            {/* <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-zinc-500 transition-colors">
                
                <FaFacebook className="w-6 h-6" />
              </a>

              <a href="#" className="text-white hover:text-zinc-500 transition-colors">
                
                <FaInstagram className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-royale-sans text-[#be9c2b] mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white font-royale-serif hover:text-zinc-500 transition-colors">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-royale-serif hover:text-zinc-500 transition-colors">
                  Restaurantes
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-royale-serif hover:text-zinc-500 transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-royale-serif hover:text-zinc-500 transition-colors">
                  Actividades
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-royale-serif hover:text-zinc-500 transition-colors">
                  Spa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-royale-sans text-[#be9c2b] mb-4">Contacto</h4>
            <div className="space-y-2 text-white font-royale-serif">
              <p>Camarón Sábalo 710</p>
              <p>Mazatlán, Sinaloa</p>
              <p>México 82110</p>
              <p className="mt-4">
                <a href="tel:+526699135344" className="hover:text-zinc-500 transition-colors">
                  +52 669 913 5344
                </a>
              </p>
              <p>
                <a href="mailto:eventos@hotelcostadeoro.mx" className="hover:text-zinc-500 transition-colors">
                  eventos@hotelcostadeoro.mx
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-12 pt-8 text-center text-white">
          <p>&copy; 2026 Hotel Costa de Oro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
