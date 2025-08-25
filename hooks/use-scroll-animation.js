"use client";

import { useEffect } from 'react';

/**
 * Hook untuk menambahkan animasi pada elemen saat di-scroll
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Fungsi untuk menangani animasi saat scroll
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const childElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
      
      // Animasi untuk elemen dengan class animate-on-scroll
      elements.forEach((element) => {
        // Posisi elemen relatif terhadap viewport
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Jarak elemen dari bawah viewport untuk trigger animasi
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-active');
          
          // Aktifkan juga animasi pada elemen anak langsung
          const childAnimElements = element.querySelectorAll('.animate-slide-up, .animate-fade-in');
          childAnimElements.forEach(child => {
            child.classList.add('animate-active');
          });
        }
      });
      
      // Animasi untuk elemen anak dengan class animate-slide-up atau animate-fade-in
      // yang tidak berada dalam elemen animate-on-scroll
      childElements.forEach((element) => {
        // Periksa apakah elemen ini bukan anak dari animate-on-scroll
        if (!element.closest('.animate-on-scroll')) {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-active');
          }
        }
      });
    };
    
    // Jalankan sekali saat komponen dimount untuk elemen yang sudah terlihat
    // Gunakan timeout yang lebih lama untuk memastikan semua elemen sudah dirender
    setTimeout(handleScrollAnimation, 300);
    
    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Jalankan lagi setelah 1 detik untuk memastikan semua elemen terdeteksi
    setTimeout(handleScrollAnimation, 1000);
    
    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
}