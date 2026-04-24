"use client";

import Image from "next/image";
import Link from "next/link";

const proofItems = [
  "Page publique",
  "Badge IA",
  "Document exportable",
  "Non certification officielle",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[780px]">
      <Image
        itemProp="primaryImageOfPage"
        src="/hero-ai-declared.webp"
        alt="Exemple de page publique AI Declared présentant l’usage de l’intelligence artificielle d’une entreprise avec badge de transparence et document exportable."
        width={1600}
        height={1200}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_58%,#F3F6FA_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[520px] bg-[radial-gradient(circle_at_top,rgba(95,134,179,0.10),transparent_58%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-56 w-56 rounded-full bg-[#5F86B3]/8 blur-3xl" />
      <div className="absolute right-[-6%] top-16 -z-10 h-72 w-72 rounded-full bg-[#243E5A]/7 blur-3xl" />

      <span className="sr-only" itemProp="alternativeHeadline">
        AI Act entreprise : déclaration IA, page de transparence, badge IA et
        document exportable pour expliquer clairement l’usage de l’intelligence
        artificielle.
      </span>

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center lg:pt-6 lg:text-left">
            <p
              itemProp="about"
              className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#243E5A]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#243E5A]/75 shadow-sm backdrop-blur md:text-xs"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#5F86B3] shadow-[0_0_0_4px_rgba(95,134,179,0.16)]" />
              Transparence IA • AI Act • Réponse simple
            </p>

            <h1
              itemProp="headline"
              className="hero-reveal mt-5 text-[2.15rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#243E5A] [animation-delay:120ms] md:text-[3.65rem] lg:max-w-[11ch]"
            >
              Déclarez votre usage de l’IA :
              <br />
              <span className="relative inline-block">
                clairement
                <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#5F86B3]/18" />
              </span>
              , simplement, publiquement.
            </h1>

            <p className="hero-reveal mt-3 text-sm font-medium text-[#243E5A]/75 [animation-delay:180ms] md:text-base">
              Page publique, badge de transparence et document exportable.
            </p>

            <p
              itemProp="description"
              className="hero-reveal mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-[#475569] [animation-delay:260ms] lg:mx-0 md:text-[1.18rem]"
            >
              AI Declared aide votre entreprise à expliquer{" "}
              <strong className="font-semibold text-[#243E5A]">
                comment elle utilise l’intelligence artificielle
              </strong>{" "}
              sur son site, dans ses services ou dans ses processus internes,
              sans prétendre fournir une certification officielle AI Act.
            </p>

            <div className="hero-reveal mt-7 flex flex-col items-center justify-center gap-3 [animation-delay:340ms] sm:flex-row lg:justify-start">
              <Link
                href="/fr/generate"
                aria-label="Créer ma déclaration IA"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[#5F86B3] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(95,134,179,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243E5A] hover:shadow-[0_18px_36px_rgba(36,62,90,0.28)] sm:w-auto md:px-10"
              >
                Créer ma déclaration IA
              </Link>

              <Link
                href="/fr/pricing"
                aria-label="Voir le prix"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl border border-[#243E5A]/14 bg-white px-8 py-4 text-base font-semibold text-[#243E5A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#243E5A] hover:bg-[#243E5A] hover:text-white sm:w-auto"
              >
                Voir le prix
              </Link>
            </div>

            <div className="hero-scale mt-6 lg:hidden">
              <HeroVisual />
            </div>

            <p className="hero-reveal mt-8 text-center text-sm font-medium text-[#243E5A]/80 [animation-delay:420ms] lg:text-left">
              Une réponse lisible, visible sur votre site et partageable avec
              vos clients, partenaires ou équipes.
            </p>

            <div className="hero-reveal mt-7 flex flex-wrap items-center justify-center gap-3 [animation-delay:520ms] lg:justify-start">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#243E5A]/12 bg-white px-4 py-2 text-xs font-medium text-[#243E5A] shadow-sm md:px-3 md:py-1.5 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-scale relative hidden lg:block lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealScale {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hero-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-scale {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.18s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-scale {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
