import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id='about' className='py-16 bg-gray-100 dark:bg-gray-900'>
        <SectionHeading title_1='About' title_2='Me' description='Get to know the developer behind the code'/>
        <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
            <div 
            data-aos="fade-right" 
            data-aos-delay="0" data-aos-anchor-placement="top-center"
            className='relative flex items-center justify-center'>

                {/* Outer glow ring */}
                <div className='absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-sky-300 opacity-25 blur-2xl animate-pulse'></div>

                {/* Rotating gradient border — SVG */}
                <svg className='absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] animate-spin' style={{ animationDuration: '12s' }} viewBox="0 0 360 360" fill="none">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <circle cx="180" cy="180" r="178" stroke="url(#ringGradient)" strokeWidth="3" strokeDasharray="12 8" strokeLinecap="round" />
                </svg>

                {/* Solid gradient accent ring — SVG */}
                <svg className='absolute w-[272px] h-[272px] sm:w-[332px] sm:h-[332px]' viewBox="0 0 332 332" fill="none">
                  <defs>
                    <linearGradient id="solidRing" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <circle cx="166" cy="166" r="163" stroke="url(#solidRing)" strokeWidth="4" opacity="0.7" />
                </svg>

                {/* Profile image */}
                <div className='relative w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10'>
                    <Image src={"/images/user.png"} alt='profile' fill className='object-cover' />
                </div>

                {/* Floating dot decorations */}
                <div className='absolute top-4 right-8 w-3 h-3 rounded-full bg-blue-500 opacity-80 animate-bounce' style={{ animationDelay: '0s' }}></div>
                <div className='absolute bottom-6 left-6 w-2 h-2 rounded-full bg-cyan-400 opacity-70 animate-bounce' style={{ animationDelay: '0.4s' }}></div>
                <div className='absolute top-1/2 left-2 w-2 h-2 rounded-full bg-sky-400 opacity-60 animate-bounce' style={{ animationDelay: '0.8s' }}></div>
            </div>

            <div 
            data-aos="fade-left" 
            data-aos-delay="150" data-aos-anchor-placement="top-center"
            className='space-y-6'>
                <h3 className='text-2xl font-semibold'>
                    A passionate developer who loves to create
                </h3>
                <p className='text-muted-foreground leading-relaxed'>Hello! I'm Ayasha Khatun, a passionate Web Developer with hands-on experience in building dynamic and responsive web applications. I specialize in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB, and other modern web development technologies.</p>
                <p className='text-muted-foreground leading-relaxed'>I love solving problems through code and constantly learn, experiment, and improve my skills to stay up to date with the latest industry trends. My main focus is to build intuitive, user-friendly, and visually appealing digital experiences.</p>
            </div>
        </div>
    </div>

  )
}

export default About;