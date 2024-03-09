import React, { useCallback, useEffect, useState } from 'react'
import { toast } from './../../../helper/swal';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../redux/store/hooks/hooks';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
const JobDetails = ({jobDetails}) => {
    const [applyedJpb, setApplyedJob] = useState([])
    const [loading, setLoading] = useState(false);

    

    const applyJob = async() => {
        setLoading(true);
       try {
       const resp= await axios.post(`http://localhost:8080/jobSeekers/402/apply/${jobDetails.id}`)
   setApplyedJob(resp.data)
   console.log(resp.data)
toast("job applied succesfully")
       } catch (err) {

        console.log(err);
        toast("try again")
        
       }finally{

        setLoading(false);
       }

    }
    useEffect(() => {
        applyJob();
    }, []);

    
    


    return (
        <div className=' w-full  h-full'>
            <div className='w-full '>
                <div className='w-full h-30 flex flex-col items-center m-2 rounded'>
                <img className='w-[96%] h-30  rounded' src="https://cdn.pixabay.com/photo/2023/07/11/13/28/bird-8120621_1280.jpg" alt="" />
                <h1 className='text-gray-600 font-extrabold' >{jobDetails.companyName}</h1>
            </div>
            <div className='w-full flex flex-col max-h-[20%] m-2 object-contain '>
                    <span className=' text-gray-600 font-extrabold font-mono'>{jobDetails.jobName}</span>
                    <div className=' flex items-center justify-center w-28 border-2 border-gray-400 rounded-3xl'>
                        <span className='font-bold text-gray-500'>£{jobDetails.minPrice}k-£{jobDetails.maxPrice}k</span>
                    </div>

                    <span>city</span>
                </div>
            </div>
            
            <div>
               
                <div className='w-full flex flex-col m-2'>
                    <span>{jobDetails.description}</span>
                    <div>
                        <button > {loading && <Spinner animation="border" size="sm" />} Apply</button>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default JobDetails