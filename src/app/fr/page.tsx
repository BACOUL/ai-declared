// PATH: src/app/fr/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

// FR — composants définitifs
import HeroFR from "@/components/fr/Hero";
import ProblemSolutionFR from "@/components/fr/ProblemSolution";
import DifferentiationFR from "@/components/fr/Differentiation";
import FeaturesFR from "@/components/fr/Features";
import HowItWorksFR from "@/components/fr/HowItWorks";
import TestimonialsFR from "@/components/fr/Testimonials";
import PricingFR from "@/components/fr/Pricing";
import FAQFR from "@/components/fr/FAQ";

/* ======================================================
   SEO / IA — META FR (HOME)
   Objectif : capter “AI Act entreprise / transparence IA / déclaration IA”
   Positionnement : page publique + badge + document exportable.
   Important : ne promet pas une certification officielle AI Act.
   Palette logo AI Declared :
   - Bleu autorité : #243E5A
   - Bleu accent : #5F86B3
   - Fond clair : #F8FAFC
====================================================== */

export const metadata: Metadata = {
  title:
    "AI Act entreprise : déclaration IA, badge et page de transparence | AI Declared",
  description:
    "AI Declared aide les entreprises à déclarer clairement leur usage de l’intelligence artificielle : page publique de transparence IA, badge à afficher sur le site et document exportable. Une solution simple pour expliquer vos usages IA à vos clients, partenaires et équipes. Ce service n’est pas une certification officielle AI Act.",
  keywords: [
    "AI Act entreprise",
    "transparence IA",
    "déclaration IA",
    "usage IA entreprise",
    "badge IA",
    "page transparence IA",
    "intelligence artificielle entreprise",
    "conformité IA",
    "AI Act site web",
    "mention IA obligatoire",
    "chatbot AI Act",
    "déclaration usage IA",
  ],
  alternates: {
    canonical: "https://www.aideclared.com/fr/",
    languages: {
      fr: "https://www.aideclared.com/fr/",
      en: "https://www.aideclared.com/",
    },
  },
  openGraph: {
    type: "website",
    title:
      "AI Act entreprise : déclaration IA, badge et page de transparence | AI Declared",
    description:
      "Générez une page publique, un badge et un document exportable pour expliquer clairement comment votre entreprise utilise l’intelligence artificielle. Non certification officielle AI Act.",
    url: "https://www.aideclared.com/fr/",
    siteName: "AI Declared",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Act entreprise : déclaration IA, badge et page de transparence | AI Declared",
    description:
      "Page publique de transparence IA, badge à afficher sur le site et document exportable pour entreprises utilisant l’intelligence artificielle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeFR() {
  const pageUrl = "https://www.aideclared.com/fr/";

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Declared",
    url: "https://www.aideclared.com",
    logo: "https://www.aideclared.com/assets/logo.png",
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Declared",
    url: "https://www.aideclared.com",
    inLanguage: ["fr-FR", "en"],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Act entreprise : déclaration IA, badge et page de transparence | AI Declared",
    url: pageUrl,
    description:
      "Accueil France : solution de transparence IA pour entreprises — page publique, badge visible et document exportable. Non certification officielle AI Act.",
    isPartOf: {
      "@type": "WebSite",
      name: "AI Declared",
      url: "https://www.aideclared.com",
    },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <main id="main-content" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebPage),
          }}
        />

        <HeroFR />
        <ProblemSolutionFR />
        <DifferentiationFR />
        <FeaturesFR />
        <HowItWorksFR />
        <TestimonialsFR />
        <PricingFR />
        <FAQFR />

        <section
          id="final-cta"
          data-section="final-cta"
          className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
          aria-label="Appel à l’action final"
        >
          <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
          <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#5F86B3]/10 blur-3xl" />
          <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#243E5A]/8 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[30px] border border-[#243E5A]/10 bg-white p-8 shadow-[0_25px_60px_rgba(36,62,90,0.10)] md:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                    Transparence IA — format standardisé
                  </p>

                  <h2 className="text-3xl font-extrabold leading-tight text-[#243E5A] md:text-4xl">
                    Produire une déclaration IA claire, publique et partageable
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#475569]">
                    Si votre entreprise utilise un chatbot, de la génération de
                    contenu, une automatisation ou un outil IA interne, l’objectif
                    est de pouvoir expliquer simplement vos usages : page publique,
                    badge visible, document exportable, limites explicites et date
                    de mise à jour.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/fr/generate"
                      className="inline-flex items-center justify-center rounded-xl bg-[#5F86B3] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(95,134,179,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243E5A]"
                    >
                      Créer ma déclaration IA →
                    </Link>

                    <Link
                      href="/fr/pricing"
                      className="inline-flex items-center justify-center rounded-xl border border-[#243E5A] px-5 py-3 text-sm font-semibold text-[#243E5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243E5A] hover:text-white"
                    >
                      Voir le prix
                    </Link>

                    <Link
                      href="/fr/ai-act-entreprise"
                      className="inline-flex items-center justify-center rounded-xl border border-[#C9CED6] px-4 py-3 text-sm font-medium text-[#475569] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC]"
                    >
                      Lire le guide AI Act →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-[24px] border border-[#243E5A]/10 bg-[#F8FAFC] p-6">
                    <h3 className="mb-3 text-lg font-semibold text-[#243E5A]">
                      Rappel de périmètre
                    </h3>

                    <ul className="ml-6 list-disc space-y-2 text-sm text-[#475569]">
                      <li>déclaration d’usage IA</li>
                      <li>page publique de transparence</li>
                      <li>badge visible à afficher sur le site</li>
                      <li>document exportable pour clients ou partenaires</li>
                      <li>non certification officielle AI Act</li>
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/fr/verify"
                        className="inline-flex items-center justify-center rounded-lg border border-[#C9CED6] px-4 py-2 text-sm text-[#475569] transition-colors hover:bg-white"
                      >
                        Vérifier →
                      </Link>

                      <Link
                        href="/fr/product/privacy"
                        className="inline-flex items-center justify-center rounded-lg border border-[#C9CED6] px-4 py-2 text-sm text-[#475569] transition-colors hover:bg-white"
                      >
                        Confidentialité →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#main-content"
                  className="inline-flex items-center justify-center rounded-lg border border-[#C9CED6] px-4 py-2 text-sm text-[#475569] transition-colors hover:bg-[#F8FAFC]"
                >
                  Haut de page
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
