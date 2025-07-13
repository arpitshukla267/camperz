"use client";

import React, { useState } from "react";
import { Lock, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Logging in with:", { email, password });
    setLoading(false);

    // Redirect to home or dashboard page
    router.push("/");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked! Implement OAuth logic here.");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked! Implement OAuth logic here.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-green-200 p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-100 text-green-600 p-3 rounded-full mb-3">
            <Lock size={28} />
          </div>
          <h2 className="text-3xl font-extrabold text-green-600 text-center">Welcome Back</h2>
          <p className="text-gray-600 mt-2 text-center text-sm">
            Log in to your account or use a social account
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <FcGoogle size={22} />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

          <button
            onClick={handleFacebookLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <Facebook size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Continue with Facebook</span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or sign in with email</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-md transition ${
              loading ? "bg-green-300" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-green-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
