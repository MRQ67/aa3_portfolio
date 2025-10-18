"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SpinningText } from "@/components/magicui/spinning-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipText } from "@/components/magicui/flip-text";
import { Particles } from "@/components/magicui/particles";
import { getTopProjects } from "@/data/projects";
import { getFeaturedDesigns } from "@/data/designs";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { DesignCard } from "@/components/DesignCard";
import { useProject } from "@/contexts/ProjectContext";
import Silk from "@/components/Silk";

export default function Home() {
  const topProjects = getTopProjects(4);
  const featuredDesigns = getFeaturedDesigns();
  const { isModalOpen, selectedProject, closeModal } = useProject();

  return (
    <>
      {/* Global Particles Background for non-hero sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed inset-0 z-0"
      >
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
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
          className="w-screen relative left-1/2 right-1/2 -mx-[50vw] flex flex-col md:grid md:grid-cols-[2fr_1fr] items-stretch md:items-center min-h-screen p-4 md:p-8 overflow-hidden rounded-b-[80px] md:rounded-b-[120px] bg-background"
        >
          {/* Lightning Background for Hero Section Only - Full Width */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Silk />
          </motion.div>
          {/* Mobile top bar with logo + resume */}
           <div className="flex md:hidden w-full items-center justify-between z-20 px-2 pt-2">
             <div className="w-10 h-10 relative">
               <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
             </div>
             <button className="px-3 py-2 border-2 border-foreground rounded-full text-xs hover:bg-foreground hover:text-background transition-all duration-300 font-medium">
               My Resume
             </button>
           </div>
           {/* Logo at the top (desktop only) */}
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="hidden md:flex md:absolute md:top-8 md:left-16 z-20 items-center gap-4"
           >
             <div id="hero-logo" className="w-18 h-18 md:absolute md:top-2 md:left-4">
               <Image
                 src="/logo.svg"
                 alt="Logo"
                 fill
                 className="object-contain"
               />
             </div>
           </motion.div>

          {/* Right side - Resume button and Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-full h-full flex flex-col items-center justify-center relative order-1 md:order-2 mt-8 md:mt-0"
          >
             {/* My Resume Button - Aligned with logo and theme toggle */}
             <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="hidden md:block md:absolute md:top-4 md:right-28 px-6 py-3 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300 font-medium font-[family-name:var(--font-dm-sans)] z-20"
              >
                My Resume
              </motion.button>
 
             {/* Profile Image with spinning text and outside circle effect */}
             <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
               className="relative w-56 h-56 md:w-80 md:h-80"
             >
              {/* Spinning Text Component around the image */}
              <div className="absolute inset-0 w-full h-full scale-65 md:scale-100">
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
                  src="/images/abdellah_image.jpg"
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
             className="flex flex-col gap-5 md:gap-8 z-10 mt-12 md:mt-24 order-2 md:order-1 max-w-2xl ml-2 md:ml-12 text-center md:text-left"
           >
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               className="text-4xl sm:text-5xl md:text-8xl font-[family-name:var(--font-dm-sans)] leading-tight"
             >
               <div className="flex justify-center md:justify-start items-baseline">
                 <span className="font-normal text-4xl sm:text-5xl md:text-8xl">I&apos;m</span>
                 <span className="ml-4"></span>
                 <FlipText
                   className="text-4xl sm:text-5xl md:text-8xl font-bold font-[family-name:var(--font-dm-sans)]"
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
               <span className="text-2xl md:text-5xl font-[family-name:var(--font-ubuntu-mono)]">
                 Software Developer &
               </span>
               <SparklesText
                 className="text-2xl md:text-5xl text-blue-400 font-[family-name:var(--font-sarina)] italic"
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
               className="flex gap-6 md:gap-10 mt-8 md:mt-8 justify-center md:justify-start items-center ml-0 md:ml-12"
             >
              <a href="https://github.com/MRQ67" target="_blank" rel="noopener noreferrer" className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/github-142-svgrepo-com.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="h-8 md:h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://x.com/HimoNotting" target="_blank" rel="noopener noreferrer" className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/X_logo_2023_original.svg"
                  alt="X (Twitter)"
                  width={32}
                  height={32}
                  className="h-8 md:h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.linkedin.com/in/abdellah-qadi-b229382a2/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="h-8 md:h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.instagram.com/simply_aboo/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/instagram-167-svgrepo-com.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="h-8 md:h-10 w-auto dark:invert"
                />
              </a>
              <a href="https://www.youtube.com/@aa3_studio" target="_blank" rel="noopener noreferrer" className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/youtube-168-svgrepo-com.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="h-8 md:h-10 w-auto dark:invert"
                />
              </a>
            </motion.div>
          </motion.div>



          {/* Logo and down arrow at bottom (desktop only) */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 1.8 }}
             className="hidden md:flex md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 flex-col items-center"
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
                I&#39;m a passionate developer with a strong foundation in{" "}
                <span style={{ color: "#32ADE6" }}><strong>Next.js</strong></span>,{" "}
                <span style={{ color: "#32ADE6" }}><strong>Go</strong></span>,{" "}
                <span style={{ color: "#32ADE6" }}><strong>Python</strong></span>, and{" "}
                <span style={{ color: "#32ADE6" }}><strong>Kotlin</strong></span>. I&#39;m also passionate about{" "}
                <span style={{ color: "#32ADE6" }}><strong>Graphics Design & Video Editing</strong></span>{" "}
                and practice them regularly with projects.
              </p>
              
              <p className="mb-4">
                I&#39;m currently studying{" "}
                <span style={{ color: "#32ADE6" }}><strong>Electrical & Computer Engineering</strong></span>{" "}
                @ <span style={{ color: "#32ADE6" }}><strong>Dire Dawa University</strong></span>.
              </p>
              
              <p>
                <strong>When I&#39;m not on my pc fixing bugs</strong>, i like to watching movies/tv series or play video games
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
        <div className="py-20 space-y-2">
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <p className="text-sm md:text-base  text-foreground/80 font-[family-name:var(--font-dm-sans)]">
              so here are
            </p>
          </motion.div>

          {/* Velocity Scroll Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden w-full"
          >
            <VelocityScroll
              defaultVelocity={2}
              numRows={2}
              className="w-full text-2xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-dm-sans)]"
            >
              My Projects
            </VelocityScroll>
          </motion.div>

          {/* Horizontal Scrollable Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-16"
          >
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-6 min-w-max pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
                {topProjects.map((project, index) => (
                  <div key={project.id} className="flex-shrink-0 w-64 md:w-80 snap-start">
                    <ProjectCard
                      project={project}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* View All Projects Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 font-medium font-[family-name:var(--font-dm-sans)]"
              >
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Design Gallery Section (mirrored from Projects) */}
        <div className="py-5">
          {/* Velocity header like Projects */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex justify-center">
              <span className="text-sm md:text-base text-foreground/60 font-[family-name:var(--font-dm-sans)]">and</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden w-full"
            >
              <VelocityScroll
                defaultVelocity={2}
                numRows={2}
                className="w-full text-2xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-dm-sans)]"
              >
                My Designs
              </VelocityScroll>
            </motion.div>
          </div>

          {/* Horizontal Scrollable Designs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-16"
          >
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-6 min-w-max pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
                {featuredDesigns.slice(0, 3).map((design, index) => (
                  <div key={design.id} className="flex-shrink-0 w-64 md:w-80 snap-start">
                    <DesignCard
                      design={design}
                      index={index}
                      enableModal={false}
                      useAnimate={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* View All Designs link styled like Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <Link
              href="/designs"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 font-medium font-[family-name:var(--font-dm-sans)]"
            >
              View All Designs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Skills Header with VelocityScroll */}
        <div className="py-12">
          <div className="space-y-2 md:space-y-4">
            <div className="flex justify-center">
              <span className="text-sm md:text-base text-foreground/60 font-[family-name:var(--font-dm-sans)]">and also</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden w-full"
            >
              <VelocityScroll
                defaultVelocity={2}
                numRows={2}
                className="w-full text-2xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-dm-sans)]"
              >
                My Skills
              </VelocityScroll>
            </motion.div>
            <div className="flex justify-center">
              <span className="text-sm md:text-base text-foreground/60 font-[family-name:var(--font-dm-sans)]">or my tech stack</span>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="py-14 space-y-12">
          {/* Row 1: Frontend Dev only */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-dm-sans)]">Frontend Dev</span>
            </div>
            <div className="grid grid-cols-6 gap-x-0 gap-y-2">
              {[
                { src: "/icons/nextjs.svg", label: "Next.js" },
                { src: "/icons/react.svg", label: "React" },
                { src: "/icons/tailwindcss.svg", label: "Tailwind CSS" },
                { src: "/icons/shadcn.svg", label: "Shadcn" },
                { src: "/icons/javascript.svg", label: "JavaScript" },
                { src: "/icons/typescript.svg", label: "TypeScript" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.06 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="flex flex-col items-center justify-center gap-2 transition-transform"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={80}
                    height={80}
                    className={[
                      "Shadcn",
                      "Tailwind CSS",
                    ].includes(item.label)
                      ? "filter invert brightness-0 object-contain"
                      : "object-contain"}
                    style={{ height: "40px", width: "auto" }}
                  />
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: Mobile Dev & Backend Dev side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobile Dev */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-dm-sans)]">Mobile Dev</span>
              </div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                {[
                  { src: "/icons/flutter.svg", label: "Flutter" },
                  { src: "/icons/react-native.svg", label: "React native" },
                  { src: "/icons/kotlin.svg", label: "Kotlin" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.06 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="flex flex-col items-center justify-center gap-2 transition-transform"
                  >
                    <Image src={item.src} alt={item.label} width={80} height={80} className="object-contain" style={{ height: "36px", width: "auto" }} />
                    <span className="text-xs md:text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Dev */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-dm-sans)]">Backend Dev</span>
              </div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                {[
                  { src: "/icons/nodejs.svg", label: "Node.js" },
                  { src: "/icons/go.svg", label: "Go" },
                  { src: "/icons/supabase.svg", label: "Supabase" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.06 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="flex flex-col items-center justify-center gap-2 transition-transform"
                  >
                    <Image src={item.src} alt={item.label} width={80} height={80} className="object-contain" style={{ height: "36px", width: "auto" }} />
                    <span className="text-xs md:text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Design category on its own */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-dm-sans)]">Design</span>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 max-w-xs">
                {[
                  { src: "/icons/adobe-illustrator.svg", label: "illustrator" },
                  { src: "/icons/figma.svg", label: "figma" },
                  { src: "/icons/canva.svg", label: "canva" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.06 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="flex flex-col items-center justify-center gap-2 transition-transform"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={80}
                      height={80}
                      className="object-contain"
                      style={item.label === "canva" ? { width: "32px", height: "36px" } : { height: "36px", width: "auto" }}
                    />
                    <span className="text-xs md:text-sm font-medium capitalize">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32 flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-16 text-center font-[family-name:var(--font-dm-sans)]"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
          >
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                href="https://github.com/MRQ67"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 md:h-20 md:w-20 hover:scale-110 transition-transform flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/icons/social_link/github-142-svgrepo-com.svg"
                  alt="GitHub"
                  width={64}
                  height={64}
                  className="h-12 w-auto md:h-16 dark:invert"
                />
              </motion.a>
              <span className="text-sm font-medium font-[family-name:var(--font-dm-sans)] text-foreground/80">@MRQ67</span>
            </motion.div>

            {/* X (Twitter) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                href="https://x.com/HimoNotting"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 md:h-20 md:w-20 hover:scale-110 transition-transform flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/icons/social_link/X_logo_2023_original.svg"
                  alt="X (Twitter)"
                  width={64}
                  height={64}
                  className="h-12 w-auto md:h-16 dark:invert"
                />
              </motion.a>
              <span className="text-sm font-medium font-[family-name:var(--font-dm-sans)] text-foreground/80">@HimoNotting</span>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                href="https://www.linkedin.com/in/abdellah-qadi-b229382a2/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 hover:scale-110 transition-transform flex items-center justify-center">
                <Image
                  src="/icons/social_link/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={64}
                  height={64}
                  className="h-16 w-auto md:h-16 dark:invert"
                />
              </motion.a>
              <span className="text-sm font-medium font-[family-name:var(--font-dm-sans)] text-foreground/80">Abdellah Qadi</span>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                href="https://www.instagram.com/simply_aboo/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 md:h-20 md:w-20 hover:scale-110 transition-transform flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/icons/social_link/instagram-167-svgrepo-com.svg"
                  alt="Instagram"
                  width={64}
                  height={64}
                  className="h-12 w-auto md:h-16 dark:invert"
                />
              </motion.a>
              <span className="text-sm font-medium font-[family-name:var(--font-dm-sans)] text-foreground/80">@simply_aboo</span>
            </motion.div>

            {/* YouTube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                href="https://www.youtube.com/@aa3_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 md:h-20 md:w-20 hover:scale-110 transition-transform flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/icons/social_link/youtube-168-svgrepo-com.svg"
                  alt="YouTube"
                  width={64}
                  height={64}
                  className="h-12 w-auto md:h-16 dark:invert"
                />
              </motion.a>
              <span className="text-sm font-medium font-[family-name:var(--font-dm-sans)] text-foreground/80">@aa3_studio</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Section */}
        <footer className="bg-black text-white pt-40 pb-0 w-screen relative left-1/2 right-1/2 -mx-[50vw] rounded-t-[3rem] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header with name */}
            <div className="mb-8 -mt-18">
              <h2 className="text-5xl font-thin" style={{ fontFamily: "var(--font-italiana)" }}>Abdellah Qadi</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start relative pb-8 lg:pb-0">
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

              {/* Center - Large Footer Logo - Desktop only */}
              <div className="hidden lg:flex justify-center relative">
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

              {/* Social Media Icons - Desktop positioning */}
              <div className="hidden lg:block absolute bottom-15 left-255 lg:text-right">
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

              {/* Mobile Social Media Icons */}
              <div className="lg:hidden flex justify-center mt-8">
                <div className="flex space-x-4">
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

              {/* Mobile Copyright */}
              <div className="lg:hidden text-center mt-6 text-sm opacity-70 font-[family-name:var(--font-dm-sans)]">
                <p>© {new Date().getFullYear()} Abdellah. All rights reserved.</p>
              </div>
            </div>
          </div>

          {/* Mobile Footer Logo - Half visible at bottom */}
          <div className="lg:hidden absolute bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Image
              src="/footer_logo.svg"
              alt="AA³ Footer Logo"
              width={300}
              height={222}
              className="w-auto h-32 opacity-80"
            />
          </div>
        </footer>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedProject={selectedProject}
      />

      {/* Design Modal removed */}
    </>
  );
}
