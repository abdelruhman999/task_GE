import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import image from '../assets/download.jpg';
import { games } from '../assets/assets';
import { fillGamingcontext } from '../pages/Home';
export default function CategoryCard() {

  const { fillGaming, setGameFill } = useContext(fillGamingcontext)
  const handleDelete = (id) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: 'لن تتمكن من التراجع عن هذا الإجراء!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم، احذفه!',
      cancelButtonText: 'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        setGameFill((prev) => prev.filter((game) => game.id !== id)); 
        Swal.fire('تم الحذف!', 'تم حذف العنصر بنجاح.', 'success');
      }
    });
  };

  const handleEdit = async (id, oldTitle) => {
    const { value: newTitle } = await Swal.fire({
      title: 'تعديل اسم الكاتوجري',
      input: 'text',
      inputLabel: 'أدخل اسم الكاتوجري:',
      inputValue: oldTitle,
      showCancelButton: true,
      confirmButtonText: 'حفظ',
      cancelButtonText: 'إلغاء',
      inputValidator: (value) => {
        if (!value) {
          return 'العنوان لا يمكن أن يكون فارغًا!';
        }
      },
    });
  
    if (newTitle && newTitle !== oldTitle) {
      setGameFill((prev) =>
        prev.map((game) =>
          game.id === id ? { ...game, title: newTitle } : game
        )
      );
      Swal.fire('تم التعديل!', 'تم حفظ العنوان الجديد.', 'success');
    }
  };
  


  
 useEffect(()=>{
    setGameFill(games)
 },[])

  return (
    <>
      {fillGaming.length > 0 ? (
          fillGaming.map((game)=>{
              return(
                <div className='pb-[20px]'>
                    <div
                    key={game.id}
                    className="relative xs:w-[120px]  flex flex-col gap-[50px] w-[150px] rounded-lg shadow-md bg-white">
                    <div className="absolute top-[-20px] gap-3 xs:right-[12px] xs:top-[-13px] right-[20%] flex  text-xs text-gray-500 z-10">
                    <button onClick={() => handleEdit(game.id, game.title)} className="flex items-center gap-1 text-blue-600">
                        <FaEdit /> تعديل
                        </button>
                        <button onClick={()=>{handleDelete(game.id)}} className="flex items-center gap-1 text-red-600">
                        <FaTrash /> حذف
                        </button>
                    </div>
                    <div className="h-[100px] flex rounded-lg items-center justify-center bg-blue-100">
                        <img src={image}  className="h-full rounded-lg object-contain" />
                    </div>

                    <div className="bg-yellow-400 py-1 h-[40px] rounded-lg flex items-center justify-center text-center font-bold text-sm">
                        {game.title}
                    </div>
                    </div>
                </div>
                )
            })):'لا يوجد كاتوجريزات'
        }
    </>
  );
}
