import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

const benefits = [
  {
    icon: `${BASE_PATH}/icons/heart.png`,
    text: "Upgrade gratis a suite nupcial",
    bold: true,
  },
  {
    icon: `${BASE_PATH}/icons/photo.png`,
    text: "Sesión de fotos preboda en la playa (1 hora)",
    bold: false,
  },
  // {
  //   icon: "/icons/face.png",
  //   text: "Spa de cortesia para la novia",
  //   bold: true,
  // },
  {
    icon: `${BASE_PATH}/icons/glass.png`,
    text: "Botella de champagne en la suite",
    bold: false,
  },
];

export function CtaSection() {
  return (
    <section
      id="agendar"
      className="relative py-16 md:py-20"
      aria-labelledby="agendar-boda-heading"
    >
      <Image
        src={`${BASE_PATH}/img/bg-cta.png`}
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
            <h2
              id="agendar-boda-heading"
              className="font-royale-serif text-2xl leading-snug md:text-3xl"
              style={{ color: "#4a4a4a" }}
            >
              Las mejores fechas<br />
              se van rápido
            </h2>
            <p className="mt-4 font-royale-serif leading-relaxed" style={{ color: "#5a5a5a" }}>
              Los atardeceres de febrero a abril son los más románticos del Pacífico. Si ya tienen fecha en mente, es momento de asegurar su día soñado.
            </p>
          </div>

          {/* Right column */}
          <div className="flex-1">
            <h3 className="text-xl font-royale-serif md:text-2xl" style={{ color: "#4a4a4a" }}>
              Reserva este mes y recibe:
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex font-royale-serif items-center gap-4">
                  <span className="shrink-0" style={{ color: "#8a7d4a" }}>
                    <Image
                      src={benefit.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-9 w-9 bg-[#ede9e1]/70 rounded-lg py-1 px-1 object-contain"
                      aria-hidden="true"
                    />
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
            className="font-royale-sans inline-block rounded px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: "#8a7d4a",
              color: "#ffffff",
            }}
          >
            Agendar videollamada / Wedding Planner
          </Link>
          <Link
            href="#whatsapp"
            className="font-royale-sans inline-block rounded border-2 px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              borderColor: "#6b6b6b",
              color: "#4a4a4a",
              backgroundColor: "transparent",
            }}
          >
            {"WhatsApp: quiero mi boda aquí"}
          </Link>
        </div>
      </div>
    </section>
  );
}
