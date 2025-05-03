import React, { useContext, useEffect, useState } from 'react'
import { categories ,games } from '../assets/assets'
import { fillGamingcontext } from '../pages/Home'

export default function Navpar() {
    const [open, setOpen] = useState(0)
    const {setGameFill } = useContext(fillGamingcontext)

    function filterdata(title) { 
      const filteredData = games.filter((game) => game.title === title);
      setGameFill(filteredData)
      console.log(title);
      
    }

    
  return (
    <div className='flex flex-col w-full xs:p-1 xs:pt-2  gap-5 p-3 bg-white '>
    <div className='w-full flex justify-between flex-row-reverse xs:p-1  p-3  '>
      
            <div className='flex xs:gap-1 flex-row-reverse items-center gap-4'>
            <div>
            <i className="fas fa-user"></i> 
            </div>
            <div>
            <i className="fas fa-bell"></i>
            </div>
            <select className='bg-red-400/50 rounded  border-none outline-none cursor-pointer'>
                <option >Dashboard</option>
                <option>Analytics</option>
                <option>Settings</option>
            </select>
            </div>
    
                    <p className='text-black text-xl font-extrabold'>

                Dashbord
                    </p>
     
    </div>
    <div className='w-full bg-gray-100 h-[0.5px] xs:hidden'></div>

    <div className='flex gap-5 justify-end w-full xs:hidden '>
        {
           categories.map((category, index) => (
            <div key={category.id} onClick={() =>
              {
              filterdata(category.title)  
           
             setOpen(index)
              }
             } className={`flex cursor-pointer h-[35px] w-fit p-2 ${open === index ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
              <p className='font-semibold text-gray-600'>{category.title}</p>
            </div>
            ))
        }
 </div>
    </div>
  )
}
