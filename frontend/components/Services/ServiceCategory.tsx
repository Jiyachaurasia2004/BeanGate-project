"use client"

import type React from "react"

import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  ShoppingCart,
  Shield,
  BarChart3,
  Headphones,
  Code,
  Database,
  Zap,
  Settings,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  technologies: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
//   price: string
}

interface ServiceCategory {
  id: string
  title: string
  description: string
  services: Service[]
  color: string
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "development",
    title: "Development Services",
    description: "Custom software solutions built with modern technologies",
    color: "from-blue-500 to-blue-600",
    services: [
      {
        id: "web-dev",
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with cutting-edge technologies",
        features: [
          "Responsive Design",
          "SEO Optimization",
          "Performance Optimization",
          "Cross-browser Compatibility",
          "Content Management Systems",
        ],
        technologies: ["React", "Next.js", "Node.js", "TypeScript"],
        icon: Globe,
        color: "from-blue-500 to-blue-600",
        // price: "Starting from $2,500",
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android",
        features: [
          "Native iOS & Android",
          "Cross-platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        icon: Smartphone,
        color: "from-green-500 to-green-600",
        // price: "Starting from $5,000",
      },
      {
        id: "custom-software",
        title: "Custom Software Development",
        description: "Tailored software solutions to meet your specific business requirements",
        features: [
          "Custom Business Logic",
          "Database Design",
          "API Development",
          "Third-party Integrations",
          "Scalable Architecture",
        ],
        technologies: ["Python", "Java", "C#", ".NET"],
        icon: Code,
        color: "from-purple-500 to-purple-600",
        // price: "Starting from $10,000",
      },
    ],
  },
  {
    id: "design",
    title: "Design Services",
    description: "Creative design solutions that engage and convert users",
    color: "from-pink-500 to-rose-500",
    services: [
      {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive and engaging digital experiences",
        features: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "Visual Design",
          "Usability Testing",
          "Design Systems",
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        // price: "Starting from $1,500",
      },
      {
        id: "branding",
        title: "Brand Identity Design",
        description: "Complete brand identity packages including logos, guidelines, and marketing materials",
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy", "Visual Identity"],
        technologies: ["Adobe Creative Suite", "Figma", "Canva"],
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        // price: "Starting from $2,000",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management",
    color: "from-cyan-500 to-blue-500",
    services: [
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        description: "Seamless migration of your applications and data to the cloud",
        features: [
          "Migration Strategy",
          "Data Transfer",
          "Application Modernization",
          "Security Implementation",
          "Performance Optimization",
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
        icon: Cloud,
        color: "from-cyan-500 to-blue-500",
        // price: "Starting from $3,000",
      },
      {
        id: "devops",
        title: "DevOps Services",
        description: "Streamline your development and deployment processes with modern DevOps practices",
        features: [
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "Monitoring & Logging",
          "Automated Testing",
          "Container Orchestration",
        ],
        technologies: ["Jenkins", "Kubernetes", "Terraform", "Ansible"],
        icon: Settings,
        color: "from-indigo-500 to-purple-500",
        // price: "Starting from $2,500",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Complete online store solutions to boost your sales",
    color: "from-green-500 to-emerald-500",
    services: [
      {
        id: "ecommerce-dev",
        title: "E-commerce Development",
        description: "Full-featured online stores with payment processing and inventory management",
        features: [
          "Shopping Cart Functionality",
          "Payment Gateway Integration",
          "Inventory Management",
          "Order Processing",
          "Customer Management",
        ],
        technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-500",
        // price: "Starting from $4,000",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Transform your data into actionable business insights",
    color: "from-purple-500 to-indigo-500",
    services: [
      {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Advanced analytics solutions to help you make data-driven decisions",
        features: [
          "Data Visualization",
          "Business Intelligence",
          "Predictive Analytics",
          "Custom Dashboards",
          "Reporting Automation",
        ],
        technologies: ["Power BI", "Tableau", "Python", "R"],
        icon: BarChart3,
        color: "from-purple-500 to-indigo-500",
        // price: "Starting from $3,500",
      },
      {
        id: "database",
        title: "Database Management",
        description: "Efficient database design, optimization, and management services",
        features: [
          "Database Design",
          "Performance Optimization",
          "Data Migration",
          "Backup & Recovery",
          "Security Implementation",
        ],
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        icon: Database,
        color: "from-gray-600 to-gray-700",
        // price: "Starting from $2,000",
      },
    ],
  },
  {
    id: "security",
    title: "Security Services",
    description: "Comprehensive cybersecurity solutions to protect your business",
    color: "from-red-500 to-red-600",
    services: [
      {
        id: "cybersecurity",
        title: "Cybersecurity Solutions",
        description: "Protect your business from cyber threats with comprehensive security measures",
        features: [
          "Security Audits",
          "Vulnerability Assessment",
          "Penetration Testing",
          "Security Training",
          "Incident Response",
        ],
        technologies: ["Firewall Management", "Encryption", "Multi-factor Authentication"],
        icon: Shield,
        color: "from-red-500 to-red-600",
        // price: "Starting from $2,500",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "Ongoing support to keep your systems running smoothly",
    color: "from-orange-500 to-orange-600",
    services: [
      {
        id: "maintenance",
        title: "Website & App Maintenance",
        description: "Regular updates, monitoring, and support to keep your digital assets performing optimally",
        features: ["Regular Updates", "Performance Monitoring", "Bug Fixes", "Security Patches", "Backup Management"],
        technologies: ["Monitoring Tools", "Update Management", "Backup Solutions"],
        icon: Headphones,
        color: "from-orange-500 to-orange-600",
        // price: "Starting from $500/month",
      },
    ],
  },
]

export default function ServiceCategories() {
  const [activeCategory, setActiveCategory] = useState("development")
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const currentCategory = serviceCategories.find((cat) => cat.id === activeCategory)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-500">Service</span> Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of IT services designed to meet all your digital transformation needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        {currentCategory && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentCategory.title}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Service Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    {/* <div className="text-orange-600 font-bold text-lg">{service.price}</div> */}
                  </div>

                  {/* Service Features */}
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <button className="mt-4 text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors duration-300">
                      View Details →
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}
                    >
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                      {/* <p className="text-orange-600 font-bold text-xl">{selectedService.price}</p> */}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">{selectedService.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Features Included:</h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
