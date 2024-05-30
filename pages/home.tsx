import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Circles from '@/components/homecomponents/Circles'
import Skills from '@/components/homecomponents/Skills'
import Stats from '@/components/homecomponents/Stats'
import Workshops from '@/components/homecomponents/Workshops'
import React from 'react'

const home = () => {
  return (
    <div className='px-3 max-w-sm mx-auto'>
        <div className='fixed bottom-0'><NavBar /></div>
        <Alert />
        <Stats />
        <Skills />
        <Workshops />
        <Circles />
    </div>
  )
}

export default home