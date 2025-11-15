"use client"

import { Heart, Zap, Shield, Users, Lightbulb, Target } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead of the curve with cutting-edge technologies",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Never compromising on excellence and attention to detail",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Thinking outside the box to solve complex challenges",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Target,
    title: "Results",
    description: "Focused on delivering measurable business outcomes",
    color: "from-indigo-500 to-blue-500",
  },
]

export default function OurValues() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-500">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and shape the way we work with our clients, partners, and each
            other every single day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                {/* Decorative Element */}
                <div
                  className={`w-12 h-1 bg-gradient-to-r ${value.color} mx-auto mt-6 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
