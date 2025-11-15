import Image from "next/image"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { Button } from "@heroui/button"
import { Chip } from "@heroui/chip"
import { Divider } from "@heroui/divider"

// Import images properly
import web from "@/public/home/web.jpg"
import app from "@/public/home/Application.jpg"
import dev from "@/public/home/Dev.jpg"// Import images properly
import digital from "@/public/home/Digital.jpg"// Import images properly
import Webhost from "@/public/home/Web host.jpg"// Import images properly
import android from "@/public/home/android.jpg"// Import images properly
import soft from "@/public/home/soft.jpg"// Import images properly
import whybeangate  from "@/public/home/whybeangate.jpg"

export default function ExpertiseServices() {
  type ChipColor = "primary" | "secondary" | "success" | "warning" | "danger" | "default";

  const expertiseServices: {
    title: string;
    description: string;
    image: any;
    bgColor: string;
    chipColor: ChipColor;
  }[] = [
    {
      title: "Web Development",
      description: "Crafting web experiences that empower and inspire.",
      image: web,
      bgColor: "from-purple-900/80 to-black/80",
      chipColor: "secondary"
    },
    {
      title: "Software Development",
      description: "Building robust software solutions for your business needs.",
      image:app ,
      bgColor: "from-blue-900/80 to-black/80",
      chipColor: "primary"
    },
    {
      title: "Dev Ops",
      description: "Streamlining development and operations for efficiency.",
      image: dev,
      bgColor: "from-purple-900/80 to-black/80",
      chipColor: "secondary"
    },
    {
      title: "Wordpress",
      description: "Creating powerful WordPress solutions and websites.",
      image: digital,
      bgColor: "from-gray-900/80 to-black/80",
      chipColor: "default"
    },
    {
      title: "Android Development",
      description: "Developing innovative mobile applications for Android.",
      image: Webhost,
      bgColor: "from-pink-900/80 to-purple-900/80",
      chipColor: "warning"
    },
    {
      title: "Application Development",
      description: "Custom application development tailored to your needs.",
      image:android ,
      bgColor: "from-gray-900/80 to-black/80",
      chipColor: "default"
    },
    {
      title: "Digital Marketing",
      description: "Boosting your online presence with strategic marketing.",
      image:soft ,
      bgColor: "from-orange-900/80 to-black/80",
      chipColor: "success"
    },
    {
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions.",
      image: web,
      bgColor: "from-blue-900/80 to-black/80",
      chipColor: "primary"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
         {/* Expertise Section */}
      <section className="py-16 px-4 md:py-24 bg-content1">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Chip 
              color="success" 
              variant="flat" 
              size="lg" 
              className="mb-4"
            >
              Our Services
            </Chip>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Expertise
            </h2>
            <p className="text-lg md:text-xl text-foreground-600 max-w-4xl mx-auto">
              Best IT Company in India Accelerating Business Success Through Customized IT Solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseServices.map((service, index) => (
              <Card
                key={index}
                isHoverable
                isPressable
                className="h-64 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-transparent border-none"
              >
                <CardBody className="p-0 relative overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gray-700 opacity-45 group-hover:opacity-0  transition-opacity duration-300 hover:opacity-90`}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-end">
                      <Chip 
                        color={service.chipColor} 
                        variant="shadow" 
                        size="sm"
                        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        Featured
                      </Chip>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold transform transition-transform duration-300 hover:translate-y-[-4px]">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-0 transform translate-y-4 transition-all duration-300 hover:opacity-100 hover:translate-y-0">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
            //   color="primary" 
              variant="shadow" 
              size="lg"
              className="px-8 bg-[#ff6200] text-white hover:bg-[#e55a00] transition-all duration-300"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
      {/* Why Beangate Section */}
      <section className=" px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Chip 
              color="danger" 
              variant="flat" 
              size="lg" 
              className="mb-4"
            >
              Why Choose Us
            </Chip>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Why Beangate
            </h1>
            <Divider className="w-24 mx-auto mb-6 bg-danger" />
            <p className="text-lg md:text-xl text-foreground-600 max-w-4xl mx-auto">
              Discover Why We Are the Pinnacle Choice for Businesses in India
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Card */}
            <div className="order-2 lg:order-1">
              <Card 
                isHoverable 
                isPressable 
                className="w-full h-[400px] transition-all duration-300 hover:scale-105"
              >
                <CardBody className="p-0">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={whybeangate}
                      alt="Digital innovation concept with glowing network"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Chip className="bg-[#ff6200] text-white" variant="shadow" size="sm">
                        Digital Innovation
                      </Chip>
                      <p className="text-white text-sm mt-2 opacity-90">
                        Experience the future of technology with cutting-edge solutions
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <Card className="bg-content1/50 backdrop-blur-sm">
                <CardBody className="p-6">
                  <p className="text-foreground-700 text-lg leading-relaxed text-justify mb-4">
                    In the vast landscape of technological advancements, where innovation becomes the driving force behind
                    success, Beangates, your most trusted IT company in India, stands tall as a beacon of creativity and
                    excellence. We are nestled in the heart of India's digital revolution—igniting the sparks of ingenuity
                    to transform your business into a dynamic powerhouse.
                  </p>
                  <p className="text-foreground-700 text-lg leading-relaxed text-justify">
                    At the heart of our company lies a team of visionary minds, fueled by a relentless passion for all
                    things IT. Our collective expertise transcends boundaries, encompassing a multitude of domains such as
                    software development, cloud computing, cybersecurity, and more. From the moment you step into our
                    digital realm, you will witness firsthand the fusion of imagination and technical prowess that sets us
                    apart.
                  </p>
                </CardBody>
              </Card>
              
              <div className="flex gap-3 flex-wrap">
                <Button  className="bg-[#ff6200] text-white"  variant="shadow" size="lg">
                  Learn More
                </Button>
                <Button color="default" variant="bordered" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}