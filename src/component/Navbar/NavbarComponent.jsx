import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
return (
    <div className='text-m'>
      <div className="p-5 flex justify-between">

        {/* left side */}
        <div className='flex items-center justify-start gap-10'>
          <span className='font-bold text-xl tracking-wide text-[#252B42]'>Bandage</span>
          <div className='flex gap-3 text-gray-700 font-medium'>
            <Link className=''>Home</Link>
            <Link>Shop🔻</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Pages</Link>
          </div>
        </div>

        {/* right side */}
        <div className='flex gap-5 text-[#23A6F0] font-medium'>
          <div className="flex gap-0.5">
            <span>🧑🏼</span>
            <span>Login/Register</span>
          </div>
          <div className='flex gap-2'>
            <span>Search</span>
            <span>Cart</span>
            <span>Wishlist</span>
        </div>
      </div>
    </div>
    </div>
  );

}

export default NavbarComponent
