import { aboutPrinciples } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <section id="about" className="bg-[#F4EEE7] px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionTitle
            align="left"
            label="Sobre a Lumina"
            title="Estética com método, escuta e precisão."
            description="A Lumina Clinic foi pensada como uma experiência de cuidado completo: diagnóstico claro, tecnologia bem indicada e acompanhamento próximo em cada etapa."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/70 p-7 shadow-[0_18px_55px_rgba(44,43,40,0.08)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B8977E]">
                Experiência
              </p>
              <h3 className="mt-5 font-display text-4xl font-light">
                Consulta boutique
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Cada paciente recebe um plano realista com prioridades, preparo da pele e cuidados pós-procedimento.
              </p>
            </div>

            <div className="rounded-lg border border-[#D8C7B8] p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B8977E]">
                Diferenciais
              </p>
              <ul className="mt-6 space-y-5">
                {aboutPrinciples.map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-7 text-stone-700">
                    <span className="mt-3 h-px w-6 shrink-0 bg-[#B8977E]" aria-hidden="true"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
