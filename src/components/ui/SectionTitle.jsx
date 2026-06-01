function SectionTitle({ label, title }) {
  return (
    <div className="text-center mb-16">

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

      <div className="w-10 h-px bg-[#B8977E] mx-auto mb-6"></div>

      <h2
        className="
          font-display
          text-5xl
          md:text-6xl
          font-light
        "
      >
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;