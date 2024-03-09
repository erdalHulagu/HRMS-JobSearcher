import React from 'react'
import UserHome from '../user-home/user-home';
import { IoIosHome } from 'react-icons/io'
import { BiSolidUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import MyStatus from '../status/my-status';
import Group from '../group/group-chat/group';
import AddExsistingGroup from '../group/group-chat/comminity-group/create-existing-group/add-existing-comminity';
import JobSearch from '../../common/job/job-search';




const Home = () => {

    const navigater = useNavigate();

    const hadleHome = () => {
        navigater('/home');
    }
    const handleProfile = () => {
        navigater('/profile');
    }
    const handleSignOut = () => {
        navigater('/');
    }




    return (

        <div fluid className="h-screen bg-gradient-to-b from-purple-300 via-purple-200 to-white ">

            <div className="h-60 bg-blue-950  flex  justify-center shadow-2xl ">
                <div className='h-30 w-30 flex left-3 mt-4'>
                    <div className='h-20 w-20 hover:opacity-30  hover:bg-gray-100 rounded-full flex justify-center items-center ml-10'>
                        <img className=' rounded-full cursor-pointer w-20 h-20 absolute ' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="" />
                    </div>
                </div>
                <div className='w-full h-40 mt-1  flex  justify-end right-0'>
                    <div className=' flex  text-center justify-center  w-24 mt-8 h-8  border-gray-600  text-red-600 border-r hover:text-pink-300 hover:border-b-2 hover:border-pink-300  cursor-pointer' onClick={hadleHome}>
                        <IoIosHome className='mt-1 mr-1 ' />
                        <p>- Home</p>
                    </div>
                    <div className=' flex text-center justify-center w-24 mt-8 h-8  border-l border-gray-600 text-red-600  hover:text-pink-300 hover:border-b-2 hover:border-pink-300 mr-20 cursor-pointer' onClick={handleProfile}>
                        <BiSolidUser className='mt-1 mr-1 ' />
                        <p>- Profile</p>
                    </div>
                    <button className='flex text-center justify-center w-24 mt-8 h-8    text-red-600  hover:text-pink-300 hover:border-b-2 border-pink-300 mr-10' onClick={handleSignOut}  >Sign-out</button>
                </div>


                <div className=" h-[84vh] w-[94%] bg-gradient-to-b from-purple-100 via-slate-50 to-white absolute bottom-22  top-28 rounded  shadow-slate-900  shadow-xl " >

                    <JobSearch />
                    {/* <MyStatus/> */}

                    {/* <Group/> */}



                </div>
            </div>
        </div>

    )
}

export default Home