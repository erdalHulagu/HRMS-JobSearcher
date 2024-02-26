
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import {  Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "../../../helper/swal";

const Register = () => {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        firstName: "",
        lastName: "",
        birth: "",
        personalId: "",
        email: "",
        password: "",
        reTypePassword: "",
        phone: "",
        webside: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Type in a valid email adress")
            .required("Don't leave blank"),
        password: Yup.string().required("Type in password"),
        reTypePassword: Yup.string().required("Please reenter your password"),
        personalId: Yup.string().required("Enter your personel ID"),
    });

    const onSubmit = async (values) => {
        setLoading(true);
        
        try {
            const resp = await axios.post("http://localhost:8080/jobSeekers/createJobSeeker", values);
            console.log(resp.data);
            toast("jobSeeker created succesfully")

        } catch (err) {
            console.log(err);
            toast("OOPS! something gone wrong")
        }finally{
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Container className="mt-4 ">
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        {...formik.getFieldProps("firstName")}
                        isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="LastName"
                        {...formik.getFieldProps("lastName")}
                        isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                        isValid={formik.touched.lastName && !formik.errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Personal ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Personal ID"
                        {...formik.getFieldProps("personalId")}
                        isInvalid={formik.touched.personalId && !!formik.errors.personalId}
                        isValid={formik.touched.personalId && !formik.errors.personalId}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.personalId}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Date of Birth"
                        {...formik.getFieldProps("birth")}
                        isInvalid={formik.touched.birth && !!formik.errors.birth}
                        isValid={formik.touched.birth && !formik.errors.birth}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.birth}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        isValid={formik.touched.email && !formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...formik.getFieldProps("password")}
                        isInvalid={formik.touched.password && !!formik.errors.password}
                        isValid={formik.touched.password && !formik.errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Retype Password"
                        {...formik.getFieldProps("reTypePassword")}
                        isInvalid={formik.touched.reTypePassword && !!formik.errors.reTypePassword}
                        isValid={formik.touched.reTypePassword && !formik.errors.reTypePassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.reTypePassword}
                    </Form.Control.Feedback>
                </Form.Group>
                
                
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        {...formik.getFieldProps("phone")}
                        isInvalid={formik.touched.phone && !!formik.errors.phone}
                        isValid={formik.touched.phone && !formik.errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Web Side</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Web Side"
                        {...formik.getFieldProps("webside")}
                        isInvalid={formik.touched.webside && !!formik.errors.webside}
                        isValid={formik.touched.webside && !formik.errors.webside}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.webside}
                    </Form.Control.Feedback>
                </Form.Group>
                <button
                    className="bottom-0 right-0 h-10  w-24 rounded-lg bg-red-800 text-pink-300  hover:text-red-900 hover:bg-pink-200 "
                    type="submit"
                    disabled={!(formik.dirty && formik.isValid) || loading}
                >
                    {loading && <Spinner animation="border" size="sm" />} send 
                </button>
            </Form>
        </Container>
    );
};

export default Register;