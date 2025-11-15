"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
export default function NewPassword() {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
 const [email,setEmail] = useState("")
  const router = useRouter();
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
         if(newPassword !== confirmPassword) {
            alert("Passwords do not match!");
        } 
    try {
        const response = await axios.post('http://localhost:3000/api/auth/reset-password', {
             email,
             newPassword,
            confirmPassword
        
        });

        const data = await response.data;
        console.log(data);
        alert("successfully changed password");
        setEmail("")
        setPassword("")
        setconfirmPassword("")
         router.push("/login");
    } catch (error:any) {
         if (
      error.response &&
      error.response.data &&
      error.response.data.extraDetails
    ) {
      alert(error.response.data.extraDetails); 
    }else if (
      error.response &&
      error.response.status === 400 &&
      error.response.data &&
      error.response.data.message
    ) {
      alert(error.response.data.message); 
    }  else {
      alert("Registration failed. Please try again.");
    }
        
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">New Password</h2>
        <form onSubmit={handleSubmit}>
         <label className="block text-sm font-medium text-gray-600 mb-1">Enter Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block text-sm font-medium text-gray-600 mb-1">Enter New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="••••••"
            value={newPassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="••••••"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-400 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
