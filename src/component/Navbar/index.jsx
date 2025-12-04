import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {TextAlignJustify, Search, Heart,User, ShoppingCart, ChevronDown} from 'lucide-react';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false)
  console.log(mobileView)
return (
    <div className='text-md w-full box-border'>
      <div className="p-6 flex justify-between font-bold items-center text-sm">

        {/* left side: LOGO + LINKS */}
        <div className='flex items-center md:justify-start justify-between gap-30'>
          <span className='text-2xl tracking-wide text-[#252B42]'>Bandage</span>
          <div className='hidden md:flex gap-3 text-[#252B42] font-medium'>
            <Link className=''>Home</Link>
            <Link className='flex items-center'>Shop <ChevronDown size={"16px"}/></Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Pages</Link>
          </div>
        </div>

        {/* right side */}
        <div className='flex gap-5 text-[#23A6F0]'>
          <div className="hidden md:flex items-center gap-1.5">
            <span><User size={"16px"}/></span>
            <span className='text-sm'>Login / Register</span>
          </div>
          <div className='flex gap-4 items-center'>
            <span><Search size={"16px"}/></span>
            <span><ShoppingCart size={"16px"}/></span>
            <span><Heart size={"16px"}/></span>
            <span className="inline sm:hidden hover:bg-gray-100" onClick={() => setMobileView(!mobileView)}><TextAlignJustify size={"16px"}/></span>
        </div>
      </div>

    </div>
    {mobileView &&
      <div className="flex flex-col gap-3 justify-center items-center text-[#737373] font-medium tracking-wide p-7">
        <Link>Home</Link>
        <Link>Product</Link>
        <Link>Pricing</Link>
        <Link>Contact</Link>
      </div>
    }
    </div>
  );

}

export default Navbar
