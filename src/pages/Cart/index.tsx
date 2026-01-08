import { Trash2, ShoppingCart } from "lucide-react";
import { formatCurrency } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";

import { CartDataType } from "../../context/CartContext";

export interface UpdateCartDataType {
  id: number;
  newQuantity: number;
}

const TAX: number = 13;

const Cart = () => {
  const navigate = useNavigate();

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Number[]>([]);

  const { carts, setCarts, error, cartUpdateMutation, removeCartMutation } =
    useCartContext();

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    cartUpdateMutation.mutate({ id, newQuantity });
    setCarts(
      carts.map((item: CartDataType) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveCart = (id: number) => {
    removeCartMutation.mutate(id);
  };

  const handleCheckout = () => {};

  if (error) {
    return (
      <span className="text-red-600 text-center">
        An error occurred while loading your cart. Please try again.
      </span>
    );
  }

  const total: number = carts.reduce(
    (total: number, item: CartDataType) =>
      total + item.product.priceAfterDiscount * item.quantity,
    0
  );

  let c: number[] = [];
  useEffect(() => {
    if (carts.length > selectedItems.length) {
      setIsAllChecked(false);
    }
  }, [selectedItems]);
  const handleSelectAll = () => {
    if (isAllChecked) {
      setIsAllChecked(false);
      c = [];
      setSelectedItems(c);
    } else {
      setIsAllChecked(true);
      c = carts.map((data: CartDataType) => data.id);
      setSelectedItems(c);
    }
  };

  return (
    <div className="w-full p-4 md:p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-center items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-blueBlack" />
          <p className="heading-3">Your Cart ({carts.length})</p>
        </div>

        {!carts || carts.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-6 overflow-x-auto">
            {/* Cart Table */}
            <table className="w-full min-w-max">
              <thead className="bg-gray-100 border-b border-blueBlack">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={() => handleSelectAll()}
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Item
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Total
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 w-12">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item: CartDataType) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={
                          isAllChecked ? true : selectedItems.includes(item.id)
                        }
                        onChange={() => {
                          if (!selectedItems.includes(item.id)) {
                            setSelectedItems((prev) => [...prev, item.id]);
                          } else {
                            setSelectedItems((prev) =>
                              prev.filter((id) => id != item.id)
                            );
                          }
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-blueBlack">
                      <div
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={() =>
                          navigate(`/shop/products/${item.product.id}`)
                        }
                      >
                        <div className="w-30 h-30 overflow-hidden bg-gray-100">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="heading-5 capitalize">
                          {item.product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-3 items-center">
                        <span className="paragraph">
                          {formatCurrency(item.product.priceAfterDiscount)}
                        </span>
                        <span className="line-through text-mutedText">
                          {formatCurrency(item.product.price)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 border border-gray-300 rounded w-fit p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {formatCurrency(
                        Number(
                          (
                            item.product?.priceAfterDiscount * item.quantity
                          ).toFixed(2)
                        )
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="hover:scale-125"
                        onClick={() => handleRemoveCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* order summary (total+shipping etx*/}
            <div className="flex lg:justify-end justify-center">
              <div className="rounded-lg shadow-md max-w-md">
                <div className="flex flex-col gap-3 p-5 text-blueBlack">
                  <p className="heading-3">Order Summary</p>
                  <div className="border-t pt-4 flex flex-col gap-2">
                    {/* subtotal */}
                    <div className="flex justify-between heading-6">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>{formatCurrency(Number(total.toFixed(2)))}</span>
                    </div>

                    {/* tax */}
                    <div className="flex justify-between heading-6">
                      <span className="text-gray-600">Tax:</span>
                      <span>{formatCurrency(TAX)}</span>
                    </div>

                    {/* total */}
                    <div className="border-t pt-3 flex justify-between heading-4 text-blueBlack">
                      <span className="font-bold">Total:</span>
                      <span className="text-primary">
                        {formatCurrency(Number((total + TAX).toFixed(2)))}
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleCheckout}
                    // to={"/checkout"}
                    className="self-center links py-3 px-5 text-white btn-transitions max-w-max mt-6 bg-blueBlack hover:bg-[#2b3458] cursor-pointer"
                  >
                    Proceed to Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
