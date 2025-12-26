export const getLayoutClass = () => {
  return "section-space";
};

export const urlToObject = async (image) => {
  const imageName = image.split("products/");
  const imageUrl = `${import.meta.env.VITE_API_BASE}\\${image}`;
  const response = await fetch(imageUrl);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], `${imageName}`, { type: blob.type });
  return file;
};

export const validateColorName = (color) => {
  var style = new Option().style;
  style.color = color;
  // Check if the computed color is the same as the input color
  return style.color == color;
};

export const formatPrice = (value) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return price.format(Number(value));
};
