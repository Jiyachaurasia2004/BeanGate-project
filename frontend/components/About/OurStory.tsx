"use client"

import { Calendar, Users, Award, Target } from "lucide-react"
import aiims from "@/public/about/aiims.jpg"
import Image from "next/image"
const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to create exceptional digital experiences",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew to 10+ talented developers and designers",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Won 'Best Digital Agency' award in our region",
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Serving clients across 15+ countries worldwide",
    icon: Target,
    color: "from-orange-500 to-orange-600",
  },
]

export default function OurStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-500">Story</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a small startup to a leading digital agency, our journey has been driven by passion, innovation, and an
            unwavering commitment to excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Building the Future, One Project at a Time</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2019 by a group of passionate technologists, Beangate began as a small team with big dreams.
                We saw the potential of emerging technologies to transform businesses and decided to make that our
                mission.
              </p>
              <p>
                What started as a local web development service has evolved into a comprehensive digital agency serving
                clients globally. Our commitment to quality, innovation, and client satisfaction has been the
                cornerstone of our growth.
              </p>
              <p>
                Today, we're proud to be at the forefront of digital transformation, helping businesses of all sizes
                leverage technology to achieve their goals and exceed their expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* <img
              src={aiims}
              alt="Our Journey"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            /> */}
            <Image src={aiims} alt="Our Journey" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-3xl font-bold">AIIMS Bhopal </div>
              <div className="text-sm opacity-90">APP LAUNCHING DAY</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-orange-200 to-orange-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${milestone.color} text-white`}>
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-orange-500">{milestone.year}</div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-2/12 flex justify-center">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-white shadow-lg`}
                  ></div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
