import React, { useState } from 'react'
import {toast} from './../../../helper/swal';
const JobDetails = () => {
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
                    <span className=' text-gray-600 font-extrabold font-mono'>job name</span>
                    <div className=' flex items-center justify-center w-28 border-2 border-gray-400 rounded-3xl'>
                        <span className='font-bold text-gray-500'>£30-£40k</span>
                    </div>

                    <span>city</span>
                </div>
                <div className='w-full flex flex-col m-2'>
                    <div >
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus culpa corporis quia similique error! Veniam provident deleniti fugit qui quas eveniet quae, suscipit quidem quod autem ut officiis asperiores beatae.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem excepturi quas natus, culpa consequuntur minima nesciunt? Quibusdam dignissimos asperiores ad corrupti eius itaque ut nulla consequuntur facilis, architecto quo est? details Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis pariatur quam non error similique aliquid unde odit voluptas, necessitatibus, adipisci ipsum laborum placeat accusamus quidem quae cupiditate totam iure vitae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, fuga harum sequi dolorem itaque expedita! Officia iusto atque porro aliquid error assumenda impedit possimus dolorem nam ullam quidem, incidunt quod. </span>
                    </div>
                    <div>
                        <button onClick={handleApplied} className='w-32 h-10 bg-blue-900 rounded text-red-700 hover:text-pink-300 hover:bg-blue-800'>Apply</button>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default JobDetails