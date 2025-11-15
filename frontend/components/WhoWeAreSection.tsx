"use client"

import { Button } from "@heroui/button"

export function WhoWeAreSection() {
  return (
    <section className="w-screen overflow-hidden py-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-8">Who We Are</h2>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center">
          <p className="text-base sm:text-lg lg:text-xl  leading-relaxed max-w-5xl mx-auto">
            Driven by a passion for technology and a relentless pursuit of excellence, Beangates is a leading IT company
            in India committed to revolutionizing business landscapes through innovative solutions. We harness
            cutting-edge technologies to help you thrive in the ever-evolving business environment enabling you to make
            a difference by manifolds.
          </p>

          <p className="text-base sm:text-lg lg:text-xl  leading-relaxed max-w-5xl mx-auto">
            Helmed by a team of seasoned professionals who specialize in a wide range of IT solutions, Beangates prides
            itself on being a trusted partner for resolving unique challenges of businesses and offering them tailored
            end-to-end solutions that drive growth and enhance overall productivity.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-[#ff6200] hover:bg-[#e55a00] text-white font-semibold px-8 py-3 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              radius="full"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
