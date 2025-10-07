"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SpinningText } from "@/components/magicui/spinning-text";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipText } from "@/components/magicui/flip-text";
import { Particles } from "@/components/magicui/particles";
import { getTopProjects } from "@/data/projects";
import { getFeaturedDesigns } from "@/data/designs";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { DesignCard } from "@/components/DesignCard";
import { DesignModal } from "@/components/DesignModal";
import { useProject } from "@/contexts/ProjectContext";
import { useDesign } from "@/contexts/DesignContext";

export default function Home() {
  const topProjects = getTopProjects(4);
  const featuredDesigns = getFeaturedDesigns();
  const { isModalOpen, selectedProject, closeModal } = useProject();
  const { isModalOpen: isDesignModalOpen, selectedDesign, closeModal: closeDesignModal } = useDesign();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Particles
          className="fixed inset-0 z-0"
          quantity={80}
          ease={80}
          color="#60A5FA"
          size={0.6}
          staticity={30}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="min-h-screen text-foreground flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr] items-center min-h-screen p-8 relative"
        >
          {/* Logo at the top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-8 left-8 z-20 flex items-center gap-4"
          >
            <div id="hero-logo" className="w-16 h-16 relative">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <AnimatedThemeToggler className="w-8 h-8 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-foreground/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center" />
          </motion.div>

          {/* Right side - Resume button and Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-full h-full flex flex-col items-center justify-center relative order-1 md:order-2"
          >
             {/* My Resume Button - Aligned with logo and theme toggle */}
             <motion.button
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.2 }}
               className="absolute top-4 right-28 px-6 py-3 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300 font-medium font-[family-name:var(--font-dm-sans)] z-20"
             >
               My Resume
             </motion.button>

            {/* Profile Image with spinning text and outside circle effect */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
              className="relative w-48 h-48 md:w-80 md:h-80"
            >
              {/* Spinning Text Component around the image */}
              <div className="absolute inset-0 w-full h-full scale-50 md:scale-100">
                <SpinningText
                  className="w-full h-full text-foreground/70"
                  duration={15}
                  radius={22}
                  fontSize={20}
                >
                  Eat · Code · Pray · Sleep · Repeat ·
                </SpinningText>
              </div>

              {/* Circular border container */}
              <div className="absolute inset-0 w-full h-full rounded-full border-4 border-foreground overflow-hidden z-10">
                <Image
                  src="/images/abdellah's_image.jpg"
                  alt="Abdellah&apos;s portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-6 md:gap-8 z-10 mt-24 md:mt-24 order-2 md:order-1 max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-5xl md:text-8xl font-[family-name:var(--font-dm-sans)] leading-tight"
            >
              <div className="flex justify-start items-baseline">
                <span className="font-normal text-5xl md:text-8xl">I&apos;m</span>
                <span className="ml-4"></span>
                <FlipText
                  className="text-5xl md:text-8xl font-bold font-[family-name:var(--font-dm-sans)]"
                  duration={0.6}
                  delayMultiple={0.1}
                >
                  Abdellah
                </FlipText>
              </div>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col gap-2"
            >
              <span className="text-3xl md:text-5xl font-[family-name:var(--font-ubuntu-mono)]">
                Software Developer &
              </span>
              <SparklesText
                className="text-3xl md:text-5xl text-blue-400 font-[family-name:var(--font-sarina)] italic"
                colors={{ first: "#F472B6", second: "#EC4899" }}
                sparklesCount={8}
              >
                Graphics Designer
              </SparklesText>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-12 mt-8 justify-start items-center ml-8"
            >
              <a href="https://github.com/MRQ67" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/github-142-svgrepo-com.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://x.com/HimoNotting" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/X_logo_2023_original.svg"
                  alt="X (Twitter)"
                  width={40}
                  height={40}
                  className="h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.linkedin.com/in/abdellah-qadi-b229382a2/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.instagram.com/simply_aboo/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/instagram-167-svgrepo-com.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.youtube.com/@aa3_studio" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/youtube-168-svgrepo-com.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="h-10 w-auto dark:invert"
                />
              </a>
            </motion.div>
          </motion.div>



          {/* Logo and down arrow at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="absolute bottom-20 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
        </motion.div>

        {/* About Me Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] gap-8">
          {/* Left side - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start pr-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-dm-sans)]"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 space-y-4 text-foreground/80 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-dm-sans)] max-w-none"
            >
              <p className="mb-4">
                I'm a passionate developer with a strong foundation in{" "}
                <span style={{ color: "#32ADE6" }}><strong>Next.js</strong></span>,{" "}
                <span style={{ color: "#32ADE6" }}><strong>Go</strong></span>,{" "}
                <span style={{ color: "#32ADE6" }}><strong>Python</strong></span>, and{" "}
                <span style={{ color: "#32ADE6" }}><strong>Kotlin</strong></span>. I'm also passionate about{" "}
                <span style={{ color: "#32ADE6" }}><strong>Graphics Design & Video Editing</strong></span>{" "}
                and practice them regularly with projects.
              </p>
              
              <p className="mb-4">
                I'm currently studying{" "}
                <span style={{ color: "#32ADE6" }}><strong>Electrical & Computer Engineering</strong></span>{" "}
                at <span style={{ color: "#32ADE6" }}><strong>Dire Dawa University</strong></span>.
              </p>
              
              <p>
                <strong>When I'm not on my pc fixing bugs</strong>, i like to watching movies/tv series or play video games
              </p>
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
            {topProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                enableModal={true}
              />
            ))}
          </motion.div>

          {/* Right side - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <div className="sticky top-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-inter)]">My Projects</h2>
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
              >
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Design Gallery Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          {/* Left side - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <div className="sticky top-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-inter)]">Design Gallery</h2>
              <p className="text-foreground/70 pr-4">A showcase of my graphic design work, from logos to digital illustrations.</p>
              <Link
                href="/designs"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
              >
                View All Designs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right side - Design Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {featuredDesigns.slice(0, 3).map((design, index) => (
              <div key={design.id} className={index === 2 ? 'md:col-span-2 max-w-2xl mx-auto' : ''}>
                <DesignCard
                  design={design}
                  index={index}
                  enableModal={true}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="py-20 flex flex-col-reverse lg:grid lg:grid-cols-[2fr_1fr] gap-10">
          {/* Left side - Skills Grid */}
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

          {/* Right side - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <div className="sticky top-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-inter)]">Skills & Tech</h2>
              <p className="text-foreground/70 pl-4">Technologies and tools I work with.</p>
            </div>
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
        <footer className="bg-black text-white pt-40 pb-0 w-screen relative left-1/2 right-1/2 -mx-[50vw] rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header with name */}
            <div className="mb-8 -mt-18">
              <h2 className="text-5xl font-thin" style={{ fontFamily: "var(--font-italiana)" }}>Abdellah Qadi</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start relative">
              {/* Quick Links */}
              <div>
                <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-dm-sans)]">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="hover:text-blue-400 transition-colors font-[family-name:var(--font-dm-sans)]">About</a></li>
                  <li><a href="#projects" className="hover:text-blue-400 transition-colors font-[family-name:var(--font-dm-sans)]">My Projects</a></li>
                  <li><a href="#skills" className="hover:text-blue-400 transition-colors font-[family-name:var(--font-dm-sans)]">My Skills</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition-colors font-[family-name:var(--font-dm-sans)]">Get in Touch</a></li>
                </ul>
              </div>

              {/* Center - Large Footer Logo */}
              <div className="flex justify-center relative">
                <Image
                  src="/footer_logo.svg"
                  alt="AA³ Footer Logo"
                  width={600}
                  height={444}
                  className="h-100 w-auto"
                />
                
                {/* Copyright positioned at bottom left of logo */}
                <div className="absolute bottom-15 right-185 text-sm opacity-70 whitespace-nowrap font-[family-name:var(--font-dm-sans)]">
                  <p>© {new Date().getFullYear()} Abdellah. All rights reserved.</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:text-right">
                <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-inter)]">Contact</h3>
                <div className="space-y-2">
                  <p>Email: <a href="mailto:contact@aa3.site" className="hover:text-blue-400 transition-colors underline font-[family-name:var(--font-dm-sans)]">contact@aa3.site</a></p>
                </div>
              </div>

              {/* Social Media Icons - White color for black footer background */}
              <div className="absolute bottom-15 left-255 lg:text-right">
                <div className="flex space-x-4 mt-6 lg:justify-end">
                  <a href="https://x.com/HimoNotting" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image
                      src="/icons/social_link/X_logo_2023_original.svg"
                      alt="X (Twitter)"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </a>
                  <a href="https://github.com/MRQ67" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image
                      src="/icons/social_link/github-142-svgrepo-com.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </a>
                  <a href="https://www.instagram.com/simply_aboo/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image
                      src="/icons/social_link/instagram-167-svgrepo-com.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </a>
                  <a href="https://www.youtube.com/@abdellahqadi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image
                      src="/icons/social_link/youtube-168-svgrepo-com.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/abdellah-qadi-a71906251/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image
                      src="/icons/social_link/linkedin-svgrepo-com.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedProject={selectedProject}
      />

      {/* Design Modal */}
      <DesignModal
        isOpen={isDesignModalOpen}
        onClose={closeDesignModal}
        selectedDesign={selectedDesign}
      />
    </>
  );
}
