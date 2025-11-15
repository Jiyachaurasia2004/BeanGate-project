"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

// Import images properly for Next.js
import raj from "@/public/home/rajkumar.jpg"
import santosh from "@/public/home/santosh.jpg"
import chnadra from "@/public/home/chandraprakash.jpg"
import verma from "@/public/home/umashankar.jpg"

interface Testimonial {
  id: number
  name: string
  position: string
  content: string
  rating: number
  image: any // Use any for imported images
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Santosh Chaturvedi",
    position: "President of SSWA",
    content:
      "Beangate delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth and enjoyable.",
    rating: 5,
    image: santosh,
  },
  {
    id: 2,
    name: "Dr. Rajkumar Malviya",
    position: "CEO & Founder of Arsdf",
    content: "Working with Beangate for our software development needs was a game-changer for our business. Their team of experts delivered a customized and robust software solution that perfectly catered to our requirements. Their professionalism, attention to detail, and prompt communication made the entire development process seamless.",
    rating: 5,
    image: raj,
  },
  {
    id: 3,
    name: "Chandra Prakash Sharma",
    position: "Owner of EASS Security Pvt. Ltd.",
    content: "We were in need of a reliable and user-friendly Android app, and Beangate delivered beyond our expectations. From conceptualization to implementation, their team was proactive and highly skilled. They incorporated our ideas seamlessly into the app and provided valuable insights to enhance the user experience. Thanks Beangate.",
    rating: 5,
    image: chnadra,
  },
  {
    id: 4, // Fixed duplicate ID
    name: "Umashankar Verma",
    position: "Owner & Director Of Kesar Construction",
    content: "Beangate took our digital marketing efforts to the next level. Their strategic approach and in-depth understanding of our target audience helped us achieve remarkable results. Their team implemented effective SEO techniques, created engaging content, and managed our social media platforms with precision. We highly recommend the company.",
    rating: 5,
    image: verma,
  },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className=" py-20 px-4 min-h-screen w-full h-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="text-lg  max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Beangate.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Testimonial Display */}
        <div
          className="relative  rounded-3xl shadow-2xl p-8 md:p-12 mb-12 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-50 transform -translate-x-12 translate-y-12"></div>

          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-orange-200">
            <Quote className="w-12 h-12" />
          </div>

          <div className="relative z-10">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative w-16 h-16 rounded-full border-4 border-orange-200 overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                <p className="text-orange-600 font-medium">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500 scale-125" : "bg-orange-200 hover:bg-orange-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      
      </div>
    </section>
  )
}