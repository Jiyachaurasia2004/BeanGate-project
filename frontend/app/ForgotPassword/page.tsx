"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
   const router = useRouter();
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/api/auth/forget-password', {
            email: email
        }
        );
        setEmail("");
        const data = response.data;
        alert(`Verification code sent to ${email}`);
        console.log(data);
         router.push("/Verification");
    } catch (error) {
        console.log(error);
        
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-600 mb-1">Enter Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300  rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-400 transition-all"
          >
            Send
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">G</button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">A</button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"></button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/client" className="text-orange-500 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
