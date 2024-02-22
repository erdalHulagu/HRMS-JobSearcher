// import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";

const JobPost = () => {


    const initialValues = {
        companyName: "",
        jobName: "",
        description: "",
        quantity: "",
        remember: false,
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Type in a valid email adress")
            .required("Don't leave blank"),
        password: Yup.string().required("Type in password"),
    });

    const onSubmit = async (values) => {
        try {
            const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login", values);
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token)

        } catch (err) {
            console.log(err);
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
                        {...formik.getFieldProps("comapanyName")}
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control

                        as="textarea" rows={12}
                        {...formik.getFieldProps("description")}
                        isInvalid={formik.touched.description && !!formik.errors.description}
                        isValid={formik.touched.description && !formik.errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.jobName}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </Container>



    );
};

export default JobPost;
