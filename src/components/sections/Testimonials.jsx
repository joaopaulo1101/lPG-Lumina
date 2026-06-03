import { motion, useReducedMotion } from "framer-motion";

import { testimonials } from "../../data/testimonials";
import { fadeUp, staggerContainer } from "../../lib/motion";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import Stars from "../ui/Stars";

function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <section id="testimonials" className="bg-[#FDFCFA] px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            label="Depoimentos"
            title="Confiança construída no detalhe"
            description="A percepção de cuidado começa no atendimento e aparece no resultado: natural, refinado e coerente com cada pessoa."
          />
        </Reveal>

        <motion.div
          className="grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              className="rounded-lg border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(44,43,40,0.09)]"
            >
              <Stars count={testimonial.stars} />
              <blockquote className="mt-7 min-h-32 text-lg leading-8 text-stone-700">
                <p>“{testimonial.text}”</p>
              </blockquote>
              <div className="mt-8 border-t border-stone-200 pt-5">
                <h3 className="font-medium text-[#2C2B28]">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
