// import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "../../../helper/swal";
import { createJob } from "../../../api/job/job";

const JobPost = () => {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        companyName: "",
        jobName: "",
        description: "",
        quantity: "",
        maxPrice: null,
        minPrice: null,
    };
    const validationSchema = Yup.object({
        // companyName: Yup.string().required("Don't leave blank"),
        jobName: Yup.string().required("Don't leave blank"),
        quantity: Yup.string().required("Don't leave blank"),
        description: Yup.string().required("Don't leave blank"),
    });

    const onSubmit = async (job) => {
        setLoading(true);
        try {
            const resp = await (createJob, job);
            console.log(resp.data);
            toast("Job sent successfully")
            // localStorage.setItem("token", resp.data.token)

        } catch (err) {
            console.log(err);
            toast('oops')
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Container className="mt-3 ">
            <Form noValidate onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter company name"
                        {...formik.getFieldProps("companyName")}
                        isInvalid={formik.touched.companyName && !!formik.errors.companyName}
                        isValid={formik.touched.companyName && !formik.errors.companyName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.companyName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Job Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter job name"
                        {...formik.getFieldProps("jobName")}
                        isInvalid={formik.touched.jobName && !!formik.errors.jobName}
                        isValid={formik.touched.jobName && !formik.errors.jobName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.jobName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter job name"
                        {...formik.getFieldProps("quantity")}
                        isInvalid={formik.touched.quantity && !!formik.errors.quantity}
                        isValid={formik.touched.quantity && !formik.errors.quantity}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.jobName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Max Price</Form.Label>
                    <Form.Control

                        type="text"
                        {...formik.getFieldProps("maxPrice")}
                        isInvalid={formik.touched.maxPrice && !!formik.errors.maxPrice}
                        isValid={formik.touched.maxPrice && !formik.errors.maxPrice}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.maxPrice}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Min Price</Form.Label>
                    <Form.Control

                        type="text"
                        {...formik.getFieldProps("minPrice")}
                        isInvalid={formik.touched.minPrice && !!formik.errors.minPrice}
                        isValid={formik.touched.minPrice && !formik.errors.minPrice}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.minPrice}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control

                        as="textarea" rows={6}
                        {...formik.getFieldProps("description")}
                        isInvalid={formik.touched.description && !!formik.errors.description}
                        isValid={formik.touched.description && !formik.errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.description}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <button
                    className=" bottom-0 right-0 h-10  w-24 rounded-lg bg-red-800 text-pink-300  hover:text-red-900 hover:bg-pink-200 "
                    type="submit"
                    disabled={!(formik.dirty && formik.isValid) || loading}
                >
                    {loading && <Spinner animation="border" size="sm" />} send
                </button>
            </Form>
        </Container>



    );
};

export default JobPost;
