import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action";
function Login() {
  const [serverErr, setServerErr] = useState("");
  const [alertPropmt, setAlertPropmt] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loginScehma = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(16),
  });
  return (
    <Layout>
      <Container className="py-3">
        <Card>
          <Card.Header className="bg-primary bg-opacity-75">
            Sign In
          </Card.Header>
          <Card.Body className="bg-primary bg-opacity-50">
            {serverErr ? (
              <Alert variant={alertPropmt} className="my-1">
                {serverErr}
              </Alert>
            ) : (
              ""
            )}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginScehma}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                axios
                  .post("https://api.darwinstech.com/api/login", values)
                  .then((resp) => {
                    setServerErr(resp.data.msg);
                    localStorage.setItem("token", resp.data.data.token);
                    setSubmitting(false);
                    setAlertPropmt("success");
                    resetForm();
                    dispatch(loginAction());
                    navigate("/dashboard");
                  })
                  .catch((err) => {
                    setServerErr(err.response.data.msg);
                    setAlertPropmt("danger");
                    setSubmitting(false);
                  });
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                isSubmitting,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
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
                    <Button type="submit" disabled={isSubmitting}>
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
                        "Login"
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

export default Login;
