"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Signing up with:", { name, email, password });

    setLoading(false);

    // Redirect to homepage (or dashboard)
    router.push("/");
  };

  const handleGoogleSignUp = () => {
    // You can integrate Google OAuth here
    alert("Google sign up clicked! Implement OAuth logic here.");
  };

  const handleFacebookSignUp = () => {
    // You can integrate Facebook OAuth here
    alert("Facebook sign up clicked! Implement OAuth logic here.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4 py-10 ">
      <div className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
        {/* Top section with background image */}
        <div
          className="relative h-64 p-8 flex flex-col justify-center text-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=800&auto=format&fit=crop&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">Create Account</h2>
          <p className="text-sm drop-shadow-md">Adventure awaits — join HiLinks today!</p>

          {/* Social buttons inside the background */}
          <div className="mt-8 space-y-3">
            <button
              onClick={handleGoogleSignUp}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white/20 bg-opacity-90 text-black py-2 rounded-md hover:bg-opacity-100 hover:bg-white/60 transition shadow-md"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M533.5 278.4c0-17.7-1.6-34.8-4.7-51.4H272v97.3h146.9c-6.3 33.8-25 62.5-53.7 81.7v67h86.7c50.8-46.9 80.6-115.9 80.6-194.6z"
                  fill="#4285F4"
                />
                <path
                  d="M272 544.3c72.6 0 133.5-24 178-65.1l-86.7-67c-24.1 16.2-55 25.8-91.3 25.8-70.3 0-130-47.5-151.3-111.1H32.2v69.7C76.7 484.6 168.8 544.3 272 544.3z"
                  fill="#34A853"
                />
                <path
                  d="M120.7 327.9c-6.2-18.7-6.2-38.9 0-57.6V200.6H32.2c-18.3 35.9-18.3 78.4 0 114.3l88.5-69z"
                  fill="#FBBC05"
                />
                <path
                  d="M272 107.7c38.9 0 73.9 13.4 101.4 39.7l76-76C398.8 24.9 340.7 0 272 0 168.8 0 76.7 59.7 32.2 150.3l88.5 69c21.3-63.6 81-111.1 151.3-111.1z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-medium">Sign up with Google</span>
            </button>

            <button
              onClick={handleFacebookSignUp}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white/20 bg-opacity-90 text-black py-2 rounded-md hover:bg-opacity-100 hover:bg-white/60 transition shadow-md"
            >
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Sign up with Facebook</span>
            </button>
          </div>
        </div>

        {/* Form section */}
        <div className="p-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or sign up directly</span>
            </div>
          </div>
          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
              } text-white font-semibold py-2 rounded-md transition duration-300 shadow-md`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
