"use client";

import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center min-h-screen p-8 relative">
        {/* Logo at the top */}
        <div className="absolute top-8 left-8 z-20">
          <div className="w-24 h-24 relative">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Left content - Bigger text */}
        <div className="flex flex-col gap-5 md:gap-10 z-10 mt-24">
          <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-inter)]">
            I'm Abdellah
          </h1>
          <div className="flex flex-col">
            <span className="text-4xl md:text-6xl font-[family-name:var(--font-ubuntu-mono)]">
              Developer &
            </span>
            <span className="text-5xl md:text-7xl text-blue-400 font-[family-name:var(--font-sarina)]">
              Designer
            </span>
          </div>
        </div>

        {/* Right content - Image with spinning text */}
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Spinning Text Component around the image */}
            <div className="absolute inset-0 w-full h-full">
              <SpinningText 
                className="w-full h-full text-foreground/70"
                duration={15}
                radius={21}
                fontSize={25}
              >
                Eat · Code · Pray · Sleep · Repeat ·
              </SpinningText>
            </div>
            
            {/* Profile Image */}
            <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-foreground/10 z-10 flex items-center justify-center">
              <Image
                src="/images/abdellah's_image.jpg"
                alt="Abdellah's portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Logo and down arrow at bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="animate-bounce">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-16 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Contact</h3>
              <ul className="space-y-2">
                <li>Email: contact@abdellah.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Location: City, Country</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.92375C21.2563 6.25 20.4637 6.46625 19.6375 6.57125C20.4875 6.06375 21.1363 5.26625 21.4412 4.305C20.6488 4.7775 19.7738 5.11125 18.8412 5.2975C18.0887 4.49625 17.0162 4 15.8462 4C13.5763 4 11.7487 5.8425 11.7487 8.10125C11.7487 8.42625 11.7762 8.73875 11.8438 9.03625C8.435 8.87 5.41875 7.23625 3.3925 4.7475C3.03875 5.36125 2.83125 6.06375 2.83125 6.82C2.83125 8.24 3.5625 9.49875 4.6525 10.2275C3.99375 10.215 3.3475 10.0238 2.8 9.7225C2.8 9.735 2.8 9.75125 2.8 9.7675C2.8 11.76 4.22125 13.415 6.085 13.7962C5.75125 13.8875 5.3875 13.9312 5.01 13.9312C4.7475 13.9312 4.4825 13.9163 4.23375 13.8612C4.765 15.485 6.2725 16.6788 8.065 16.7175C6.67 17.8088 4.89875 18.4662 2.98125 18.4662C2.645 18.4662 2.3225 18.4513 2 18.41C3.81625 19.5813 5.96875 20.25 8.29 20.25C15.835 20.25 19.96 14 19.96 8.5825C19.96 8.40125 19.9538 8.22625 19.945 8.0525C20.7588 7.475 21.4425 6.75375 22 5.92375Z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM7.5 9.5H10.5V10.5H7.5V9.5ZM13.5 9.5H16.5V10.5H13.5V9.5ZM8.5 15.5C8.5 14.12 10.12 13 12 13C13.88 13 15.5 14.12 15.5 15.5H8.5Z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61177 4 4 5.61177 4 7.6V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.6C20 5.61177 18.3882 4 16.4 4H7.6ZM17.25 5.5C17.9404 5.5 18.5 6.05964 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05964 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll-based velocity component at the bottom */}
          <div className="mt-16 overflow-hidden">
            <VelocityScroll 
              defaultVelocity={3} 
              numRows={2}
              className="text-6xl md:text-8xl font-bold text-white opacity-20"
            >
              AA³
            </VelocityScroll>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center text-sm opacity-70">
            <p>© {new Date().getFullYear()} Abdellah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
