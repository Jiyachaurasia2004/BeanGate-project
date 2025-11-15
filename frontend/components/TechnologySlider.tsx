"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const technologies = [
  {
    name: "React",
    icon: "⚛️",
    description: "A JavaScript library for building user interfaces",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "React Native",
    icon: "📱",
    description: "Build native mobile apps using React",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "The React framework for production",
    color: "from-gray-700 to-black",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description: "JavaScript with syntax for types",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "JavaScript runtime built on Chrome's V8",
    color: "from-green-400 to-green-600",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "The database for modern applications",
    color: "from-green-500 to-green-700",
  },
  {
    name: "AWS",
    icon: "☁️",
    description: "Amazon Web Services cloud platform",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization platform",
    color: "from-blue-400 to-cyan-500",
  },
];

export default function TechnologySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      mode: "free-snap",
      slides: {
        perView: "auto",
        spacing: 20,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 25 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 4, spacing: 30 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="w-full b py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Our <span className="text-orange-500">Technology</span> Stack
          </h2>
          <p className="text-lg  max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build exceptional digital
            experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="keen-slider__slide min-w-[280px] sm:min-w-0"
              >
                <div className="group relative border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 h-full ">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>

                    {/* Technology Name */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <p className=" text-sm leading-relaxed mb-4">
                      {tech.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 opacity-10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={(e: any) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </button>
              <button
                onClick={(e: any) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(technologies.length / 4) }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx * 4);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 4) === idx
                      ? "bg-orange-500 scale-125"
                      : "bg-orange-200 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              )
            )}
          </div>
        )}

      </div>
    </div>
  );
}
