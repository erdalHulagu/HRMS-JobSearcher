import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from '../../../helper/swal';
import { useAppSelector } from '../../../redux/store/hooks/hooks';


const JobCard = ({job,onClick}) => {
   
 





    return (

        <div onClick={() => onClick(job.id)} className='cursor-pointer w-[90%] h-[30%] flex flex-col  justify-center items-center m-3 shadow-slate-800 shadow-md  hover:bg-purple-200 rounded'>
            <div className=' flex w-full h-[50%]'>
                <div className='w-[40%] m-1 h-full rounded flex flex-col items-start '>
                    <img className=' shadow-slate-800 shadow-md cursor-pointer w-24 h-24  rounded ' src="https://cdn.pixabay.com/photo/2023/07/11/13/28/bird-8120621_1280.jpg " alt="" />
                    <span className='text-sm mt-1 font-extrabold'>{job.companyName}</span>
                </div>
                <div className='w-[65%] h-full flex flex-col items-center mx-1'>
                    <div className='w-full h-8 flex justify-center '>
                        <span className='text-gray-700 cursor-pointer font-bold h-10'>{job.jobName}</span>
                    </div>
                    <div className='flex h-10 w-max-[50%]'>
                        <div className=' shadow-slate-800 shadow-md flex items-center justify-center bg-pink-50  p-1 w-15  border-2 border-gray-700 rounded-3xl '>
                            <span className='text-gray-700 text-xs  font-bold '>£{job.maxPrice}k</span>
                        </div>
                        <div className=' shadow-slate-800 shadow-md flex items-center justify-center  bg-pink-50 ml-1 w-15  border-2 border-gray-700 rounded-3xl '>
                            <span className='text-gray-700 text-xs p-1 font-bold'>£{job.minPrice}k</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-[90%] h-40 m-1 overflow-hidden'>
              

                <span className=' text-gray-600 text-sm  w-full h-full '>{job.description}</span>
            </div>
        </div>

    )
}

export default JobCard
