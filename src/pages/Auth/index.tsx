import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "../../component";

const Auth = () => {
  const navigate = useNavigate();
  const [formstate, setFormState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login } = useUserContext();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    if (email === "") {
      setEmailError("This field must be filled.");
    }
    if (password === "") {
      setPasswordError("This field must be filled.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 8-16 chars with uppercase, lowercase, number, and special char."
      );
    } else {
      login(email, password);
      navigate("/");
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-full flex">
        {/* form */}
        <div className="md:w-3/4 w-full flex items-center justify-center p-8">
          <div className="container mx-auto h-auto max-w-md p-10 py-16 rounded-lg shadow-lg">
            <div className="mb-10">
              <h2 className="heading-3 text-blueBlack">Bandage</h2>
            </div>
            {formstate == "Login" ? (
              <div className="flex flex-col gap-6 pt-5">
                <h1 className="heading-1">Login</h1>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && (
                    <span className="text-red-500 text-sm">{emailError}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <div className="flex justify-between items-center \">
                    <label className="block text-sm font-medium">
                      Password
                    </label>
                    <span
                      className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer"
                      onClick={() => {
                        alert("password reset!");
                      }}
                    >
                      Forgot Password?
                    </span>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    onKeyDown={handleKeyPress}
                  />
                  {/* <Eye /> */}
                  {showPassword ? (
                    <EyeOff
                      className="absolute right-4 top-10 z-30"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-4 top-10 z-30"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                  {passwordError && (
                    <span className="text-sm text-red-500">
                      {passwordError}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-2/5 mx-auto bg-primary text-white font-medium py-3 rounded btn-transitions hover:bg-secondary"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                <span className="text-center text-sm text-grayText inline">
                  I don't have an account?
                  <span
                    className="text-red-500 font-medium cursor-pointer"
                    onClick={() => setFormState("signup")}
                  >
                    {" "}
                    Sign up
                  </span>
                </span>
              </div>
            ) : (
              <form className="flex flex-col gap-6 pt-5">
                <h1 className="heading-1">Sign Up</h1>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-2/5 mx-auto bg-primary text-white font-medium py-3 rounded btn-transitions hover:bg-secondary"
                >
                  Sign Up
                </button>
                <span className="text-center text-sm text-grayText inline">
                  Already have an account?
                  <span
                    className="text-red-500 font-medium cursor-pointer"
                    onClick={() => setFormState("Login")}
                  >
                    {" "}
                    Login
                  </span>
                </span>
              </form>
            )}
          </div>
        </div>

        {/* image */}
        <div className="hidden md:inline h-[calc(100vh-80px)] w-2/5">
          <img
            src="/images/auth-pic.png"
            alt="AuthPage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
