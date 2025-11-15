"use client"

import { ArrowDown, Play } from "lucide-react"
import { useState } from "react"
import benagteimg from "@/public/about/about.jpg"
import Image from "next/image"
export default function AboutHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              🚀 Innovating Since 2019
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              We Are <span className="text-orange-500">Beangate</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate team of developers, designers, and innovators dedicated to transforming ideas into
              exceptional digital experiences that drive business growth and user engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
              >
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
             
              <Image
                src={benagteimg}
                alt="Beangate Team"
                className="w-full h-80 object-cover rounded-2xl"
              
                />

              {/* Play Button Overlay */}
              {!isVideoPlaying && (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-2xl hover:bg-opacity-40 transition-all duration-300"
                >
                  <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-orange-500" />
                  </div>
                </button>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg transform -rotate-12">
              <div className="text-2xl font-bold">2019</div>
              <div className="text-sm">Founded</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-2xl shadow-lg transform rotate-12">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-orange-500" />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl p-4 max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-300"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-600">Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
