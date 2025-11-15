"use client"

import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              💼 Complete IT Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Our <span className="text-orange-500">Services</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From web development to cloud solutions, we provide comprehensive IT services that drive digital
              transformation and business growth for companies of all sizes.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "End-to-end digital solutions",
                "Expert team with 5+ years experience",
                "24/7 support and maintenance",
                "Scalable and future-ready technology",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Service Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Web Development</h3>
                  <p className="text-sm text-gray-600">Modern, responsive websites</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Mobile Apps</h3>
                  <p className="text-sm text-gray-600">iOS & Android solutions</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">☁️</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Cloud Services</h3>
                  <p className="text-sm text-gray-600">Scalable cloud solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">Beautiful user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
