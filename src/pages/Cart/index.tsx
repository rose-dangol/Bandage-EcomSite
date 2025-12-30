import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "../../services/cart.service";

const Cart = () => {
  const {
    data: cartItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
    refetchOnWindowFocus: false,
  });
  // console.log(cartItems);/
  isLoading && <div>Loading Data</div>;
  error && <div>Error Occured.</div>;
  return (
    <>
      {/* {cartItems.map(
        (items: {
          id?: number;
          productName?: string;
          price?: number;
          quantity?: number;
        }) => {
          return (
            <div key={items.id}>
              {items.productName}
              {items.price}
              {items.quantity}
            </div>
          );
        }
      )} */}
    </>
  );
};

export default Cart;

// import { useQuery } from "@tanstack/react-query";
// import { Trash2, AlertCircle, ShoppingCart } from "lucide-react";

// const fetchCart = async () => {
//   return [
//     {
//       id: 1,
//       productName: "Premium Wireless Headphones",
//       price: 129.99,
//       quantity: 1,
//       image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
//     },
//     {
//       id: 2,
//       productName: "USB-C Cable",
//       price: 19.99,
//       quantity: 2,
//       image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
//     },
//   ];
// };

// const Cart = () => {
//   const { data: cartItems, isLoading, error } = useQuery({
//     queryKey: ["cart"],
//     queryFn: fetchCart,
//     refetchOnWindowFocus: false,
//   });

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
//           <p className="text-lg text-gray-600">Loading your cart...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="alert alert-error w-96 shadow-lg">
//           <AlertCircle className="w-6 h-6" />
//           <span>An error occurred while loading your cart. Please try again.</span>
//         </div>
//       </div>
//     );
//   }

//   const total = cartItems?.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8 flex items-center gap-3">
//           <ShoppingCart className="w-8 h-8 text-primary" />
//           <h1 className="text-4xl font-bold text-base-content">Shopping Cart</h1>
//         </div>

//         {!cartItems || cartItems.length === 0 ? (
//           <div className="text-center py-16">
//             <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
//             <p className="text-lg text-gray-500">Your cart is empty</p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {/* Cart Table */}
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50 border-b">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-12">
//                         <input type="checkbox" className="checkbox" />
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                         Product
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                         Price
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                         Quantity
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                         Subtotal
//                       </th>
//                       <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 w-12">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y">
//                     {cartItems.map((item) => (
//                       <tr
//                         key={item.id}
//                         className="hover:bg-gray-50 transition-colors"
//                       >
//                         <td className="px-6 py-4">
//                           <input type="checkbox" className="checkbox" />
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-4">
//                             <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
//                               <img
//                                 src={item.image}
//                                 alt={item.productName}
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <span className="font-medium text-gray-900">
//                               {item.productName}
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-gray-700">
//                           ${item.price.toFixed(2)}
//                         </td>
//                         <td className="px-6 py-4">
//                           <input
//                             type="number"
//                             min="1"
//                             value={item.quantity}
//                             className="input input-bordered w-20 h-10"
//                           />
//                         </td>
//                         <td className="px-6 py-4 font-semibold text-gray-900">
//                           ${(item.price * item.quantity).toFixed(2)}
//                         </td>
//                         <td className="px-6 py-4 text-center">
//                           <button className="btn btn-ghost btn-sm hover:bg-red-100">
//                             <Trash2 className="w-4 h-4 text-red-600" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Summary
//             <div className="flex justify-end">
//               <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
//                 <h3 className="text-lg font-bold mb-4 text-gray-900">
//                   Order Summary
//                 </h3>
//                 <div className="space-y-3 border-t pt-4">
//                   <div className="flex justify-between text-gray-700">
//                     <span>Subtotal:</span>
//                     <span>${total?.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between text-gray-700">
//                     <span>Shipping:</span>
//                     <span>$10.00</span>
//                   </div>
//                   <div className="flex justify-between text-gray-700">
//                     <span>Tax:</span>
//                     <span>${((total || 0) * 0.1).toFixed(2)}</span>
//                   </div>
//                   <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
//                     <span>Total:</span>
//                     <span className="text-primary">
//                       ${(((total || 0) + 10) * 1.1).toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary w-full mt-6">
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
