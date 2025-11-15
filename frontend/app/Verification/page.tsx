"use client";
import axios from "axios";
import { set } from "mongoose";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation"; 
export default function Verification() {
  const [code, setCode] = useState(["", "", "", "","",""]);
     const router = useRouter();
  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

 const handleVerify = async(e: React.FormEvent) => {
  e.preventDefault();
  const email = localStorage.getItem("email") || ""; // email fetch from localStorage
  
  try {
    const response = await axios.post("http://localhost:3000/api/auth/verify-otp", {
      otp: code.join(""),
      email: email
    });

    alert("OTP Verified Successfully! You can now reset your password.");
    console.log(response.data);
    setCode(["", "", "", "", "", ""]);
    router.push("/NewPassword");
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      alert(`Error: ${error.response.data.message || "Invalid OTP"}`);
    } else {
      alert("Network error. Try again.");
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
        <h2 className="text-2xl font-semibold mb-2">Verification</h2>
        <p className="text-gray-500 mb-6">Enter Verification Code</p>
        <form onSubmit={handleVerify}>
          <div className="flex justify-between mb-6">
            {code.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-400 transition-all"
          >
            Verify
          </button>
        </form>
      <p className="text-sm text-gray-500 mt-4">
  Didn’t receive a code?{" "}
  <Link href="/ForgotPassword" className="text-orange-500 font-medium">
    Resend
  </Link>
</p>
      </div>
    </div>
  );
}
