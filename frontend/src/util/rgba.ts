/**
 * RGBA
 * 
 * Creates an rgba() value from a 3 or 6 digit hex color and an opacity.
 */
export const rgba = (hexColor: string, opacity: number): string => {
  let hex: string = hexColor.replace("#", "");

  if (hex.length !== 3 && hex.length !== 6) {
    console.error(`Invalid color: ${hexColor}`);
  }

  const r: number = parseInt(hex.length === 3 ? hex[0].repeat(2) : hex.slice(0, 2), 16);
  const g: number = parseInt(hex.length === 3 ? hex[1].repeat(2) : hex.slice(2, 4), 16);
  const b: number = parseInt(hex.length === 3 ? hex[2].repeat(2) : hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
