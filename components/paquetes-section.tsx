const paquetes = [
  { label: "Paquete 1", href: "/pdf/PAQUETE-DE-BODAS-CDO-2026.pdf" },
  { label: "Paquete 2", href: "/pdf/PAQUETE-DE-BODAS-CDO-2027.pdf" },
  { label: "Paquete 3", href: "/pdf/Boda-Banquete-2026.pdf" },
  { label: "Paquete 4", href: "/pdf/Boda-Banquete-2027.pdf" },
];

export function PaquetesSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-royale-serif text-[#727054]">
          Paquetes
        </h2>
        <p className="mt-2 text-gray-600 font-royale-serif">Consulta nuestros paquetes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
