"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ScrollAnimationProvider({ children }) {
  // Menggunakan hook animasi scroll
  useScrollAnimation();
  
  return <>{children}</>;
}