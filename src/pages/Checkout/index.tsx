import { TruckElectric, PackageOpen } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const [shippingMethod, setShippingMethod] = useState("delivery");

  return (
    <div className="w-full min-h-screen flex lg:flex-row flex-col-reverse bg-gray-50">
      {/* left */}
      <div className="flex flex-col gap-6 lg:w-1/2 px-16 py-12 border-r border-gray-200 bg-white">
        <h1 className="heading-2 text-blueBlack">Checkout</h1>
        <div className="flex flex-col gap-3">
          <label className="heading-5 text-blueBlack">
            Shipping Information
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-3 flex-1 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary hover:bg-blue-50 transition">
              <input
                type="radio"
                name="shipping"
                value="delivery"
                checked={shippingMethod === "delivery"}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="cursor-pointer"
              />
              <TruckElectric size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Delivery
              </span>
            </label>
            <label className="flex items-center gap-3 flex-1 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary hover:bg-blue-50 transition">
              <input
                type="radio"
                name="shipping"
                value="pickup"
                checked={shippingMethod === "pickup"}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="cursor-pointer"
              />
              <PackageOpen size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Pickup</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Country</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition cursor-pointer">
              <option value="" className="text-gray-400">
                Select a country
              </option>
              <option value="us">Nepal</option>
              <option value="us">Scotland</option>
              <option value="us">United States</option>
              <option value="de">Greece</option>
              <option value="jp">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 px-16 py-20 flex flex-col gap-6">
        <h2 className="heading-3 text-blueBlack">Order Summary</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 text-center py-8">Order details</p>
        </div>
        <div
          className="btn-transitions bg-primary hover:bg-secondary rounded-xl text-white text-center py-4 max-w-[1/2] px-6 cursor-pointer"
          onClick={() =>
            toast("Yay! You bought the product!", {
              icon: "🛍️",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            })
          }
        >
          Pay Now
        </div>
      </div>
    </div>
  );
};

export default Checkout;
