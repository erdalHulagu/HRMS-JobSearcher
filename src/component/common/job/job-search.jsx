import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobCard from './job-card';
import JobDetails from './job-details';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from '../../../helper/swal';
import { useDispatch } from 'react-redux';
import { setJob } from '../../../redux/store/slices/job-description-slice';
import { getAllJob } from '../../../api/job/job';

function JobSearch() {
    const [query, setQuery] = useState(false)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [jobDetails, setJobDetails] = useState([])
    const [displayJobDetails, setDisplayJobDetails] = useState(false);






    useEffect(() => {

        const fetchJobs = async () => {
            setLoading(true);
            try {
                const resp = await getAllJob({ params: { query: search } });
                setJobs(resp.data);



            } catch (err) {
                console.log(err);
                toast("try again")
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchJobs();

        }

        // fetchJobs();
    }, [query, search]);


    const handleSearch = () => {
        setQuery(true);
    };

    const handleOnClick = (jobId) => {
        setDisplayJobDetails(true);
        const selectedJob = jobs.find(job => job.id === jobId);
        setJobDetails(selectedJob);
    }



    return (
        <div className='w-full h-full '>
            <div className='h-[16%] '>


                {/* tap bar */}
                <Navbar className="rounded-t  shadow-slate-900  shadow-md  h-40 w-full bg-purple-50 justify-content-between">
                    <Form className=' mx-10 w-[40%] ' >
                        <InputGroup className=' shadow-slate-900  shadow-md rounded'>
                            <InputGroup.Text style={{ background: '', color: 'gray', fontWeight: 'bold', fontSize: 'large' }} className=' h-20' id="basic-addon1">Job Name</InputGroup.Text>
                            <Form.Control className='bg-blue-900'
                                placeholder="search"
                                aria-label="Username"
                                aria-describedby="basic-addon"
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={search}
                            />
                        </InputGroup>
                    </Form>
                    <Form inline className='mx-10 w-[40%]'>
                        <InputGroup className=' shadow-slate-900  shadow-md rounded'>
                            <InputGroup.Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 'large' }} className='h-20 ' id="basic-addon1">City</InputGroup.Text>
                            <Form.Control
                                placeholder="search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={search}
                            />
                        </InputGroup>
                    </Form>
                </Navbar>
            </div >
            {/* left bar */}

            <div className='h-[84%] flex  items-center w-full '>
                <div className='w-[50%] max-w-md h-full overflow-hidden overflow-y-scroll  ' style={{ scrollbarWidth: 'thin' }}>
                    {jobs.map((job) => (<JobCard
                        key={job.id}
                        job={job}
                        onClick={handleOnClick}


                    />
                   
                    ))}
                </div>
                {/* right bar */}
                <div className='min-w-md w-full h-[94%] overflow-hidden overflow-y-scroll' style={{ scrollbarWidth: 'thin' }} >

                  { displayJobDetails && <JobDetails handleOnClick={handleOnClick} jobDetails={jobDetails}

                    />}

                </div>




            </div >



        </div>

    );
}

export default JobSearch;