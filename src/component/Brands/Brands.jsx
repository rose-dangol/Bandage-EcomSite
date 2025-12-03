import React from 'react'
import LyftLogo from '/src/assets/BrandLogo/Lyft_logo.svg'
import HooliLogo from '/src/assets/BrandLogo/hooli-logo.svg'
import AwsLogo from '/src/assets/BrandLogo/aws-logo.svg'
import RedditLogo from '/src/assets/BrandLogo/reddit-logo.svg'
import ZaraLogo from '/src/assets/BrandLogo/zara-logo.svg'

const Brands = () => {
  return (
    <div className='p-4 '>
        <div className="flex justify-center gap-30 items-center">
            <img src={LyftLogo} alt="Lyft Logo" className='w-20 h-20' />
            <img src={HooliLogo} alt="Lyft Logo" className='w-20 h-20' />
            <img src={AwsLogo} alt="Lyft Logo" className='w-20 h-20' />
            <img src={RedditLogo} alt="Lyft Logo" className='w-20 h-20' />
            <img src={ZaraLogo} alt="Lyft Logo" className='w-20 h-20' />
        </div>      
    </div>
    
  )
}

export default Brands