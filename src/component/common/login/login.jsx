// import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiSolidLeftArrowSquare } from "react-icons/bi"
import * as Yup from "yup";
import axios from "axios";

const Login = () => {

    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        adress: "",
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
            // alert(err.response.data.message);
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                 </Form>
        </Container>



    );
};

export default Login;