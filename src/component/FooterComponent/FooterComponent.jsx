import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';

const FooterComponent = () => {
    const FooterLinks = {
        company:{
            title:"Company Info",
            links: ['About Us', 'Carrer', 'We are hiring', 'Blog']
        },
        legal:{
            title:"About Us",
            links: ['About Us', 'Carrer', 'We are hiring', 'Blog']
        },
        features:{
            title:"Features",
            links: ['Business Marketing','User Analytic','Live Chat','Unlimited Support']
        },
        resources:{
            title:"Resources",
            links:['IOS & Android','Watch a Demo','Customers','API']
        }
    }
  return (
    <footer className='bg-[#F9F9F9] h-auto pt-10 pb-10'>
        {/* top title + links */}
      <div className="max-w-11/12 mx-auto">
        {/* logo and social media */}
        <div className="flex justify-between items-start pb-8 border-b-2">
            <span className='font-bold text-2xl tracking-wide text-[#252B42]'>Bandage</span>
            <div className='flex gap-2.5'>
                <Facebook color='#23a6f0'/>
                <Instagram color='#23a6f0'/>
                <Twitter color='#23a6f0'/>
            </div>
        </div>
        <div className='grid grid-cols-5 p-5'>
            {Object.entries(FooterLinks).map(([key,section])=>(
                <div key={key}>
                    <span>{section.title}</span>
                    {section.links.map((link)=>(
                        <div>
                            <a>{link}</a>
                        </div>
                    ))}
                </div>
            ))}
            <div className=''>
                <span>Get In Touch</span><br/>
                <input placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    
        {/* bottom border? */}
      <div className='border-t w-full mx-auto pt-5 px-5'>
        <span className='font-semibold text-sm text-[#727272]'>Made With Love By Finland All Right Reserved</span>
      </div>
    </footer>
  )
}

export default FooterComponent
