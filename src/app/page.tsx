"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SpinningText } from "@/components/magicui/spinning-text";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipText } from "@/components/magicui/flip-text";
import { Particles } from "@/components/magicui/particles";

export default function Home() {
  return (
    <>
      <Particles
        className="fixed inset-0 z-0"
        quantity={80}
        ease={80}
        color="#60A5FA"
        size={0.6}
        staticity={30}
      />
      <div className="min-h-screen text-foreground flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] items-center min-h-screen p-8 relative">
          {/* Logo at the top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-8 left-8 z-20 flex items-center gap-4"
          >
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <AnimatedThemeToggler className="w-8 h-8 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-foreground/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center" />
          </motion.div>

          {/* Image section - First on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full h-full flex items-center justify-center relative order-1 md:order-2"
          >
            <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto mt-32 md:mt-0">
              {/* Spinning Text Component around the image */}
              <div className="absolute inset-0 w-full h-full scale-75 md:scale-100">
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-black z-10 flex items-center justify-center"
              >
                <Image
                  src="/images/abdellah's_image.jpg"
                  alt="Abdellah&apos;s portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content - Second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5 md:gap-10 z-10 mt-24 md:mt-24 order-2 md:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-8xl font-bold font-[family-name:var(--font-inter)]"
            >
              <div className="flex justify-start">
                <FlipText
                  className="text-4xl md:text-8xl font-bold font-[family-name:var(--font-inter)]"
                  duration={0.6}
                  delayMultiple={0.1}
                >
                  I&apos;m Abdellah
                </FlipText>
              </div>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-6xl font-[family-name:var(--font-ubuntu-mono)]">
                Software Engineer &
              </span>
              <SparklesText
                className="text-3xl md:text-7xl text-blue-400 font-[family-name:var(--font-sarina)]"
                colors={{ first: "#F472B6", second: "#EC4899" }}
                sparklesCount={8}
              >
                UI Designer
              </SparklesText>
            </motion.div>
          </motion.div>



          {/* Logo and down arrow at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
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
          </motion.div>
        </div>

        {/* About Me Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
          {/* Left side - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-inter)]"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 space-y-4 text-foreground/80 text-lg md:text-xl leading-relaxed"
            >
              <p>I&apos;m a passionate developer with a knack for building innovative solutions that make a difference. With a strong foundation in <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-blue-400 font-semibold">Go</span>, <span className="text-blue-400 font-semibold">Python</span>, and <span className="text-blue-400 font-semibold">Kotlin</span>, I thrive on tackling complex challenges and turning ideas into reality. My curiosity drives me to stay updated with the latest tech trends, while my collaborative spirit ensures I work seamlessly with teams to deliver user-focused projects. When I&apos;m not coding, you can find me playing an awesome Video Game or Draft a design for my latest projects and, I&apos;m always seeking inspiration to fuel my creativity.</p>
            </motion.div>
          </motion.div>

          {/* Right side - Connected Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-[400px]"
          >
            {/* Image 1 - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute top-0 right-0 w-64 h-64 rounded-2xl overflow-hidden border-2 border-foreground/20 shadow-lg"
            >
              <Image
                src="/images/abde.jpg"
                alt="Abdellah presenting"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Image 2 - Bottom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-2xl overflow-hidden border-2 border-foreground/20 shadow-lg"
            >
              <Image
                src="/images/abde2.jpeg"
                alt="Abdellah with laptop"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div className="py-20 flex flex-col-reverse lg:grid lg:grid-cols-[2fr_1fr] gap-10">
          {/* Left side - Project Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Project Card 1 */}
            <motion.a
              href="https://github.com/MRQ67/MarkPlainer"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md cursor-pointer">
                <div className="h-48 relative">
                  <Image
                    src="/images/mark.png"
                    alt="Project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">MarkPlainer</h3>
                  <p className="text-foreground/70 mb-4">An android app that convert markdown text to plain text written in kotlin.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-purple-500 rounded-full text-xs">Kotlin</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Project Card 2 */}
            <motion.a
              href="https://github.com/MRQ67/zync-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md cursor-pointer">
                <div className="h-68 relative">
                  <Image
                    src="/images/zync.png"
                    alt="Project 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Zync Chat</h3>
                  <p className="text-foreground/70 mb-4">a real-time chat web app in written golang.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Go</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Project Card 3 */}
            <motion.a
              href="https://github.com/MRQ67/unique-e-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md cursor-pointer">
                <div className="h-60 relative">
                  <Image
                    src="/images/unique.png"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Unique E-Learning Platform</h3>
                  <p className="text-foreground/70 mb-4">A secure, AI-powered e-learning platform with advanced proctoring for online exams and courses.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black/10 text-foreground rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-blue-300/10 text-blue-300 rounded-full text-xs">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs">Framer Motion</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Project Card 4 */}
            <motion.a
              href="https://unique-validation.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md cursor-pointer">
                <div className="h-60 relative">
                  <Image
                    src="/images/vaild.png"
                    alt="Project 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Unique Validation</h3>
                  <p className="text-foreground/70 mb-4">A modern web application for creating, managing, and validating e-learning certificates with QR code verification. Perfect for hackathons, demos, and educational platforms.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black/10 text-foreground rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-blue-300/10 text-blue-300 rounded-full text-xs">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs">Vercel KV</span>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right side - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold sticky top-20 font-[family-name:var(--font-inter)]">My Projects</h2>
          </motion.div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          {/* Left side - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold sticky top-20 font-[family-name:var(--font-inter)]">Skills & Tech</h2>
            <p className="text-foreground/70 mt-4 pr-4 sticky top-32 md:top-36">Technologies and tools I work with.</p>
          </motion.div>

          {/* Right side - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/nextjs.svg" alt="Next.js" width={48} height={48} />
              <span className="text-sm font-medium">Next.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/tailwindcss.svg" alt="Tailwind CSS" width={48} height={48} />
              <span className="text-sm font-medium">Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/javascript.svg" alt="JavaScript" width={48} height={48} />
              <span className="text-sm font-medium">JavaScript</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/typescript.svg" alt="TypeScript" width={48} height={48} />
              <span className="text-sm font-medium">TypeScript</span>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/nodejs.svg" alt="Node.js" width={48} height={48} />
              <span className="text-sm font-medium">Node.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/go.svg" alt="Go" width={48} height={48} />
              <span className="text-sm font-medium">Go</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/supabase.svg" alt="Supabase" width={48} height={48} />
              <span className="text-sm font-medium">Supabase</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator" width={48} height={48} />
              <span className="text-sm font-medium">Adobe Illustrator</span>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/shadcn.svg" alt="shadcn/ui" width={48} height={48} />
              <span className="text-sm font-medium">shadcn/ui</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/kotlin.svg" alt="Kotlin" width={48} height={48} />
              <span className="text-sm font-medium">Kotlin</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/flutter.svg" alt="Flutter" width={48} height={48} />
              <span className="text-sm font-medium">Flutter</span>
            </motion.div>

            {/* Design & Tools */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md flex flex-col items-center justify-center gap-2"
            >
              <Image src="/icons/figma.svg" alt="Figma" width={48} height={48} />
              <span className="text-sm font-medium">Figma</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Get in Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 text-center font-[family-name:var(--font-inter)]"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/MRQ67"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="GitHub"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="https://x.com/HimoNotting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="X (Twitter)"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/simply_aboo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Instagram"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:contact@aa3.site"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Email"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Section */}
        <footer className="bg-black text-white py-16 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Contact</h3>
                <ul className="space-y-2">
                  <li>Email: contact@aa3.site</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#projects" className="hover:text-blue-400 transition-colors">My Projects</a></li>
                  <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Tools</a></li>
                  <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition-colors">Get in Touch</a></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/HimoNotting" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    {/* X (formerly Twitter) logo */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://github.com/MRQ67" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    {/* GitHub logo */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.006C9.52 20.765 9.512 20.046 9.508 19.192C6.726 19.79 6.139 17.777 6.139 17.777C5.684 16.598 5.029 16.29 5.029 16.29C4.121 15.633 5.098 15.646 5.098 15.646C6.101 15.719 6.629 16.72 6.629 16.72C7.521 18.276 8.97 17.825 9.54 17.569C9.629 16.89 9.889 16.44 10.175 16.187C7.954 15.931 5.62 15.07 5.62 11.265C5.62 10.179 6.01 9.293 6.649 8.603C6.549 8.35 6.201 7.349 6.749 5.916C6.749 5.916 7.587 5.646 9.497 6.862C10.295 6.639 11.15 6.528 12 6.524C12.85 6.528 13.705 6.639 14.504 6.862C16.413 5.646 17.25 5.916 17.25 5.916C17.799 7.349 17.451 8.35 17.351 8.603C17.991 9.293 18.379 10.179 18.379 11.265C18.379 15.082 16.041 15.927 13.813 16.178C14.172 16.493 14.496 17.116 14.496 18.067C14.496 19.419 14.483 20.677 14.483 21.006C14.483 21.275 14.661 21.587 15.171 21.489C19.138 20.162 22 16.417 22 12C22 6.477 17.523 2 12 2Z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/simply_aboo/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    {/* Instagram logo */}
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
    </>
  );
}
