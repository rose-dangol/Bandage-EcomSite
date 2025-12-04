import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram,Twitter,Youtube,Facebook,Phone,Mail } from 'lucide-react';

const TopDetail = () => {
  return (
    <div className="bg-[#252B42] text-white text-sm/2 top-0 font-bold tracking-[0.2] hidden sm:block max-w-full">
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span><Phone size={"16px"}/></span>
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <span><Mail size={"16px"}/></span>
            <span className=''>michelle.rivera@example.com</span>
          </div>
        </div>

        <div className="">
          Follow us and get a chance to win 80% off!
        </div>
        <div className="flex items-center gap-4">
          <span className="">Follow us:</span>
          <a href="#" className=""><Instagram size={"16px"}/></a>
          <a href="#" className=""><Youtube size={"16px"}/></a>
          <a href="#" className=""><Facebook size={"16px"}/></a>
          <a href="#" className=""><Twitter size={"16px"}/></a>
        </div>
      </div>
    </div>
  )
}

export default TopDetail
