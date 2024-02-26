import React, { useState } from 'react'
import { toast } from './../../../helper/swal';
const JobDetails = (props) => {
    const { id, jobName, discription } = props;
    const [apllied, setApllied] = useState(false);

    const handleApplied = () => {

        toast('Appilled Successfully');

    }


    return (
        <div className='w-full  h-full'>
            <div className='w-full h-[30%] flex flex-col m-2 rounded'>
                <img className='w-[96%] h-[90%] text-center rounded ' src="https://cdn.pixabay.com/photo/2023/07/11/13/28/bird-8120621_1280.jpg" alt="" />
                <h5 className='text-gray-600 font-extrabold' >COMPANY NAME</h5>
            </div>
            <div>
                <div className='w-full flex flex-col h-[20%] m-2'>
                    <span className=' text-gray-600 font-extrabold font-mono'>{jobName}</span>
                    <div className=' flex items-center justify-center w-28 border-2 border-gray-400 rounded-3xl'>
                        <span className='font-bold text-gray-500'>£30-£40k</span>
                    </div>

                    <span>city</span>
                </div>
                <div className='w-full flex flex-col m-2'>
                    <span>{discription}</span>
                    <div>
                        <button onClick={handleApplied} className='w-32 h-10 bg-blue-900 rounded text-red-700 hover:text-pink-300 hover:bg-blue-800'>Apply</button>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default JobDetails