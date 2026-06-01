import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#FDFCF9] to-[#EFE7DE] pt-20"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4">
            Excelência Estética · São Paulo
          </p>

          <div className="w-10 h-px bg-[#B8977E] mb-6"></div>

          <h1 className="font-display text-6xl md:text-8xl font-light leading-tight mb-8">
            Revele Sua
            <br />
            Beleza Natural
          </h1>

          <p className="max-w-xl text-stone-600 leading-8 mb-10">
            Tratamentos estéticos premium desenvolvidos para valorizar sua beleza natural através de tecnologia, ciência e cuidado personalizado.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button>
              Agendar Consulta
            </Button>

            <Button variant="outline">
              Ver Tratamentos
            </Button>
          </div>

          <div className="flex gap-10 mt-16 flex-wrap">

            <div>
              <h3 className="text-3xl font-semibold">
                500+
              </h3>
              <p className="text-sm text-stone-500">
                Clientes Atendidas
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                98%
              </h3>
              <p className="text-sm text-stone-500">
                Satisfação
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                8+
              </h3>
              <p className="text-sm text-stone-500">
                Anos de Experiência
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;