import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobCard = () => {
    const navigate = useNavigate();

    const hadleMessageProfile = () => {

        navigate('/Profile');


    }


    return (

        <div onClick={hadleMessageProfile} className='w-[90%] h-[30%] flex justify-center items-center m-3 shadow-slate-800 shadow-md hover: text-pink-300  hover:bg-slate-300 rounded'>
            <div className=' flex justify-between items-center w-full h-full'>
                <div className='w-[30%] h-30 rounded-full flex flex-col items-center '>
                    <img className=' hover:opacity-40 cursor-pointer w-14 h-14 rounded ' src="https://cdn.pixabay.com/photo/2023/07/11/13/28/bird-8120621_1280.jpg " alt="erdal" />{/*https://cdn.pixabay.com/photo/2023/07/11/13/28/bird-8120621_1280.jpg */}
                </div>
                <div className='w-[70%]'>
                    <span className='text-blue-950 hover:text-red-700 cursor-pointer font-bold '>Job Name</span>
                    <div className='flex h-[5%]'>
                        <div className='flex items-center mx-2 justify-center bg-slate-200  w-[40%] border-2 border-slate-700 rounded-xl '>
                            <span className='text-blue-950 text-xs my-2 font-bold'>min price</span>
                        </div>
                        <div className='flex items-center justify-center  bg-slate-200  w-[40%] border-2 border-slate-700 rounded-xl '>

                            <span className='text-blue-950 text-xs my-2 font-bold'>max price</span>
                        </div>
                    </div>


                    <p className='text-blue-950 text-xs '>des</p>

                </div>

            </div>
        </div>

    )
}

export default JobCard
