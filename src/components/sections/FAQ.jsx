import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { faqs } from "../../data/faqs";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-[#F7F2EC] px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionTitle
            align="left"
            label="FAQ"
            title="Perguntas frequentes"
            description="Informações essenciais para decidir com segurança antes de iniciar sua jornada estética."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-[#D8C7B8] border-y border-[#D8C7B8]">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8977E] focus-visible:ring-offset-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span className="font-display text-2xl leading-tight text-[#2C2B28]">
                      {item.q}
                    </span>
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#B8977E] text-[#B8977E]"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                      >
                        <p className="max-w-3xl pb-7 text-sm leading-7 text-stone-600 md:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
