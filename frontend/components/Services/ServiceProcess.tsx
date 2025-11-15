"use client"

import { MessageSquare, FileText, Code, TestTube, Rocket, Headphones } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We discuss your requirements and goals",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Planning",
    description: "Detailed project planning and documentation",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building your solution with best practices",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous testing to ensure quality",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launching your project successfully",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and support",
    color: "from-teal-500 to-teal-600",
  },
]

export default function ServiceProcess() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds your
            expectations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center transform hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform -translate-y-1/2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
