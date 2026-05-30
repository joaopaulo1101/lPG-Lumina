function SectionTitle({ label, title }) {
  return (
    <div className="text-center mb-12">
      <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
        {label}
      </p>

      <h2 className="text-5xl mt-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;