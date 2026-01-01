import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "../../component";
import { useMutation } from "@tanstack/react-query";
import { userLogin, userSignup } from "../../services/user.service";
import { isEmailValid, isPasswordValid } from "../../utils/helper";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type UserDataType = {
  email: string;
  password: string;
};

type SignupDataType = UserDataType & {
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

const Auth = () => {
  const navigate = useNavigate();
  const [formstate, setFormState] = useState<"Login" | "Signup">("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setLocalStorage } = useLocalStorage();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  // Login Mutation
  const LoginMutation = useMutation({
    mutationFn: ({ email, password }: UserDataType) =>
      userLogin(email, password),
    onSuccess: (data) => {
      setLocalStorage("authToken", data?.access);
      setLocalStorage("userData", email);
      navigate("/");
    },
    onError: (error: any) => {
      setEmailError(error.response?.data?.message || "Login failed");
    },
  });

  // Signup Mutation
  const SignupMutation = useMutation({
    mutationFn: ({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    }: SignupDataType) =>
      userSignup(firstName, lastName, email, password, confirmPassword),
    onSuccess: (data) => {
      setLocalStorage("authToken", data?.access);
      setLocalStorage("userData", email);
      navigate("/");
    },
    onError: (error: any) => {
      setEmailError(error.response?.data?.message || "Signup failed");
    },
  });

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (email === "") {
      setEmailError("This field must be filled.");
      return;
    }
    if (password === "") {
      setPasswordError("This field must be filled.");
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError("Invalid email.");
      return;
    }
    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be 8-16 chars with uppercase, lowercase, number, and special char."
      );
      return;
    }

    LoginMutation.mutate({ email, password });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email === "") {
      setEmailError("This field must be filled.");
      return;
    }
    if (password === "") {
      setPasswordError("This field must be filled.");
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError("Invalid email.");
      return;
    }
    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be 8-16 chars with uppercase, lowercase, number, and special char."
      );
      return;
    }

    SignupMutation.mutate({ email, password, username });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-full flex">
        {/* form */}
        <div className="lg:w-3/4 w-full flex items-center justify-center p-8">
          <div className="container mx-auto h-auto max-w-md p-10 py-16 rounded-lg shadow-lg">
            <div className="mb-10">
              <h2 className="heading-3 text-blueBlack">Bandage</h2>
            </div>
            {formstate == "Login" ? (
              <div className="flex flex-col gap-6 pt-5">
                <h1 className="heading-1">Login</h1>
                {/* <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setUsernameError("");
                    }}
                  />
                  {usernameError && (
                    <span className="text-red-500 text-sm">{usernameError}</span>
                  )}
                </div> */}
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
                  <div className="flex justify-between items-center">
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

                  {showPassword ? (
                    <EyeOff
                      className="absolute right-4 top-10 z-30 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-4 top-10 z-30 cursor-pointer"
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
                  type="button"
                  className="w-2/5 mx-auto bg-primary text-white font-medium py-3 rounded btn-transitions hover:bg-secondary disabled:opacity-50"
                  onClick={handleLogin}
                  disabled={LoginMutation.isPending}
                >
                  {LoginMutation.isPending ? "Logging in..." : "Log In"}
                </button>
                <span className="text-center text-sm text-grayText inline">
                  I don't have an account?
                  <span
                    className="text-red-500 font-medium cursor-pointer"
                    onClick={() => setFormState("Signup")}
                  >
                    {" "}
                    Sign up
                  </span>
                </span>
              </div>
            ) : (
              <form
                className="flex flex-col gap-6 pt-5"
                onSubmit={handleSignup}
              >
                <h1 className="heading-1">Sign Up</h1>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm font-medium">
                      FirstName
                    </label>
                    <input
                      type="text"
                      placeholder="Firstname"
                      className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameError("");
                      }}
                    />
                    {usernameError && (
                      <span className="text-red-500 text-sm">
                        {usernameError}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm font-medium">
                      Lastname
                    </label>
                    <input
                      type="text"
                      placeholder="Lastname"
                      className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameError("");
                      }}
                    />
                    {usernameError && (
                      <span className="text-red-500 text-sm">
                        {usernameError}
                      </span>
                    )}
                  </div>
                </div>

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

                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                  />
                  {passwordError && (
                    <span className="text-sm text-red-500">
                      {passwordError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 bg-[#9ae9f33d] rounded focus:outline-secondary"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                  />
                  {passwordError && (
                    <span className="text-sm text-red-500">
                      {passwordError}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-2/5 mx-auto bg-primary text-white font-medium py-3 rounded btn-transitions hover:bg-secondary disabled:opacity-50"
                  disabled={SignupMutation.isPending}
                >
                  {SignupMutation.isPending ? "Signing up..." : "Sign Up"}
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
        <div className="hidden lg:inline min-h-screen w-2/5">
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
