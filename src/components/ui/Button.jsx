function Button({ children, variant = "primary" }) {
  const variants = {
    primary:
      "bg-[#2C2B28] text-white px-8 py-4 uppercase tracking-[0.15em] text-xs hover:bg-[#B8977E] transition-all duration-300",

    outline:
      "border border-[#C9BEB4] px-8 py-4 uppercase tracking-[0.15em] text-xs hover:bg-[#2C2B28] hover:text-white transition-all duration-300",
  };

  return (
    <button className={variants[variant]}>
      {children}
    </button>
  );
}

export default Button;