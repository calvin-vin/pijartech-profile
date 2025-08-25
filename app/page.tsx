import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import TeamCarousel from "@/components/team-carousel";
import ScrollLink from "@/components/scroll-link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#f8f8f8] to-[#e6e6e6] py-20 md:py-28"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#414141]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10 md:pr-8">
              <div className="inline-block px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
                <p className="text-sm font-medium text-[#414141]">
                  Solusi Digital Terpercaya
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#414141] mb-6 leading-tight">
                <span className="relative inline-block">
                  {" "}
                  Empowering Technologies
                </span>
                <br />
                <span className="relative inline-block">
                  Bridging Opportunities
                </span>
              </h1>

              <p className="text-lg text-[#5e5b5b] mb-8 max-w-lg">
                PT Pijar Teknologi Mediatama adalah perusahaan resmi di bidang
                Teknologi Informasi (TI), didukung tim profesional berpengalaman
                lebih dari 10 tahun dalam proyek lintas sektor, lokal hingga
                internasional.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="https://wa.me/6281219192024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    Mulai Konsultasi
                  </Button>
                </Link>

                <Link
                  href="https://youtu.be/Yywte1F1G78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="bg-[#414141] rounded-full p-3 group-hover:bg-primary transition-colors duration-300">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[#414141] font-medium group-hover:text-primary transition-colors duration-300">
                    Tonton Video
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] transform rotate-6 scale-95 opacity-70"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                <Image
                  src="/programming-background.jpg"
                  alt="Programmer working with code"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-white text-sm font-medium">
                      Teknologi Terkini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Kami Section */}
      <section id="layanan" className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#414141] mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-[#5e5b5b] max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan teknologi informasi untuk
              memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Layanan 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/analysis.svg"
                  alt="Analisis Kebutuhan dan Perencanaan"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Analisis Kebutuhan dan Perencanaan
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Menyediakan analisis mendalam terhadap kebutuhan bisnis klien
                dan merencanakan strategi TI yang sesuai. Ini melibatkan
                penilaian infrastruktur, identifikasi kesenjangan, dan menyusun
                rencana implementasi teknologi yang efektif.
              </p>
            </div>

            {/* Layanan 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/architecture.svg"
                  alt="Arsitektur dan Desain Sistem"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Arsitektur dan Desain Sistem
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Menyediakan analisis mendalam terhadap kebutuhan bisnis klien
                dan merencanakan strategi TI yang sesuai. Ini melibatkan
                penilaian infrastruktur, identifikasi kesenjangan, dan menyusun
                rencana implementasi teknologi yang efektif.
              </p>
            </div>

            {/* Layanan 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/implementation.svg"
                  alt="Implementasi dan Integrasi Sistem"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Implementasi dan Integrasi Sistem
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Menyediakan layanan keamanan jaringan yang meliputi audit
                keamanan, penilaian risiko, dan implementasi solusi keamanan
                yang sesuai. Ini mencakup pemantauan keamanan, identifikasi
                kerentanan, pengujian penetrasi, dan pengembangan kebijakan
                keamanan.
              </p>
            </div>

            {/* Layanan 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up delay-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/project.svg"
                  alt="Manajemen Proyek TI"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Manajemen Proyek TI
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Menyediakan manajemen proyek yang efisien untuk implementasi
                teknologi informasi. Memastikan proyek berjalan sesuai jadwal,
                anggaran, dan memenuhi tujuan bisnis. Melibatkan perencanaan,
                pengawasan, pengendalian, dan pemecahan masalah proyek.
              </p>
            </div>

            {/* Layanan 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up delay-400">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/support.svg"
                  alt="Konsultasi dan Dukungan Teknis"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Konsultasi dan Dukungan Teknis
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Memberikan konsultasi dan dukungan teknis terkait dengan masalah
                TI, keputusan teknologi, pemecahan masalah, dan pertanyaan umum
                seputar penggunaan sistem dan aplikasi. Menyediakan bantuan
                teknis yang diperlukan untuk mengoptimalkan kinerja TI.
              </p>
            </div>

            {/* Layanan 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/30 animate-on-scroll animate-slide-up delay-500">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Image
                  src="/icons/innovation.svg"
                  alt="Transformasi Digital dan Inovasi"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-primary transition-colors duration-300">
                Transformasi Digital dan Inovasi
              </h3>
              <p className="text-sm text-[#5e5b5b]">
                Membantu perusahaan dalam merencanakan dan menerapkan
                transformasi digital, termasuk penggunaan teknologi terbaru
                seperti kecerdasan buatan, Internet of Things (IoT), analisis
                data, dan cloud computing. Membantu perusahaan memanfaatkan
                inovasi teknologi untuk mencapai keunggulan kompetitif.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/layanan">
              <Button className="bg-[#414141] hover:bg-[#4a4a4a] text-white rounded-full px-8 py-6 h-auto font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg">
                Lihat Semua Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section
        id="visi-misi"
        className="py-20 bg-gradient-to-b from-[#f8f8f8] to-[#eef1f8] animate-on-scroll"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-bold text-[#414141] mb-4 relative inline-block">
              Visi & Misi
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>
            <p className="text-[#5e5b5b] max-w-2xl mx-auto mt-4">
              Komitmen kami untuk memberikan solusi teknologi terbaik yang
              mendorong pertumbuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visi Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#414141] group-hover:text-primary transition-colors duration-300">
                  Visi Kami
                </h3>
              </div>

              <p className="text-[#5e5b5b] leading-relaxed text-lg relative z-10">
                Menjadi{" "}
                <span className="font-semibold text-primary">
                  perusahaan teknologi informasi terdepan
                </span>{" "}
                yang mendorong inovasi, keamanan dan transformasi digital
                berkelanjutan di Indonesia dan dunia.
              </p>
            </div>

            {/* Misi Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#414141] group-hover:text-primary transition-colors duration-300">
                  Misi Kami
                </h3>
              </div>

              <ul className="text-[#5e5b5b] space-y-4 relative z-10">
                <li className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-base">
                    Mengembangkan{" "}
                    <span className="font-medium">
                      Solusi TI berbasis riset
                    </span>{" "}
                    dan kebutuhan klien.
                  </span>
                </li>
                <li className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-base">
                    Mendorong adopsi{" "}
                    <span className="font-medium">tata kelola TI</span> dan
                    keamanan informasi.
                  </span>
                </li>
                <li className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-base">
                    Mewujudkan transformasi digital yang{" "}
                    <span className="font-medium">human-centered</span>.
                  </span>
                </li>
                <li className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-base">
                    Membangun{" "}
                    <span className="font-medium">Ekosistem kolaboratif</span>{" "}
                    antara teknologi, bisnis dan manusia.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Klien Kami Section */}
      <section id="klien" className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#414141] mb-2 animate-fade-in">
            Klien Kami
          </h2>
          <p className="text-[#5e5b5b] mb-12 animate-fade-in">
            Dipercaya oleh berbagai instansi dan perusahaan
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#414141] mb-6">
              Instansi Pemerintah
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/kabupaten_malinau.png"
                  alt="Kabupaten Malinau"
                  width={200}
                  height={100}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Kabupaten Malinau
                </div>
              </div>

              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/kabupaten_bangka.png"
                  alt="Kabupaten Bangka"
                  width={100}
                  height={45}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Kabupaten Bangka
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/kabupaten_bangka_selatan.png"
                  alt="Kabupaten Bangka Selatan"
                  width={100}
                  height={45}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Kabupaten Bangka Selatan
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/pupr.png"
                  alt="PUPR"
                  width={200}
                  height={100}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  PUPR
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#414141] mb-6">
              Perusahaan & Industri
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/timah.png"
                  alt="PT Timah"
                  width={200}
                  height={100}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  PT Timah
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/grand_vella.png"
                  alt="Grand Vella"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Grand Vella
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/cinema.jpeg"
                  alt="Cinema XXI"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Cinema XXI
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/bsb.png"
                  alt="Bank Sumsel Babel"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Bank Sumsel Babel
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#414141] mb-6">
              Universitas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/ubb.png"
                  alt="Universitas Bangka Belitung"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Universitas Bangka Belitung
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/iain.png"
                  alt="IAIN"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  IAIN
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/pertiba.png"
                  alt="Pertiba"
                  width={200}
                  height={120}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Pertiba
                </div>
              </div>
              <div className="flex items-center justify-center group relative">
                <Image
                  src="/images/clients/polman_babel.png"
                  alt="Polman Babel"
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Polman Babel
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#414141] hover:bg-[#4a4a4a] transition-colors duration-300"
          >
            Lebih Banyak
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Tim Kami Section */}
      <section id="tim" className="py-16 bg-[#f8f8f8] animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#414141] mb-12 animate-fade-in">
            Tim Kami
          </h2>
          <TeamCarousel />
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#414141] mb-12 text-center animate-fade-in">
            Agenda
          </h2>
          <div className="flex justify-center">
            <div className="max-w-3xl rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/events/quick_count.jpg"
                alt="Quick Count Pemilu 2024"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="kontak"
        className="py-16 border-t border-gray-200 bg-gray-50 animate-on-scroll"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">
                Perusahaan
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Karya
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    href="#layanan"
                    targetId="layanan"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Layanan
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    href="#tim"
                    targetId="tim"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Tim
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    href="#agenda"
                    targetId="agenda"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Agenda
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    href="#kontak"
                    targetId="kontak"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Kontak
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">
                Hubungi Kami
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gray-100 text-primary rounded-full mt-0.5 group-hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="tel:+6281298884820"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      0812 9888 4820
                    </a>
                    <a
                      href="tel:+6281273152552"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      0812 7315 2552
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gray-100 text-primary rounded-full mt-0.5 group-hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <a
                    href="mailto:info@pijartech.id"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    info@pijartech.id
                  </a>
                </div>

                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gray-100 text-primary rounded-full mt-0.5 group-hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <a
                    href="https://www.pijartech.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    www.pijartech.id
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">
                Tentang Kami
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  PT Pijar Teknologi Mediatama adalah perusahaan teknologi
                  informasi yang berfokus pada pengembangan solusi digital
                  inovatif untuk berbagai sektor industri dan pemerintahan.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">
                    Web Development
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">
                    Mobile Apps
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">
                    IT Solutions
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">
                Lokasi Kami
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gray-100 text-primary rounded-full mt-0.5 group-hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 block mb-1">
                      Kantor Pusat:
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      Jalan Swadaya, Desa Malinau Kota, Kec. Malinau Kota,
                      Kabupaten Malinau, Kalimantan Utara 77554
                    </p>
                    <a
                      href="https://maps.google.com/?q=Malinau+Kota,+Kabupaten+Malinau,+Kalimantan+Utara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs inline-flex items-center text-primary hover:text-primary/80 hover:underline"
                    >
                      <span>Lihat di Peta</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gray-100 text-primary rounded-full mt-0.5 group-hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 block mb-1">
                      Kantor Perwakilan:
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      Jalan Arwana Kelurahan Gabek Satu, Kec. Gabek No. 33 Kota
                      Pangkalpinang, Kepulauan Bangka Belitung 33172
                    </p>
                    <a
                      href="https://maps.google.com/?q=Gabek+Satu,+Pangkalpinang,+Kepulauan+Bangka+Belitung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs inline-flex items-center text-primary hover:text-primary/80 hover:underline"
                    >
                      <span>Lihat di Peta</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2025 PT Pijar Teknologi Mediatama.{" "}
                <span className="text-primary">Hak Cipta Dilindungi.</span>
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
