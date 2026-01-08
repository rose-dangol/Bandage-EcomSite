export type ProductDataType = {
  category: {
    id: number;
    name: string;
    image?: null;
  };
  colors: string[];
  description: string;
  discount: number;
  id: number;
  image: string[];
  name: string;
  price: number;
  priceAfterDiscount: number;
  status: "active" | "inactive";
};
