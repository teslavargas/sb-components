import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores varios
   */
  color?: "primary" | "secondary" | "tertiary";
   /**
   * Colores perzonalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor
}: MyLabelProps) => {
  return <span className={`label ${size} text-${color}`} style={{color: fontColor}}>{allCaps ? label.toUpperCase() : label}</span>;
};
