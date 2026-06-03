import { motion, useReducedMotion } from "framer-motion";

import { services } from "../../data/services";
import { fadeUp, staggerContainer } from "../../lib/motion";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

function Services() {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <section
      id="services"
      className="bg-[#FDFCFA] px-6 py-24 md:px-8 md:py-28"
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <SectionTitle
            label="Nossos Tratamentos"
            title="Serviços Exclusivos"
            description="Protocolos desenhados para criar evolução real, sem exageros: tecnologia, precisão clínica e acabamento natural."
          />
        </Reveal>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >

          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="
                bg-white
                border
                border-stone-200
                p-7
                rounded-lg
                transition-all
                duration-300
                hover:border-[#D6C1AF]
                hover:-translate-y-2
                hover:shadow-[0_24px_65px_rgba(44,43,40,0.10)]
              "
            >

              <div className="flex justify-between items-start gap-4 mb-8">

                <span className="font-display text-4xl text-[#B8977E]" aria-hidden="true">
                  {service.icon}
                </span>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    bg-[#F5EFE9]
                    text-stone-600
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  {service.tag}
                </span>

              </div>

              <h3 className="font-display text-3xl leading-tight mb-4">
                {service.title}
              </h3>

              <p className="text-stone-600 leading-7 text-sm">
                {service.desc}
              </p>

              <a
                href="#cta"
                aria-label={`Agendar avaliação para ${service.title}`}
                className="
                  inline-flex
                  mt-6
                  text-[#B8977E]
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  hover:translate-x-1
                  transition-all
                "
              >
                Saiba Mais
              </a>

            </motion.article>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default Services;
