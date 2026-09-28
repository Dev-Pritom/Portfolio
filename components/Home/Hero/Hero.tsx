"use client"
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]"
    >
      {/* content */}
      <div className="relative z-10 text-center px-2 sm:px-6 w-full max-w-4xl mx-auto">
        {/* subtitle */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          HI, I&apos;m{" "}
          <span className="text-purple-800 dark:text-yellow-300 ">
            Pritom Saha
          </span>
        </h1>
        {/* TypeWrite Effects */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12 "
        >
          <TypeAnimation
            sequence={[
              "MERN STACK DEVELOPER",
              2000,
              "Open Source Contributor",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-muted-foreground text-lg dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Crafting Exeptional digital experience with modern technogies.
          Passionate about building sclable application and learning new
          frameworks.
        </p>
        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size={"lg"} className="w-fit mx-auto sm:mx-0">
            <a href="#projects" className="inline-flex items-center">
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size={"lg"} className="w-fit mx-auto sm:mx-0">
            <a
              href="/images/Pritom_CV.pdf"
              download="Pritom_CV.pdf"
              className="inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Cv
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
  
};

export default Hero;
