"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye } from "lucide-react"

export default function AdminLoginForm() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === "admin123") {
      // Just redirect to admin - no cookies or complex auth
      router.push("/admin")
    } else {
      setError("Incorrect password")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center space-y-2">
        <div className="w-16 h-16 bg-[#C41E3A]/10 rounded-full flex items-center justify-center mx-auto">
          <Lock className="h-8 w-8 text-[#C41E3A]" />
        </div>
        <CardTitle className="text-2xl font-black">Admin Access</CardTitle>
        <p className="text-gray-600">Sign in to manage your portfolio content</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
          )}

          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>
              Password: <strong>admin123</strong>
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Enter Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 h-12"
                placeholder="admin123"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#C41E3A] hover:bg-[#A01729] text-white h-12">
            <Lock className="mr-2 h-4 w-4" />
            Sign In to Admin
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
