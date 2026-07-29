import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { themehandler } from "../context/ThemeContext";
import { Mail, MoveRight, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const [theme] = useContext(themehandler);
  const { setUser } = useContext(AuthContext);

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fname || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);

      alert("Account Created Successfully");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={`h-150 w-150 py-10 rounded-xl ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <form
          onSubmit={handleSignup}
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
            Create Account
          </h1>

          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            } text-[12px]`}
          >
            Become a premium member to earn access to seasonal lookbooks.
          </p>

          <div className="flex flex-col gap-5">

            {/* Full Name */}

            <div>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } uppercase font-bold text-[14px]`}
              >
                Full Name
              </p>

              <div
                className={`flex gap-3 border rounded-lg p-2 ${
                  theme === "dark"
                    ? "border-gray-300"
                    : "border-gray-700"
                }`}
              >
                <User />

                <input
                  type="text"
                  placeholder="e.g Alex Mercer"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className={`outline-none bg-transparent ${
                    theme === "dark"
                      ? "text-gray-200"
                      : "text-gray-900"
                  }`}
                />
              </div>
            </div>

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
                className={`flex gap-3 border rounded-lg p-2 ${
                  theme === "dark"
                    ? "border-gray-300"
                    : "border-gray-700"
                }`}
              >
                <Mail />

                <input
                  type="email"
                  placeholder="demo@ecommerce.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`outline-none bg-transparent ${
                    theme === "dark"
                      ? "text-gray-200"
                      : "text-gray-900"
                  }`}
                />
              </div>
            </div>

            {/* Password */}

            <div className="flex gap-3">

              <div>
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } uppercase font-bold text-[14px]`}
                >
                  Password
                </p>

                <div
                  className={`border rounded-lg p-2 ${
                    theme === "dark"
                      ? "border-gray-300"
                      : "border-gray-700"
                  }`}
                >
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`outline-none bg-transparent ${
                      theme === "dark"
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  />
                </div>
              </div>

              <div>
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } uppercase font-bold text-[14px]`}
                >
                  Confirm Password
                </p>

                <div
                  className={`border rounded-lg p-2 ${
                    theme === "dark"
                      ? "border-gray-300"
                      : "border-gray-700"
                  }`}
                >
                  <input
                    type="password"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    className={`outline-none bg-transparent ${
                      theme === "dark"
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  />
                </div>
              </div>

            </div>
          </div>

          <button
            type="submit"
            className="text-white font-bold bg-cyan-800 p-3 rounded-xl w-full flex justify-center items-center gap-3"
          >
            Create Account
            <MoveRight />
          </button>

          <div className="flex">
            <p className="text-gray-500 text-[12px] font-bold">
              Already Registered?
            </p>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-cyan-800 hover:underline text-[12px] font-bold"
            >
              Login Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;