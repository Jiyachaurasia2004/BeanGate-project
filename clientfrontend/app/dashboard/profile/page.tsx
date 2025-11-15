"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, MapPin, Save } from "lucide-react"
import axios from "axios"
import { useRouter } from "next/navigation"; 

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
    const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Product designer and developer",
    profileImage: "",
  })
const [imageFile, setImageFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }
  const handleSave = async() => {
    if (!userId) return
    try {
      const form = new FormData()
      for (const key in formData) {
        form.append(key, formData[key as keyof typeof formData])
      }
      if (imageFile) form.append("profileImage", imageFile)

      const res = await axios.put(`http://localhost:3000/api/profile/${userId}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })

      console.log("Profile updated:", res.data)
      alert("Profile updated successfully")
      setIsEditing(false)

      if (res.data.user.profileImage) {
        setFormData((prev) => ({ ...prev, profileImage: res.data.user.profileImage }))
      }
    } catch (err: any) {
      console.error("Update profile failed:", err.response || err.message)
      alert("Failed to update profile")
    }
   
    // Here you would typically send the data to your backend
    

  }
   const handlesignout = async()=>{
    try {
        const result = await axios.get("http://localhost:3000/api/auth/logout",{withCredentials:true})
          console.log(result.data.message);
          router.push("/app/login");
    } catch (error) {
        console.log(error);
        
    }
  }
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account information and preferences</p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your profile details</CardDescription>
          </div>
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            ) : (
              "Edit Profile"
            )}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
             {imageFile ? (
                <img src={URL.createObjectURL(imageFile)} alt="Avatar" className="h-20 w-20 object-cover rounded-full" />
              ) : formData.profileImage ? (
                <img src={`http://localhost:3000${formData.profileImage}`} alt="Avatar" className="h-20 w-20 object-cover rounded-full" />
              ) : (
                <User className="h-10 w-10 text-primary" />
              )}
            </div>
            {isEditing && (
              <Button variant="outline" size="sm" onClick={handleImageChange}>
                Change Avatar
              </Button>
              
            )}
             <input id="avatar" type="file" accept="image/*" onChange={handleImageChange} hidden />
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">First Name</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Last Name</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </label>
            <Input name="phone" value={formData.phone} onChange={handleChange} disabled={!isEditing} className="mt-2" />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location
            </label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground disabled:opacity-50"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Security */}
      <Card>
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Password</p>
              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
          <div className="border-t pt-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Button variant="outline">Enable 2FA</Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" onClick={handlesignout}>Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
