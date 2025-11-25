type Variant = "submit" | "button";
export enum Color {
  red = "var(--red)",
  black = "var(--black)",
}

export interface ButtonProps {
  text: string;
  type: Variant;
  color: Color;
}
