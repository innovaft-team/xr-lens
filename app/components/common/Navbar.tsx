import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between w-158.75 mx-auto'>
<a href="#">
    <Image src="/images/svg/logo.svg"
    alt="Logo"
    width={24.77}
    height={25.85}
    className=''
    />
</a>
<div className="flex items-center gap-[19.06px]">
    <a className='text-charcoal leading-[103%] font-normal text-[12.7px]' href="#">Technologie</a>
    <a className='text-charcoal leading-[103%] font-normal text-[12.7px]' href="#">Menu</a>
    <a className='bg-bright-blue font-medium leading-[154%] text-[11.12px] text-white py-[6.5px] px-[15.18px] rounded-full' href="#">Découvrir XR Lens</a>

</div>
    </nav>
    </>
  )
}

export default Navbar
