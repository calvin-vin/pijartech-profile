"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Lewi Mawa",
    role: "Komisaris Utama",
    image: "/images/teams/lewi.png",
  },
  {
    name: "Gabriella Frederica",
    role: "Komisaris",
    image: "/images/teams/gabi.png",
  },
  {
    name: "Ditra Liandaputra",
    role: "Komisaris",
    image: "/images/teams/ditra.png",
  },
  {
    name: "Adisuputra",
    role: "Direktur Operasional",
    image: "/images/teams/adi.png",
  },
  {
    name: "Christopher Frederickson",
    role: "Direktur Utama",
    image: "/images/teams/erik.png",
  },
  {
    name: "Evandry Gustianto",
    role: "Direktur Administrasi",
    image: "/images/teams/evan.png",
  },
  {
    name: "Veris Juniardi",
    role: "Tech Lead",
    image: "/images/teams/veris.png",
  },
  {
    name: "Nurita Evitarina",
    role: "Senior Software Engineer",
    image: "/images/teams/nurita.png",
  },
  {
    name: "Muhamad Zakky",
    role: "Senior Software Engineer",
    image: "/images/teams/zakky.png",
  },
  {
    name: "Rama Saktriawindarta",
    role: "Senior Software Engineer",
    image: "/images/teams/rama.png",
  },
  {
    name: "Muhammad Viky",
    role: "Senior Software Engineer",
    image: "/images/teams/viki.png",
  },
  {
    name: "Asri Yudha",
    role: "Software Engineer",
    image: "/images/teams/yudha.png",
  },
  {
    name: "Calvin",
    role: "Software Engineer",
    image: "/images/teams/calvin.png",
  },
  {
    name: "M. Nanda Utama",
    role: "Software Engineer",
    image: "/images/teams/nanda.png",
  },
  {
    name: "Medry Arnandra Gustianto",
    role: "UI/UX Designer",
    image: "/images/teams/medri.png",
  },
  {
    name: "Dwi Nugraha Ramadhan",
    role: "UI/UX Designer",
    image: "/images/teams/ramadhan.png",
  },
];

export default function TeamCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 3;
  const totalSlides = Math.ceil(teamMembers.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const visibleMembers = teamMembers.slice(
    currentSlide * slidesPerView,
    (currentSlide + 1) * slidesPerView
  );

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-[#414141]" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-[#414141]" />
        </Button>
      </div>

      {/* Team Members Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(0%)` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {visibleMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="font-bold text-[#414141]">{member.name}</h3>
                <p className="text-sm text-[#9f9f9f]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={`dot-${i}`}
            className={`w-2 h-2 rounded-full ${
              i === currentSlide ? "bg-[#414141]" : "bg-[#c4c4c4]"
            }`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
