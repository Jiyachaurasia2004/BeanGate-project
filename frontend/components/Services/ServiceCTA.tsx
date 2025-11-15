"use client"

import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"

export default function ServiceCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Let's discuss your project and find the perfect solution for your business needs. Our team is ready to help
            you achieve your digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Options */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-opacity-20 transition-all duration-300">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-orange-100 mb-4">Speak directly with our experts</p>
            <a
              href="tel:+1234567890"
              className="text-white font-semibold hover:text-orange-200 transition-colors duration-300"
            >
              +1 (234) 567-8900
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-opacity-20 transition-all duration-300">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-orange-100 mb-4">Send us your project details</p>
            <a
              href="mailto:hello@beangate.com"
              className="text-white font-semibold hover:text-orange-200 transition-colors duration-300"
            >
              hello@beangate.com
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-opacity-20 transition-all duration-300">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-orange-100 mb-4">Get instant support online</p>
            <button className="text-white font-semibold hover:text-orange-200 transition-colors duration-300">
              Start Chat
            </button>
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
            View Our Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-orange-400">
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-orange-100 text-sm">Projects Completed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-orange-100 text-sm">Happy Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-orange-100 text-sm">Years Experience</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-orange-100 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
