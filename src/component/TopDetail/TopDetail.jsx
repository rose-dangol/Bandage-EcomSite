import React from 'react'
import { Link } from 'react-router-dom'

const TopDetail = () => {
  return (
    <div className="bg-[#252B42] text-white text-sm top-0">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        <div className="font-semibold">
          Follow us and get a chance to win 80% off!
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Follow us:</span>
          <a href="#" className="">🍎</a>
          <a href="#" className="">🍇</a>
          <a href="#" className="">🍈</a>
        </div>
      </div>
    </div>
  )
}

export default TopDetail
