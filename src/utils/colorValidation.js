export const validateColorName = (color) => {
  var style = new Option().style;
  style.color = color;

  // Check if the computed color is the same as the input color
  return style.color == color;
};
