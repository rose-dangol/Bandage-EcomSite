export const getLayoutClass = () => {
  return "section-space";
};

export const urlToObject = async (image) => {
  const imageUrl = `${import.meta.env.VITE_API_BASE}\\${image}`;
  const response = await fetch(imageUrl);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], "image.jpg", { type: blob.type });
  return file;
};

export const validateColorName = (color) => {
  var style = new Option().style;
  style.color = color;
  // Check if the computed color is the same as the input color
  return style.color == color;
};
