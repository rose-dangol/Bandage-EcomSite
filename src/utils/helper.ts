export const getLayoutClass = () => {
  return "section-space";
};

export const urlToObject = async (image: string): Promise<File> => {
  const imageName = image.split("products/");
  const response = await fetch(image);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], `${imageName[1]}`, { type: blob.type });
  return file;
};

export const validateColorName = (color: string) => {
  var style = new Option().style;
  style.color = color;
  return style.color == color;
};

export const formatCurrency = (value: number, currency = "USD") => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return price.format(value);
};

export const isEmailValid = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export const isPasswordValid = (password: string) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

  return passwordRegex.test(password);
};
export const dateFormatter = (date: Date | string) => {
  const d = new Date(date);

  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear();

  const time = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${day} ${month}, ${year} at ${time}`;
};

export const numberFormatter = (count:number)=>{
  if(count<1000) return count
  return (count / 1000).toFixed(1) + "K";
}
