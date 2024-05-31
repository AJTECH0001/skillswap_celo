import NavBar from '@/components/NavBar'
import Info from '@/components/skilldetailcomponent/Info'
import Portfolio from '@/components/skilldetailcomponent/Portfolio'
import Reviews from '@/components/skilldetailcomponent/Reviews'
import Similar from '@/components/skilldetailcomponent/Similar'
import React from 'react'

const skilldetail = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Info />
        <Portfolio />
        <Reviews />
        <Similar />
      </div>
    </div>
  )
}

export default skilldetail