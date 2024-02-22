import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobCard from './job-card';

function JobSerach() {
    return (
        <div className='w-full h-full '>
            <div className='h-[16%] bg-black'>


                {/* tap bar */}
                <Navbar className="rounded-t  shadow-slate-900  shadow-md  h-40 w-full bg-slate-200 justify-content-between">
                    <Form className='mx-10 w-[40%] '>
                        <InputGroup className=' shadow-slate-900  shadow-md'>
                            <InputGroup.Text style={{ color: 'darkblue', fontWeight: 'bold', fontSize: 'large' }} className=' h-20' id="basic-addon1">Job Name</InputGroup.Text>
                            <Form.Control className='bg-blue-900'
                                placeholder="search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    <Form inline className='mx-10 w-[40%]'>
                        <InputGroup className=' shadow-slate-900  shadow-md'>
                            <InputGroup.Text style={{ color: 'darkblue', fontWeight: 'bold', fontSize: 'large' }} className='h-20 ' id="basic-addon1">City</InputGroup.Text>
                            <Form.Control
                                placeholder="search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                </Navbar>
            </div >
            {/* left bar */}
            <div className='h-[84%] w-[50%] bg-slate-100 overflow-scroll'>
            {[...Array(50)].map((photo) => <Col   ><JobCard />  </Col>)}
                

            </div>

            {/* right bar */}
            <div>

            </div>
        </div>

    );
}

export default JobSerach;