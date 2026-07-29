import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { themehandler } from "../context/ThemeContext";
import { Mail, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [theme] = useContext(themehandler);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Login Success:", userCredential.user);

    alert("Login Successful");

    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={`h-125 w-100 py-10 rounded-xl ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <form
          onSubmit={handleLogin}
          className="flex justify-center items-center flex-col gap-5"
        >
          <img
            className={`h-20 w-20 rounded-full ${
              theme === "dark" ? "bg-white" : ""
            }`}
            src={logo}
            alt="Logo"
          />

          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } font-bold text-2xl`}
          >
            Welcome Back
          </h1>

          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            } text-[12px]`}
          >
            Enter details to explore modern clothing collection.
          </p>

          <div className="flex flex-col items-start justify-start gap-5">

            {/* Email */}

            <div>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } uppercase font-bold text-[14px]`}
              >
                Email
              </p>

              <div
                className={`flex ${
                  theme === "dark"
                    ? "border-gray-300"
                    : "border-gray-700"
                } gap-3 border rounded-lg p-2`}
              >
                <Mail />

                <input
                  type="email"
                  placeholder="demo@ecommerce.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${
                    theme === "dark"
                      ? "text-gray-200"
                      : "text-gray-900"
                  } outline-none bg-transparent`}
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } uppercase font-bold text-[14px]`}
              >
                Password
              </p>

              <div
                className={`flex ${
                  theme === "dark"
                    ? "border-gray-300"
                    : "border-gray-700"
                } gap-3 border rounded-lg p-2`}
              >
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${
                    theme === "dark"
                      ? "text-gray-200"
                      : "text-gray-900"
                  } outline-none bg-transparent`}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white font-bold bg-cyan-800 p-3 rounded-xl w-full flex justify-center items-center gap-3"
          >
            Sign In Account
            <MoveRight />
          </button>

          <div className="flex">
            <p className="text-gray-500 text-[12px] font-bold">
              New Here?
            </p>

            <button
              type="button"
              onClick={() => navigate("/logout")}
              className="text-cyan-800 hover:underline text-[12px] font-bold"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;