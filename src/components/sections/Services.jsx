import { services } from "../../data/services";
import SectionTitle from "../ui/SectionTitle";

function Services() {
  return (
    <section
      id="services"
      className="py-28 px-8 bg-[#FDFCFA]"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          label="Nossos Tratamentos"
          title="Serviços Exclusivos"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-white
                border
                border-stone-200
                p-8
                rounded-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div className="flex justify-between items-start mb-6">

                <span className="text-2xl text-[#B8977E]">
                  {service.icon}
                </span>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    bg-stone-100
                    px-3
                    py-1
                  "
                >
                  {service.tag}
                </span>

              </div>

              <h3 className="font-display text-3xl mb-4">
                {service.title}
              </h3>

              <p className="text-stone-600 leading-7 text-sm">
                {service.desc}
              </p>

              <button
                className="
                  mt-6
                  text-[#B8977E]
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  hover:translate-x-1
                  transition-all
                "
              >
                Saiba Mais →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;