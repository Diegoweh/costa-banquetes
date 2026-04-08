import { BASE_PATH } from "@/lib/site";

const paquetes = [
  { label: "Boda Gratis", href: `${BASE_PATH}/pdf/boda-gratis.pdf` },
  { label: "Banquetes Local", href: `${BASE_PATH}/pdf/banquetes-local.pdf` },
];

export function PaquetesSection() {
  return (
    <section id="paquetes" className="mb-20" aria-labelledby="paquetes-heading">
      <div className="text-center mb-8">
        <h2
          id="paquetes-heading"
          className="text-3xl md:text-4xl font-royale-serif text-[#8e6b16]"
        >
          Paquetes
        </h2>
        <p className="mt-2 text-gray-600 font-royale-serif">Consulta nuestros paquetes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {paquetes.map((paquete) => (
          <a
            key={paquete.label}
            href={paquete.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#d8d2bf] bg-[#f9f7f1] px-6 py-5 text-center font-semibold text-[#6c5a2f] hover:bg-[#f1ead6] transition-colors font-royale-sans"
          >
            {paquete.label}
          </a>
        ))}
      </div>
    </section>
  );
}
