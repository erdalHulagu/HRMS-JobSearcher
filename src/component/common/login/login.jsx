// import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiSolidLeftArrowSquare } from "react-icons/bi"
import * as Yup from "yup";
import axios from "axios";
import {toast} from "./../../../helper/swal" ;

const Login = () => {
    const [loading, setLoading] = useState(false);

    const initialValues = {
     
        email: "",
        password: "",
        
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Type in a valid email adress")
            .required("Don't leave blank"),
        password: Yup.string().required("Type in password"),
    });

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const resp = await axios.get("http://localhost:8080/jobSeekers/email", values);
            
            console.log(resp.data);
            toast("login success")
            // localStorage.setItem("token", resp.data.token)

        } catch (err) {
            console.log(err);
            toast("try again")
            // alert(err.response.data.message);
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
        <Container className="mt-3 ">
            <Form noValidate onSubmit={formik.handleSubmit}>

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

export default Login;