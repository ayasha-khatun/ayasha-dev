import Logo from '@/components/Helper/Logo'
import { NavLinks } from '@/Constant/Constant'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-100 fixed w-full'>
      <div className='flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto'>
        <Logo/>
        <div className=' hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link,index)=>{
            return <Link key={index} href={link.href} className='dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200'>
              <p>{link.name}</p>
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav