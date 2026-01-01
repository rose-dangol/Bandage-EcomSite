import { Heart, Trash2 } from "lucide-react";
import { useWishlistContext } from "../../context/WishlistContext";
import { formatCurrency } from "../../utils/helper";

const Wishlist = () => {
  const { wishlist, RemoveMutation } = useWishlistContext();
  const handleRemoveWishlist = (id:number) => {
    RemoveMutation.mutate(id)
  };
  return (
    <div className="flex flex-col gap-5 items-center pb-8">
      <div className="flex flex-col items-center gap-3">
        <Heart size={"50px"} stroke="#4a5565" strokeWidth={"1.5px"} />
        <p className="heading-2 text-gray-600">My Wishlist</p>
      </div>
      <div className="min-w-7xl mx-auto">
        <table className="w-full">
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
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-blueBlack">
                  <div className="flex items-center gap-4">
                    {/* <div className="w-30 h-30 overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        </div> */}
                    <span className="heading-5 capitalize">
                      {/* {item.productName} */}
                      {item.productId} name aucha
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {/* {formatCurrency(item.price)} */}
                  price
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">stock</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="hover:scale-125"
                    onClick={() => handleRemoveWishlist(item.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
