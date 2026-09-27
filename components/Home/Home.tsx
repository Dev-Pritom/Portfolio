"use client"
import React, { useEffect } from 'react'
import ThemeToggler from '../Helper/ThemeToggler'
import Logo from '../Helper/Logo'
import { Navlinks } from '@/Constant/Constant'
import Link from 'next/link'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
   const initAos = async()=>{
    await import ('aos')
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
   }
   initAos()
  }, [])
  
  return (
    <div className='overflow-hidden '>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Experience/>
     <Contact/>
    </div>
  )
}

export default Home