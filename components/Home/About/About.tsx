import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-900'>
        <SectionHeading title_1='About' title_2='Me' description='Get to know the developer behind the code'/>
        <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
            <div className='relative'>
                <div className='aspect-square rounded-2xl overflow-hidden p-2'>
                    <Image src={"/images/user.png"} alt='profile' fill className='  object-cover' />
                </div>
            </div>
            <div className='space-y-6'>
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