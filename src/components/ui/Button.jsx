function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-black text-white px-6 py-3 hover:opacity-90 transition",
    outline:
      "border border-black px-6 py-3 hover:bg-black hover:text-white transition",
  };

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;