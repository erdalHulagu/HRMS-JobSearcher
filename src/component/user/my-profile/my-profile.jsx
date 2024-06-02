import React, { useEffect, useState } from 'react'
import { BiSolidLeftArrowSquare } from 'react-icons/bi'
import { IoIosHome } from 'react-icons/io';
import { MdPhotoCamera } from 'react-icons/md';
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from '../../../helper/swal';
import axios from 'axios';
import JobCard from '../../common/job/job-card';

const MyProfile = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [jobSeeker, setJobSeeker] = useState([]);
    const [jobSeekersJob, setJobSeekersJob] = useState([]);




    //--------------------------------------
    const handleNavigate = () => {
        navigate(-1);
    }

    const handleSignOut = () => {
        navigate("/");
    }


    const fetchJobSeeker = async () => {
        setLoading(true);
        try {
            const resp = await axios.get("http://localhost:8080/jobseekers/402");
            setJobSeeker(resp.data);
            toast("login success")
        } catch (err) {
            console.log(err);
            toast("Please try again")
        } finally {
            setLoading(false);
        }
    };
    const fetchAppliedJobs = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(`http://localhost:8080/jobseekers/getAllJobs/402`);
            setJobSeekersJob(resp.data);
        console.log(resp.data);
        } catch (err) {
            console.log(err);
            toast("Failed to fetch applied jobs. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    
    useEffect(() => {
        fetchJobSeeker();
        fetchAppliedJobs();
    }, []);
    // bunlari yapacagim



    return (
        <div fluid className="h-screen">
            <div className="h-48 bg-blue-950  flex  justify-center shadow-2xl ">
                <div className=' w-full h-32 flex left-3 justify-between items-center'>

                    <div className=' ml-[3%] '>
                        <BiSolidLeftArrowSquare className=' text-red-600  hover:text-pink-300 hover:border-b-2 border-pink-300 w-6 h-6  cursor-pointer ' onClick={handleNavigate} />
                    </div>
                    <div className='mt-1  flex items-center justify-end right-0 '>
                        <div className='w-24  flex justify-center cursor-pointer border-r  border-gray-500   text-red-600  hover:text-pink-300 hover:border-b-2 hover:border-pink-300  ' onClick={handleNavigate}>
                            <IoIosHome className='mt-1 -24 ' />-Home

                        </div>
                        <button className='  mr-3 w-24  text-red-600  hover:text-pink-300 hover:border-b-2 hover:border-pink-300 border-l  border-gray-500 ' onClick={handleSignOut}  >Sign-out</button>
                    </div>
                </div>


                <div className=" h-[86vh] w-[94%] bg-gradient-to-b from-purple-300 via-purple-100 to-white absolute bottom-22  top-28 rounded-lg shadow-slate-700 shadow-2xl ">


                    <div className='w-full h-full rounded flex'>
                        {/* left bar */}
                        <div className='max-w-md w-[50%] h-full rounded border-r border-slate-300'>
                            <div className='w-full h-full flex-col flex items-center '>
                                <div className='border-r w-full  h-[25%] top-0 flex flex-col justify-center rounded'>

                                    <label htmlFor="imgInput">
                                        <div className=' w-full h-full flex items-center justify-center '>
                                            <img className='shadow-2xl shadow-slate-800 rounded cursor-pointer w-36 h-36 my-5 ' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="" />
                                            <MdPhotoCamera className='absolute ml-20 text-gray-400 w-14 h-14 p-3 hover:opacity-30 hover:bg-slate-100 hover:text-blue-950 cursor-pointer rounded-full' />
                                        </div>

                                    </label>
                                    <input type="file" id='imgInput' className='hidden' />
                                </div>
                                <div className='w-full  h-[40%] rounded-bl-lg'>
                                    <div className='w-[94%] flex flex-col  border-slate-400 mx-[3%] '>

                                        <div className='border-y border-gray-400 flex flex-col w-[90%] h-16 ml-[10%]'>
                                            <span className='text-red-900 '>First Name :</span>
                                            <span className='text-blue-950 text-lg '>{jobSeeker.firstName} </span>

                                        </div>
                                        <div className='border-b border-gray-400 flex flex-col w-[90%] h-16 ml-[10%]'>
                                            <span className='text-red-900 '>Last name :</span>
                                            <span className='text-blue-950 text-lg'>{jobSeeker.lastName} </span>

                                        </div>
                                        <div className='border-b border-gray-400 flex flex-col w-[90%] h-16 ml-[10%]'>
                                            <span className='text-red-900 '>Birth : </span>
                                            <span className='text-blue-950 text-lg'>{jobSeeker.birth} </span>

                                        </div>
                                        <div className='border-b border-gray-400 flex flex-col w-[90%] h-16 ml-[10%]'>
                                            <span className='text-red-900 '>Phone Number :</span>
                                            <span className='text-blue-950 text-lg'>{jobSeeker.phone}</span>
                                        </div>
                                        <div className='border-b border-gray-400 flex flex-col w-[90%] h-16 ml-[10%]'>
                                            <span className='text-red-900 '>Email Adress :</span>
                                            <span className='text-blue-950 text-lg'>{jobSeeker.email}</span>
                                        </div>


                                    </div>



                                </div>
                                <h5 className=' rounded text-pink-200  text-center w-full bg-blue-900'>SUMMARY</h5>
                                <div className='h-[35%] w-full hover:overflow-y-scroll justify-center items-center overflow-clip'>

                                    <div className='w-full h-[25%] p-2'>
                                        <span className=' text-gray-500 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore assumenda aliquam quisquam molestias hic quibusdam officiis quos porro molestiae laborum ullam ipsam, delectus, voluptatibus at odit deleniti, dolore in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae praesentium maxime fugiat doloremque. Id porro provident reprehenderit? Rerum illum nisi esse dolorem sint quod molestiae reiciendis eligendi atque excepturi!</span>

                                    </div>

                                </div>

                            </div>

                        </div >
                        {/* right bar */}
                        <div className='w-[65%] h-full  rounded '>
                            <div className='rounded scrollbar-track-slate-400 h-full overflow-hidden ' style={{ scrollbarWidth: 'thin' }}>
                               { jobSeekersJob.map((photo) => <Col   ><JobCard />  </Col>)}
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        // ------

    )
}

export default MyProfile;
