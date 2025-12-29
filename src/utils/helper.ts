export const getLayoutClass = () => {
  return "section-space";
};

export const urlToObject = async (image: string): Promise<File> => {
  const imageName = image.split("products/");
  const imageUrl = `${import.meta.env.VITE_API_BASE}\\${image}`;
  const response = await fetch(imageUrl);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], `${imageName}`, { type: blob.type });
  return file;
};

export const validateColorName = (color: string) => {
  var style = new Option().style;
  style.color = color;
  // Check if the computed color is the same as the input color
  return style.color == color;
};

export const formatCurrency = (value: number, currency = "USD") => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return price.format(value);
};
