import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className="py-16 bg-gray-10 dark:bg-gray-900">
      {/* SectionHeading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to Know the developer behind the code"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/antu.jpeg"}
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-center rounded-xl my-3"
            />
          </div>
        </div>
        {/* Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6 "
        >
          <h3 className="text-2xl font-semibold">
            A passionate web developer who loves to create
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm a full stack developer specializing in building
            modern,responsive and high-performance application.My Journey
            Started with curisity about how websites work,and it has evolved
            into a passion for creating seamless,user-focused,digital experience
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Passionate aboout writing clean code,architecting robust backends
            with Node.js and building dynamic user interfaces using React and
            Next.js. I beleive in continous learning and staying updated with
            the new technologies{" "}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* stats */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-anchor-placement="top-center"
        className="mt-16 w-[80%] mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 ">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About