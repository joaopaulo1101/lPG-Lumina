function SectionTitle({ label, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const line = align === "left" ? "" : "mx-auto";
  const descriptionAlignment = align === "left" ? "" : "mx-auto";

  return (
    <div className={`${alignment} mb-14 md:mb-16`}>

      <p
        className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-[#B8977E]
          mb-4
        "
      >
        {label}
      </p>

      <div className={`w-10 h-px bg-[#B8977E] mb-6 ${line}`}></div>

      <h2
        className="
          font-display
          text-4xl
          md:text-6xl
          font-light
          leading-tight
        "
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-5 max-w-2xl text-stone-600 leading-8 ${descriptionAlignment}`}>
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;
