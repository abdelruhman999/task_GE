import React, { createContext } from 'react'
import Sidepar from '../Components/Sidepar'
import Navpar from '../Components/Navpar'
import Gaming from '../Components/Gaming'
import NavparGaming from '../Components/NavparGaming'

// إنشاء الكونتكست
export const fillGamingcontext = createContext()

export default function Home() {
  const [fillGaming, setGameFill] = React.useState([]);

  return (
    <fillGamingcontext.Provider value={{ fillGaming, setGameFill }}>
      <div className='flex relative flex-row-reverse '>
        <div className='w-[20%]'>
          <Sidepar />
        </div>
        <div className='w-[80%]'>
          <Navpar />
          <Gaming />
        </div>
        <div className='fixed shadow shadow-gray-400 hidden xs:block bottom-0 h-[80px] bg-white z-50'>
          <NavparGaming />
        </div>
      </div>
    </fillGamingcontext.Provider>
  )
}
