import React from 'react'
import { useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import { FaToolbox } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export default function Sidepar() {
  const [open, setOpen] = useState(0)

  function active(index) {
    setOpen(index)
  }
  return (
    <div className='flex flex-col gap-[50px] font-cairo items-center xs:justify-center  w-full'>
      <p className='text-red-500 text-7xl font-extrabold xs:text-xl'> فكر </p>

 <div className='flex flex-col gap-2 w-full'>

  <div onClick={() => active(0)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 0 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden' >لوحة التحكم </p>
  <LuLayoutList className='text-xl text-gray-600' />
</div>
<div onClick={() => active(1)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 1 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الألعاب</p>
  <IoGameController className='text-xl text-gray-600' />
</div>
<div onClick={() => active(7)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 7 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '> المستخدمين  </p>
  <FaUsers className='text-xl text-gray-600' />
</div>
<div onClick={() => active(2)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 2 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الموقع</p>
  <ImEarth className='text-xl text-gray-600' />
</div>
<div onClick={() => active(3)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 3 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الأدوات</p>
  <FaToolbox className='text-xl text-gray-600' />
</div>
<div onClick={() => active(4)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 4 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الدعم الفني</p>
  <MdSupportAgent className='text-xl text-gray-600' />
</div>
<div onClick={() => active(5)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 5 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الإدارة</p>
  <RiAdminFill className='text-xl text-gray-600' />
</div>
<div onClick={() => active(6)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 6 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
  <p className='font-semibold text-gray-600 xs:hidden '>الملف الشخصي</p>
  <FaUser className='text-xl text-gray-600' />
</div>
      </div>

      <div className='flex flex-col gap-2 w-full'>
      <div onClick={() => active(8)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 8 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
        <p className='font-semibold text-gray-600 xs:hidden '> اتصال الدعم الفني  </p>
        <RiCustomerService2Line className='text-xl text-gray-600' />
          </div>
      <div onClick={() => active(9)} className={`flex pr-1 xs:justify-center xs:pr-0 cursor-pointer h-[35px] w-full ${open === 9 ? 'bg-red-500 rounded-lg' : ''} justify-end gap-[10px] items-center`}>
        <p className='font-semibold text-gray-600 xs:hidden '> الاعدادات </p>
        <IoSettings className='text-xl text-gray-600' />
          </div>
      <div onClick={() => active(10)} className={`flex pr-1 cursor-pointer h-[35px] w-full text-red-500/50 rounded-lg justify-end gap-[10px] items-center`}>
        <p className='font-semibold  xs:hidden '> تسجيل الخروج  </p>
        <CiLogout className='text-xl ' />
      </div>

      </div>

      

    </div>
  )
}
