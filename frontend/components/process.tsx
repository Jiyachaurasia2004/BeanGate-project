"use client"

import type React from "react"

import { Search, Lightbulb, PenTool, Palette, Code, Bug, Rocket, BarChart3, Settings, Users } from "lucide-react"
import { useState } from "react"

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Research",
    description: "Gather industry insights and user requirements",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Ideate",
    description: "Brainstorm creative solutions for IT challenges",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "Wireframing",
    description: "Create initial visual representations",
    icon: PenTool,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Craft intuitive and appealing interfaces",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "Development",
    description: "Implement designs into functional software",
    icon: Code,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    title: "Testing",
    description: "Conduct thorough quality assurance",
    icon: Bug,
    color: "from-red-500 to-red-600",
  },
  {
    id: 7,
    title: "Deployment",
    description: "Roll out the final product to users",
    icon: Rocket,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 8,
    title: "Monitoring",
    description: "Monitor performance and feedback",
    icon: BarChart3,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 9,
    title: "Maintenance",
    description: "Provide ongoing support and updates",
    icon: Settings,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 10,
    title: "Collaboration",
    description: "Foster effective teamwork",
    icon: Users,
    color: "from-violet-500 to-purple-600",
  },
]

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className=" py-16 min-h-screen w-full ">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Our <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-lg  max-w-2xl mx-auto">
             A streamlined approach to deliver exceptional digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5  gap-4">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Step Card */}
              <div className=" rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold  text-center mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description - Hidden by default, shown on hover */}
                {/* <p className="text-xs text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-2 bottom-2">
                  {step.description}
                </p> */}
              </div>

              {/* Connection Line (for larger screens) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed View for Hovered Step */}
        {hoveredStep && (
          <div className="mt-8 e rounded-xl p-6 shadow-lg border border-orange-200 transition-all duration-300">
            {(() => {
              const step = processSteps.find((s) => s.id === hoveredStep)
              if (!step) return null
              return (
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                  >
                    <step.icon className="w-8 h-8 " />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold  mb-2">{step.title}</h3>
                    <p className="">{step.description}</p>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Compact Stats */}
        <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-orange-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">10</div>
            <div className="text-xs ">Steps</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">100+</div>
            <div className="text-xs ">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">5+</div>
            <div className="text-xs ">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-xs ">Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
