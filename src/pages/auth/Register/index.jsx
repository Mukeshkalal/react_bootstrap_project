import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [serverErr, setServerErr] = useState("");
  let navigate = useNavigate();
  const registerScehma = Yup.object({
    name: Yup.string().required().min(3).max(30),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(16),
    c_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "plz password by mach"
    ),
  });
  return (
    <Layout>
      <Container className="py-3">
        <Card>
          <Card.Header className="bg-primary bg-opacity-75">
            Sign Up
          </Card.Header>
          <Card.Body className="bg-primary bg-opacity-50">
            {serverErr ? (
              <Alert className="alert-danger my-2">{serverErr}</Alert>
            ) : (
              ""
            )}
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                c_password: "",
              }}
              validationSchema={registerScehma}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                axios
                  .post("https://api.darwinstech.com/api/register", values)
                  .then((resp) => {
                    console.log(resp);
                    resetForm();
                    navigate("/login");
                  })
                  .catch((err) => {
                    // console.log("errrorr=====>", err.response.data.message);
                    setServerErr(err.response.data.message);
                    setSubmitting(false);
                  });
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                isSubmitting,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="name">
                      <Form.Label>Enter Name</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={values.name}
                        type="text"
                        className={
                          errors.name && touched.name ? "is-invalid" : ""
                        }
                        // className="is-invalid"
                      />
                      {errors.name && touched.firstName ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="email">
                      <Form.Label>Enter Email</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={values.email}
                        className={errors.email ? "is-invalid" : ""}
                        type="email"
                      />
                      {errors.email ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                      <Form.Label>Enter Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={values.password}
                        className={errors.password ? "is-invalid" : ""}
                        type="password"
                      />
                      {errors.password ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="c_password">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={values.c_password}
                        className={errors.c_password ? "is-invalid" : ""}
                        type="password"
                      />
                      {errors.c_password ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.c_password}
                        </Form.Control.Feedback>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    
                    <Button
                      type="submit"
                      onClick={() => {
                        setShow(true);
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            as="span"
                            className="me-2"
                            animation="border"
                            size="sm"
                            aria-hidden="true"
                          />
                          <span role="status">Loading...</span>
                        </>
                      ) : (
                        "REGISTER"
                      )}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Register;
