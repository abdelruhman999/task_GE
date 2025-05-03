import React, {  useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { fillGamingcontext } from '../pages/Home';

export default function Gaming() {
  const [open, setOpen] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [gameName, setGameName] = useState('');
  function active(index) {
    setOpen(index);
  }

  function handleAddGame(e) {
    e.preventDefault();
    console.log("اللعبة الجديدة:", gameName);
    setGameName('');
    setShowForm(false);
  }


  return (
    <div className='flex flex-col w-full p-3 gap-[50px]'>
      <div className='w-full items-center xs:p-0 flex justify-between flex-row-reverse p-3'>
        <p className='text-gray-400 font-semibold xs:text-base text-lg'>الالعاب الموقته</p>
        <div
          className='flex pr-1 cursor-pointer justify-center h-[35px] xs:text-sm xs:w-[100px] w-[150px] bg-red-500 rounded-lg gap-[10px] items-center'
          onClick={() => setShowForm(true)}
        >
          <p className='font-semibold text-white'>اضافة لعبه</p>
        </div>
      </div>

   
      {showForm && (
        <form onSubmit={handleAddGame} className='w-full flex flex-col items-end gap-3'>
          <input
            type='text'
            placeholder='اسم اللعبة'
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className='w-[300px] border border-gray-400 px-3 py-2 text-end'
          />
          <div className='flex gap-3'>
            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
              حفظ
            </button>
            <button
              type='button'
              onClick={() => setShowForm(false)}
              className='bg-gray-300 text-black px-4 py-2 rounded'
            >
              إلغاء
            </button>
          </div>
        </form>
      )}


      <div className='flex xs:flex-col xs:items-center flex-row-reverse justify-between gap-5 w-full'>
        <div className='relative flex'>
          <input
            placeholder='بحث عن لعبه'
            type='search'
            className='bg-transparent xs:h-[30px] w-[650px] xs:w-[250px] border border-black outline-none text-end pr-[10px]'
          />
          <i className='fa-solid xs:text-sm xs:top-[5px] fa-magnifying-glass text-xl absolute top-[5px] left-2 text-gray-400'></i>
        </div>

        <div className='flex gap-5'>
          {[1, 2, 3].map((num, index) => (
            <div
              key={index}
              onClick={() => active(index)}
              className={`cursor-pointer px-4 py-2 rounded ${
                open === index ? 'bg-gray-900 text-white' : 'bg-gray-200'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

 
      <div className='flex justify-center gap-5 flex-wrap'>
          <CategoryCard/>
      </div>
    </div>
  );
}
