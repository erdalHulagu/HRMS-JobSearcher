
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import {  Container, Form } from "react-bootstrap";
import * as Yup from "yup";

const Register = ({handleSubmit}) => {
    

    const initialValues = {
        firstname: "",
        lastname: "",
        personalId:"",
        email: "",
        password: "",
        reTypePassword:"",
        phonenumber: "",
        remember: false,
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
        try {
            const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login", values);
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token)

        } catch (err) {
            console.log(err);
            // alert(err.response.data.message);
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
                        {...formik.getFieldProps("firstname")}
                        isInvalid={formik.touched.firstname && !!formik.errors.firstname}
                        isValid={formik.touched.firstname && !formik.errors.firstname}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="LastName"
                        {...formik.getFieldProps("lastname")}
                        isInvalid={formik.touched.lastname && !!formik.errors.lastname}
                        isValid={formik.touched.lastname && !formik.errors.lastname}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.lastname}
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
                        {formik.errors.name}
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
                        type="text"
                        placeholder="Retype Password"
                        {...formik.getFieldProps("ReTypePassword")}
                        isInvalid={formik.touched.reTypePassword && !!formik.errors.reTypePassword}
                        isValid={formik.touched.reTypePassword && !formik.errors.reTypePassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                
                
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        {...formik.getFieldProps("phonenumber")}
                        isInvalid={formik.touched.phonenumber && !!formik.errors.phonenumber}
                        isValid={formik.touched.phonenumber && !formik.errors.phonenumber}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phonenumber}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;