import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function ClientsPage() {
  // Daftar semua klien berdasarkan kategori
  const clients = {
    government: [
      {
        name: "Kabupaten Malinau",
        image: "/images/clients/kabupaten_malinau.png",
      },
      {
        name: "Kabupaten Bangka Selatan",
        image: "/images/clients/kabupaten_bangka_selatan.png",
      },
      {
        name: "Kabupaten Bangka Tengah",
        image: "/images/clients/kabupaten_bangka_tengah.png",
      },
      {
        name: "Kabupaten Bangka",
        image: "/images/clients/kabupaten_bangka.png",
      },
      {
        name: "Kabupaten Belitung Timur",
        image: "/images/clients/kabupaten_belitung_timur.png",
      },
      { name: "PUPR", image: "/images/clients/pupr.png" },

      { name: "Disperkim", image: "/images/clients/disperkim.png" },
    ],
    industry: [
      { name: "PT Timah", image: "/images/clients/timah.png" },
      { name: "Grand Vella", image: "/images/clients/grand_vella.png" },
      { name: "Cinema XXI", image: "/images/clients/cinema.jpeg" },
      { name: "Bank SumselBabel", image: "/images/clients/bsb.png" },
    ],
    university: [
      { name: "Universitas Bangka Belitung", image: "/images/clients/ubb.png" },
      { name: "IAIN", image: "/images/clients/iain.png" },
      { name: "Pertiba", image: "/images/clients/pertiba.png" },
      { name: "Polman Babel", image: "/images/clients/polman_babel.png" },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar />

      {/* Header Section */}
      <section className="bg-[#293279] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Klien Kami</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kami bangga bekerja sama dengan organisasi-organisasi luar biasa ini
            di berbagai sektor
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#414141] mb-8 text-center">
              Instansi Pemerintah
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.government.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain h-24"
                  />
                  <h3 className="mt-4 text-center text-sm font-medium text-gray-700">
                    {client.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#414141] mb-8 text-center">
              Industri/Perusahaan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.industry.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain h-24"
                  />
                  <h3 className="mt-4 text-center text-sm font-medium text-gray-700">
                    {client.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#414141] mb-8 text-center">
              Universitas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.university.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain h-24"
                  />
                  <h3 className="mt-4 text-center text-sm font-medium text-gray-700">
                    {client.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#293279] hover:bg-[#1e2456] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
