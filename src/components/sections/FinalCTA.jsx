import { site } from "../../data/site";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

function FinalCTA() {
  return (
    <section id="cta" className="bg-[#FDFCFA] px-6 py-24 md:px-8 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-[#2C2B28] px-6 py-16 text-center text-white shadow-[0_30px_90px_rgba(44,43,40,0.20)] md:px-12 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D8C7B8]">
            Agendamento Particular
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
            Comece com uma avaliação estética completa.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-stone-300">
            Uma consulta para entender sua pele, seus objetivos e o caminho mais elegante para chegar ao resultado desejado.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${site.email}`} className="bg-white text-[#2C2B28] hover:bg-[#E9DED4]">
              Solicitar Horário
            </Button>
            <Button href="#services" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#2C2B28]">
              Ver Protocolos
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FinalCTA;
