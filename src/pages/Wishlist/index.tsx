import { Heart, ShoppingBasket, Trash2 } from "lucide-react";
import { useWishlistContext } from "../../context/WishlistContext";
import { formatCurrency } from "../../utils/helper";
import { useCartContext } from "../../context/CartContext";
import { CartAddDataType } from "../ProductDetail";

type WishlistDataType = {
  id: number;
  productId: number;
  productName: string;
  price: number;
  image: string[];
};

const Wishlist = () => {
  const { wishlistItems, removeMutation } = useWishlistContext();
  const { cartAddMutation } = useCartContext();

  const handleRemoveWishlist = (id: number) => {
    removeMutation.mutate(id);
  };

  const handleAddtoCart = (id: number) => {
    let quantity = 1;
    const data = { id, quantity } as CartAddDataType;
    cartAddMutation(data);
  };

  const handleAddAllToCart = () => {
    if (wishlistItems?.length > 0) {
      let quantity = 1;
      wishlistItems.forEach((item: WishlistDataType) => {
        const id = item.productId;
        const data = { id, quantity } as CartAddDataType;
        cartAddMutation(data);
        setTimeout(() => {
          removeMutation.mutate(item.id);
        }, 500);
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center pb-8">
      <div className="flex items-center gap-3">
        <Heart size={"50px"} stroke="#4a5565" strokeWidth={"1.5px"} />
        <p className="heading-2 text-gray-600">My Wishlist</p>
      </div>
      <div className="w-full mx-auto">
        {wishlistItems?.length > 0 ? (
          <div className="flex flex-col overflow-x-auto">
            <div
              className="mb-5 cursor-pointer bg-primary hover:bg-secondary btn-transitions links text-white max-w-max self-end rounded-xl px-3 py-2"
              onClick={handleAddAllToCart}
            >
              Add All To Cart
            </div>
            <table className="w-full overflow-x-auto">
              <thead className="bg-gray-100 border-b border-blueBlack">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Item
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Stock Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 w-12">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item: WishlistDataType) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-blueBlack">
                      <div className="flex items-center gap-4">
                        <div className="w-30 h-30 overflow-hidden bg-gray-100">
                          <img
                            src={item.image[0]}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="heading-5 capitalize">
                          {item.productName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{formatCurrency(item.price)}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      stock
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-center flex justify-center gap-5 items-center">
                        <button
                          className="w-10 h-10 hover:scale-110 hover:cursor-pointer"
                          onClick={() => handleAddtoCart(item.productId)}
                        >
                          <img src="images/cart-plus.svg" alt="Add-To-Cart" />
                        </button>
                        <button
                          className="hover:scale-125"
                          onClick={() => handleRemoveWishlist(item.id)}
                        >
                          <Trash2 className="w-6 h-6 text-red-600 hover:cursor-pointer" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBasket className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-500">Your wishlist is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
