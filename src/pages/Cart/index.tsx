import { useMutation, useQuery } from "@tanstack/react-query";
import { Trash2, ShoppingCart } from "lucide-react";
import { formatCurrency } from "../../utils/helper";
import { deleteCart, fetchCart, updateCartQuantity } from "../../services/cart.service";
import { useEffect, useState } from "react";

export interface UpdateCartDataType {
  id: number;
  newQuantity: number;
};

type CartDataType = {
  id: number;
  cartId?: number;
  productId?: number;
  productName: string;
  price: number;
  image: string;
  quantity: number;
};

const Cart = () => {
  const {
    data: cartItems = [], 
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cartItem"],
    queryFn: () => fetchCart(),
    refetchOnWindowFocus: false,
  });

  const [cart, setCart] = useState<CartDataType[]>([]); 

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setCart(cartItems);
    }
  }, [cartItems]);

  const UpdateCart = useMutation({
    mutationFn: ({ id, newQuantity }: UpdateCartDataType) =>
      updateCartQuantity(id, newQuantity),
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    UpdateCart.mutate({ id, newQuantity });
    setCart(
      cart.map((item: CartDataType) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveCart =(id:number)=>{
    deleteCart(id)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <span className="text-red-600 text-center">
        An error occurred while loading your cart. Please try again.
      </span>
    );
  }

  const total: number = cart.reduce( 
    (total: number, item: CartDataType) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-linear-to-br from-base-100 to-base-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-center items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-blueBlack" />
          <p className="heading-3">Your Cart ({cart.length})</p> 
        </div>

        {!cart || cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Table */}
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
                {cart.map((item: CartDataType) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-blueBlack">
                      <div className="flex items-center gap-4">
                        <div className="w-30 h-30 overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
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
                        Number((item.price * item.quantity).toFixed(2))
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="hover:scale-125" onClick={()=>handleRemoveCart(item.id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* order summary (toal+shipping etx*/}
            <div className="flex justify-end">
              <div className="rounded-lg shadow-md max-w-md">
                <div className="flex flex-col gap-3 p-5 text-blueBlack">
                  <p className="heading-3">Order Summary</p>
                  <div className="border-t pt-4 flex flex-col gap-2">
                    {/* subtotal */}
                    <div className="flex justify-between heading-6">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>{formatCurrency(Number(total.toFixed(2)))}</span>  
                    </div>

                    {/* shipping */}
                    <div className="flex justify-between heading-6">
                      <span className="text-gray-600">Shipping:</span>
                      <span>{formatCurrency(10.0)}</span>
                    </div>

                    {/* total */}
                    <div className="border-t pt-3 flex justify-between heading-4 text-blueBlack">
                      <span className="font-bold">Total:</span>
                      <span className="text-primary">
                        {formatCurrency(Number((total + 10).toFixed(2)))}
                      </span>
                    </div>
                  </div>
                  <button className="self-center links py-3 px-5 text-white btn-transitions max-w-max mt-6 bg-blueBlack hover:bg-[#2b3458] cursor-pointer">
                    Proceed to Checkout
                  </button>
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