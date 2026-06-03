function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#2C2B28] text-white hover:bg-[#B8977E] hover:shadow-[0_18px_45px_rgba(44,43,40,0.16)]",

    outline:
      "border border-[#C9BEB4] text-[#2C2B28] hover:bg-[#2C2B28] hover:text-white hover:border-[#2C2B28]",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    px-7
    py-4
    text-xs
    font-medium
    uppercase
    tracking-[0.15em]
    transition-all
    duration-300
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#B8977E]
    focus-visible:ring-offset-2
    active:translate-y-px
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
