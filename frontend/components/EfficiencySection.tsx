"use client"

import { Card, CardBody } from "@heroui/card"
import Image from "next/image"

// Import images properly
import card1 from "@/public/home/build1.jpg"
import card2 from "@/public/home/generate.jpg"
import card3 from "@/public/home/SurfCloud.jpg"

const services = [
  {
    id: 1,
    title: "Build Experience",
    description: "Design engaging user interfaces and boost your bottom line.",
    image: card1,
    gradient: "from-purple-900/80 to-orange-600/80",
  },
  {
    id: 2,
    title: "Generate Leads",
    description: "Transform your business with data-driven strategies and innovative solutions.",
    image: card2,
    gradient: "from-blue-900/80 to-indigo-600/80",
  },
  {
    id: 3,
    title: "Surf Clouds",
    description: "Leverage cloud technologies to scale your business efficiently and securely.",
    image: card3,
    gradient: "from-cyan-900/80 to-blue-500/80",
  },
]

export function EfficiencySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Efficiency Redefined</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Unlock Opportunities and Revolutionize Productivity with No.1 IT Company in India
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden h-64 sm:h-72 lg:h-80 cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-500"
              isPressable
            >
              <CardBody className="p-0 relative">
                {/* Background Image using Next.js Image component */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0  transition-opacity duration-500`}
                />

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                  {/* Text Content with Slide Up Animation */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {service.description}
                    </p>
                  </div>

                  {/* Always Visible Title (for non-hover state) */}
                  <div className="absolute bottom-6 left-6 sm:left-8 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
