function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-[#B8977E]" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default Stars;
