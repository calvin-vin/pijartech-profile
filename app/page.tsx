import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import TeamCarousel from "@/components/team-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f8f8f8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-[#414141] mb-4">
                We Code
                <br />
                We Deliver
              </h1>
              <div className="flex items-center gap-3 mt-8">
                <div className="bg-[#9fd685] rounded-full p-2">
                  <Play className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm text-[#414141]">
                  Pijar Tech specializes in developing
                  <br />
                  high-performing mobile and
                  <br />
                  web applications.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/programming-background.jpg"
                alt="Programmer working with code"
                width={500}
                height={400}
                className="rounded-tl-[100px] rounded-br-[100px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/laptop-typing.png"
                alt="Person typing on laptop"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded shadow-sm">
                <span className="text-xs font-medium text-[#414141]">View Detail</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#414141] mb-8">What We Do?</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <div className="w-4 h-4 bg-[#9fd685] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#414141] mb-2">Mobile Application</h3>
                    <p className="text-sm text-[#5e5b5b] mb-1">Building mobile applications is never easy.</p>
                    <p className="text-sm text-[#5e5b5b] mb-1">
                      But working with {"{"} Flutter, Java, Kotlin {"}"} makes it fun.
                    </p>
                    <p className="text-sm text-[#5e5b5b] mb-1">We have a team of mobile developers who are</p>
                    <p className="text-sm text-[#5e5b5b]">Down for all test.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <div className="w-4 h-4 bg-[#9fd685] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#414141] mb-2">Web Application</h3>
                    <p className="text-sm text-[#5e5b5b] mb-1">We can build you web applications you need.</p>
                    <p className="text-sm text-[#5e5b5b] mb-1">
                      A personal blog, {"{"} Company Profile, E-commerce {"}"}
                    </p>
                    <p className="text-sm text-[#5e5b5b] mb-1">We have a team of web developers who are</p>
                    <p className="text-sm text-[#5e5b5b] mb-1">We have a strong team of web developers that can</p>
                    <p className="text-sm text-[#5e5b5b]">Follow your stack and needs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#414141] mb-2">UI/UX Design</h3>
                    <p className="text-sm text-[#5e5b5b] mb-1">
                      All things are designed, few things are designed well.
                    </p>
                    <p className="text-sm text-[#5e5b5b] mb-1">We have a team of designers who will create designs</p>
                    <p className="text-sm text-[#5e5b5b]">suited to your taste, embracing the right user needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#414141] mb-4">How We Work?</h2>
              <p className="text-[#5e5b5b] mb-6">
                Let's discuss what projects
                <br />
                you have in mind
              </p>
              <Button className="bg-[#414141] hover:bg-[#4a4a4a] text-white rounded">Let's Have a Coffee</Button>
            </div>
            <div className="relative">
              <Image
                src="/mobile-laptop-work.png"
                alt="Person working with mobile and laptop"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#414141] mb-2">Our Customers</h2>
          <p className="text-[#5e5b5b] mb-12">are our biggest fans</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`customer-1-${i}`} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Customer logo ${i + 1}`}
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`customer-2-${i}`} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Customer logo ${i + 6}`}
                  width={120}
                  height={60}
                  className="grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <p className="text-sm text-[#9f9f9f] mt-8">See more</p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#414141] mb-12">Our Team</h2>

          <TeamCarousel />

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`dot-${i}`}
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#414141]" : "bg-[#c4c4c4]"}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#414141] mb-6">Join Our Team</h2>
              <p className="text-sm text-[#5e5b5b] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempus ut massa in condimentum in felis.
                Ut dignissim enim. Vivamus quis augue amet ornare risus molestie. Aenean felis et ligula amet ornare
                risus molestie. Cursus morbi eros sed ipsum sagittis faucibus ut arcu.
              </p>
              <Button className="bg-[#414141] hover:bg-[#4a4a4a] text-white rounded">Apply</Button>
            </div>
            <div className="relative">
              <Image
                src="/team-collaboration.png"
                alt="Team members collaborating"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
            <footer className="py-16 bg-[#f8f8f8] border-t border-[#e5e5e5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">Location</h3>
              <div className="mb-4 rounded-lg overflow-hidden h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3064034057224!2d106.10313611475857!3d-2.1003256590447807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDYnMDEuMiJTIDEwNsKwMDYnMTkuMSJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pijar Tech Location"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm font-bold text-[#414141]">Pijar Tech</p>
              <p className="text-sm text-[#5e5b5b]">Jl. Jalan Jalan</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm text-[#5e5b5b] hover:text-[#414141]">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#5e5b5b] hover:text-[#414141]">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#5e5b5b] hover:text-[#414141]">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#5e5b5b] hover:text-[#414141]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#414141] mb-6">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#414141] rounded-full">
                    <span className="text-white text-xs">T</span>
                  </div>
                  <span className="text-sm text-[#5e5b5b]">Telephone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#414141] rounded-full">
                    <span className="text-white text-xs">W</span>
                  </div>
                  <span className="text-sm text-[#5e5b5b]">WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#414141] rounded-full">
                    <span className="text-white text-xs">E</span>
                  </div>
                  <span className="text-sm text-[#5e5b5b]">info@pijartech.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#5e5b5b]">Pijar Tech | PT. Pijar Teknologi Mediantama</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
