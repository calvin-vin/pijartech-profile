"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function LayananPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-in');
          entry.target.classList.add('fade-in-50');
          entry.target.classList.add('slide-in-from-bottom-10');
          entry.target.classList.add('duration-700');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  // Daftar semua layanan dengan detail lengkap
  const layanan = [
    {
      id: 1,
      title: "Analisis Kebutuhan dan Perencanaan",
      description: "Menyediakan analisis mendalam terhadap kebutuhan bisnis klien dan merencanakan strategi TI yang sesuai. Ini melibatkan penilaian infrastruktur, identifikasi kesenjangan, dan menyusun rencana implementasi teknologi yang efektif.",
      icon: "/icons/analysis.svg"
    },
    {
      id: 2,
      title: "Arsitektur dan Desain Sistem",
      description: "Menyediakan analisis mendalam terhadap kebutuhan bisnis klien dan merencanakan strategi TI yang sesuai. Ini melibatkan penilaian infrastruktur, identifikasi kesenjangan, dan menyusun rencana implementasi teknologi yang efektif.",
      icon: "/icons/architecture.svg"
    },
    {
      id: 3,
      title: "Implementasi dan Integrasi Sistem",
      description: "Menyediakan layanan keamanan jaringan yang meliputi audit keamanan, penilaian risiko, dan implementasi solusi keamanan yang sesuai. Ini mencakup pemantauan keamanan, identifikasi kerentanan, pengujian penetrasi, dan pengembangan kebijakan keamanan.",
      icon: "/icons/implementation.svg"
    },
    {
      id: 4,
      title: "Manajemen Proyek TI",
      description: "Menyediakan manajemen proyek yang efisien untuk implementasi teknologi informasi. Memastikan proyek berjalan sesuai jadwal, anggaran, dan memenuhi tujuan bisnis. Melibatkan perencanaan, pengawasan, pengendalian, dan pemecahan masalah proyek.",
      icon: "/icons/project.svg"
    },
    {
      id: 5,
      title: "Konsultasi dan Dukungan Teknis",
      description: "Memberikan konsultasi dan dukungan teknis terkait dengan masalah TI, keputusan teknologi, pemecahan masalah, dan pertanyaan umum seputar penggunaan sistem dan aplikasi. Menyediakan bantuan teknis yang diperlukan untuk mengoptimalkan kinerja TI.",
      icon: "/icons/support.svg"
    },
    {
      id: 6,
      title: "Transformasi Digital dan Inovasi",
      description: "Membantu perusahaan dalam merencanakan dan menerapkan transformasi digital, termasuk penggunaan teknologi terbaru seperti kecerdasan buatan, Internet of Things (IoT), analisis data, dan cloud computing. Membantu perusahaan memanfaatkan inovasi teknologi untuk mencapai keunggulan kompetitif.",
      icon: "/icons/innovation.svg"
    },
    {
      id: 7,
      title: "Audit dan Konsultasi Keamanan Data",
      description: "Menyediakan audit keamanan data yang komprehensif untuk mengidentifikasi celah keamanan dan memberikan rekomendasi peningkatan. Melakukan evaluasi kepatuhan terhadap standar keamanan seperti GDPR, HIPAA, atau PCI DSS. Memberikan konsultasi tentang praktik terbaik untuk menjaga keamanan data.",
      icon: "/icons/security.svg"
    },
    {
      id: 8,
      title: "Pemulihan Bencana dan Kontinuitas Bisnis",
      description: "Mengembangkan rencana pemulihan bencana yang sesuai dengan kebutuhan bisnis. Menyediakan solusi backup dan pemulihan yang andal untuk melindungi data penting. Membantu perusahaan dalam merancang strategi kontinuitas bisnis untuk menjaga operasional dalam situasi darurat.",
      icon: "/icons/disaster.svg"
    },
    {
      id: 9,
      title: "Analisis Data dan Business Intelligence",
      description: "Menyediakan layanan analisis data untuk membantu perusahaan memahami tren, pola, dan peluang bisnis. Mengimplementasikan solusi business intelligence untuk pengambilan keputusan yang lebih baik. Membantu dalam mengelola dan memproses data dengan menggunakan teknik analisis lanjutan.",
      icon: "/icons/data.svg"
    },
    {
      id: 10,
      title: "Konsultasi Infrastruktur Cloud",
      description: "Memberikan konsultasi dan bimbingan tentang adopsi teknologi cloud computing. Merancang dan mengimplementasikan strategi migrasi ke cloud, baik itu cloud publik, pribadi, atau hibrida. Memberikan penilaian keamanan dan manajemen infrastruktur cloud.",
      icon: "/icons/cloud.svg"
    },
    {
      id: 11,
      title: "Pengembangan Aplikasi dan Perangkat Lunak",
      description: "Menyediakan layanan pengembangan aplikasi kustom dan perangkat lunak sesuai kebutuhan klien. Merancang, mengembangkan, dan menguji aplikasi yang dioptimalkan untuk tujuan bisnis tertentu. Memberikan pemeliharaan dan dukungan setelah implementasi.",
      icon: "/icons/development.svg"
    },
    {
      id: 12,
      title: "Virtualisasi dan Konsolidasi Server",
      description: "Membantu perusahaan dalam virtualisasi infrastruktur server dan konsolidasi lingkungan TI. Mengoptimalkan penggunaan sumber daya dengan mengonsolidasikan server fisik ke dalam mesin virtual. Memberikan efisiensi, skala ekonomi, dan penghematan biaya.",
      icon: "/icons/virtualization.svg"
    },
    {
      id: 13,
      title: "Pelatihan dan Pengembangan SDM",
      description: "Menyediakan pelatihan dan pengembangan profesional dalam bidang teknologi informasi. Mengadakan pelatihan untuk meningkatkan pengetahuan dan keterampilan TI karyawan. Membantu perusahaan dalam membangun tim yang terampil dan mengadopsi teknologi dengan lebih baik.",
      icon: "/icons/training.svg"
    },
    {
      id: 14,
      title: "Layanan Konsultasi Kepatuhan Regulasi",
      description: "Memberikan panduan dan konsultasi tentang kepatuhan terhadap regulasi dan persyaratan industri tertentu, seperti GDPR, HIPAA, atau ISO 27001. Membantu klien memahami dan memenuhi persyaratan yang relevan untuk menjaga kepatuhan dan mengurangi risiko hukum.",
      icon: "/icons/compliance.svg"
    },
    {
      id: 15,
      title: "Pengadaan Hardware",
      description: "Perusahaan kami juga melayani pengadaan hardware seperti komputer, laptop, Arduino RFID Trainer Kit, monitor, handphone, Tools set, Server dan lain - lain.",
      icon: "/icons/hardware.svg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar />

      {/* Header Section */}
      <section className="bg-[#414141] py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6 text-gray-300 text-sm animate-in fade-in slide-in-from-top-5 duration-700">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Layanan</span>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <h1 className="text-4xl font-bold text-white mb-4">Layanan Kami</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan teknologi informasi untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layanan.map((item) => (
              <div key={item.id} className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group hover:border-primary/30 opacity-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Image src={item.icon} alt={item.title} width={24} height={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5e5b5b] flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="service-card opacity-0">
            <h2 className="text-3xl font-bold text-[#414141] mb-6">Butuh Konsultasi?</h2>
            <p className="text-lg text-[#5e5b5b] mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda menemukan solusi teknologi yang tepat untuk kebutuhan bisnis Anda
            </p>
          </div>
          <Link href="https://wa.me/6281219192024" target="_blank" rel="noopener noreferrer" className="inline-block animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            <Button className="bg-[#414141] hover:bg-[#4a4a4a] text-white rounded-full px-8 py-6 h-auto font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-whatsapp"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 z-50 animate-bounce hover:animate-none"
        aria-label="Kembali ke atas"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </main>
  );
}