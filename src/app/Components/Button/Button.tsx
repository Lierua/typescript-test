import type { ButtonProps } from "./Button.typed";

const Button = ({ text, type, color }: ButtonProps) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className={`hover:bg-(--background) hover:text-(--foreground) transition-all duration-200 ease-in
     border-(${color}) border-2 py-1 px-6 rounded-[2px] text-(--background)`}
    >
      {text}
    </button>
  );
};

export default Button;
