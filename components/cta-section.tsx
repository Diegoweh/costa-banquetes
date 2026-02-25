import Image from "next/image";
import Link from "next/link";
import { FaHotTubPerson, FaChampagneGlasses } from "react-icons/fa6";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    text: "Upgrade gratis a suite nupcial",
    bold: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    text: "Sesion de fotos pre-boda en la playa (1 hora)",
    bold: false,
  },
  {
    icon: (
      <FaHotTubPerson className="w-7 h-5" />
    ),
    text: "Spa de cortesia para la novia",
    bold: true,
  },
  {
    icon: (
      <FaChampagneGlasses className="w-7 h-5" />
    ),
    text: "Botella de champagne en la suite",
    bold: false,
  },
];

export function CtaSection() {
  return (
    <section className="relative py-16 md:py-20">
      <Image
        src="/img/bg-cta.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        priority={false}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Two-column content */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Left column */}
          <div className="flex-1">
            <h2 className="font-serif text-2xl italic leading-snug md:text-3xl" style={{ color: "#4a4a4a" }}>
              Las mejores fechas<br />
              se van rapido
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "#5a5a5a" }}>
              Los atardeceres de febrero a abril son los mas romanticos del Pacifico. Si ya tienen fecha en mente, es momento de asegurar su dia sonado.
            </p>
          </div>

          {/* Right column */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold italic md:text-2xl" style={{ color: "#4a4a4a" }}>
              Reserva este mes y recibe:
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="shrink-0" style={{ color: "#8a7d4a" }}>
                    {benefit.icon}
                  </span>
                  <span
                    className={`text-base ${benefit.bold ? "font-semibold" : ""}`}
                    style={{ color: benefit.bold ? "#8a7d4a" : "#4a4a4a" }}
                  >
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#agendar"
            className="inline-block rounded px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: "#8a7d4a",
              color: "#ffffff",
            }}
          >
            Agendar videollamada / Wedding Planner
          </Link>
          <Link
            href="#whatsapp"
            className="inline-block rounded border-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              borderColor: "#6b6b6b",
              color: "#4a4a4a",
              backgroundColor: "transparent",
            }}
          >
            {'Whatsapp: quiero mi boda aqui'}
          </Link>
        </div>
      </div>
    </section>
  );
}
