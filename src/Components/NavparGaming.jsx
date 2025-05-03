import React, { useState } from 'react'

export default function NavparGaming() {

      const [open, setOpen] = useState(0)
    
      function active(index) {
        setOpen(index)
      }

  return (
    <div className='flex gap-5 text-xs  h-full items-center justify-center w-full '>
   
    <div onClick={() => active(0)} className={`flex  cursor-pointer h-[35px] w-fit p-2 ${open === 0 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
    <p className='font-semibold text-gray-600'> الالعاب الثابته  </p>
  </div>

  <div onClick={() => active(1)} className={`flex  cursor-pointer h-[35px] w-fit p-2 ${open === 1 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
    <p className='font-semibold text-gray-600'>الالعاب الموقته</p>
    
  </div>

  <div onClick={() => active(7)} className={`flex  cursor-pointer h-[35px] w-fit p-2 ${open === 7 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
    <p className='font-semibold text-gray-600'> العاب واجهة الاطفال   </p>
   
  </div>

  <div onClick={() => active(2)} className={`flex  cursor-pointer h-[35px] w-fit p-2 ${open === 2 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
    <p className='font-semibold text-gray-600'>العاب واجهة الطلاب</p>
   
  </div>
</div>
  )
}
