import { motion, useReducedMotion } from "framer-motion";

import { heroStats, site } from "../../data/site";
import { easing } from "../../lib/motion";
import Button from "../ui/Button";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FDFCFA] pt-24"
    >
      <div className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-[#F8F1EA] via-[#FDFCFA] to-[#FDFCFA]"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easing }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-stone-500 md:text-sm">
              Excelência Estética · {site.location}
            </p>

            <div className="w-10 h-px bg-[#B8977E] mb-6"></div>

            <h1 className="font-display text-5xl font-light leading-[0.98] text-[#2C2B28] sm:text-6xl md:text-7xl xl:text-8xl">
              Revele Sua
              <br />
              Beleza Natural
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
              Tratamentos estéticos premium desenvolvidos para valorizar sua beleza natural com ciência, tecnologia e cuidado personalizado.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#cta">
                Agendar Consulta
              </Button>

              <Button href="#services" variant="outline">
                Ver Tratamentos
              </Button>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-stone-200 pt-8">

              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-semibold md:text-3xl">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-stone-500 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 24,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: easing,
            }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#E9DED4] shadow-[0_30px_90px_rgba(44,43,40,0.14)] sm:aspect-[3/2] lg:aspect-[4/3]">
              <img
                src={site.heroImage.src}
                srcSet={site.heroImage.srcSet}
                sizes="(min-width: 1024px) 52vw, 100vw"
                alt={site.heroImage.alt}
                width="1200"
                height="800"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-lg border border-white/70 bg-white/85 p-5 shadow-[0_18px_55px_rgba(44,43,40,0.12)] backdrop-blur-md sm:left-auto sm:w-72">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B8977E]">
                Protocolo Lumina
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Avaliação, plano estético e acompanhamento em uma jornada pensada para resultados progressivos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
