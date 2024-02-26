import React, { useState } from 'react'
import Register from '../register/register'
import Login from '../login/login';
import JobPost from '../job/job-post';
import { useNavigate } from 'react-router-dom';

const Menu = () => {


    const menuItems = {
        register: <Register />,
        login: <Login />,
        jobPost: <JobPost/>
    }; 


    const navigater = useNavigate();
    const [activeMenuItem, setActiveMenuItem] = useState(null);
   
    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem); 
    };
    

    return (

        <div  className="h-screen bg-pink-100 ">
            <div className="h-48 bg-blue-950  flex  justify-center shadow-2xl ">
                <div className='h-30 w-30 flex left-3 mt-4 '>
                    <div className='h-16 w-48  flex items-center '>
                        <img className='ml-[3%] hover:opacity-30 rounded-full cursor-pointer w-14 h-14 absolute ' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="" />
                    </div>
                </div>
                <div className='w-full h-40 mt-1  flex  justify-end right-0'>
                    <button className='mt-6 h-8    text-red-600  hover:text-pink-300 hover:border-b-2 border-pink-300 mr-10' onClick={() => handleMenuItemClick('jobPost')}>Employers / Job Post</button>
                    <button className='mt-6 h-8  w-24  text-red-600  hover:text-pink-300 border-r  border-gray-500 hover:border-b-2 hover:border-pink-300' onClick={() => handleMenuItemClick('login')}>Log-in</button>
                    <button className='mt-6 h-8  w-24  mr-5 text-red-600  hover:text-pink-300 border-l  border-gray-500 hover:border-b-2 hover:border-pink-300' onClick={() => handleMenuItemClick('register')}>Register</button>
                </div>
                <div className=" flex  justify-center items-center h-[86vh] w-[94%]  absolute bottom-22  top-24 rounded  shadow-slate-950  shadow-2xl " >
                    <div className=' rounded w-full h-full flex  justify-center'>
                        <img className='rounded object-cover absolute w-full h-full' src="https://media.istockphoto.com/id/1327187531/tr/vektör/global-network-connection-world-map-point-and-line-composition-concept-of-global-business.jpg?s=612x612&w=0&k=20&c=vfLYnJcaXytQn-7D4XYJQZcbXrvvUjHrujtJAl6JoeA=" alt="" />
                        <h5 className='top-20 text-bold absolute text-red-600'>- welcome to HRMS-Personel jobs search -</h5>
                    </div>
                    <div className='opacity-80 absolute rounded bg-pink-50 w-[80%] max-w-lg mt-20 h-[84%]  p-10 flex flex-col items-center justify-center  shadow-slate-950  shadow-2xl'>
                        <div className='w-full h-[80%] flex items-center justify-center'>
                        {menuItems[activeMenuItem]}
                        </div>
                      

                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu
