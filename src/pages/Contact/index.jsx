import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Field, Formik } from "formik";
import ThankYou from "../../assets/img.jpg";
import * as Yup from "yup";

function Contact() {
  const registerScehma = Yup.object({
    username: Yup.string().required().min(3).max(30),
    email: Yup.string().required().email(),
    contact: Yup.string().required().min(10).max(10),
    message: Yup.string().min(10).max(150),
    gender: Yup.string().required(),
    hobbies: Yup.array().required("Select at least one hobby"),
  });
  return (
    <Layout>
      <Container className="py-3">
        <Card className="p-2">
          <Row>
            <Col md={6}>
              <Card>
                <Card.Header className="bg-primary bg-opacity-75">
                  Contact ME
                </Card.Header>
                <Card.Body className="bg-primary bg-opacity-50">
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      contact: "",
                      message: "",
                      gender: "",
                      hobbies: "",
                    }}
                    
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                      console.log(values);
                      setTimeout(() => {
                        setSubmitting(false);
                      }, 4000);
                      resetForm();
                    }}
                    validationSchema={registerScehma}
                  >
                    {({
                      values,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      errors,
                      touched,
                      handleBlur,
                    }) =>
                      isSubmitting ? (
                        <img
                          src={ThankYou}
                          alt="thankyou"
                          width="100%"
                          height="465px"
                        />
                      ) : (
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="username" className="my-1">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control
                              type="text"
                              onChange={handleChange}
                              value={values.username}
                              onBlur={handleBlur}
                              isInvalid={!!errors.username}
                              isValid={!!touched.username}
                            />
                            {errors.username && touched.username ? (
                              <Form.Control.Feedback type="invalid">
                                {errors.username}
                              </Form.Control.Feedback>
                            ) : null}
                          </Form.Group>
                          <Form.Group controlId="email" className="my-1">
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={!!errors.email}
                              isValid={!!touched.email}
                            />
                            {errors.email && touched.email ? (
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            ) : null}
                          </Form.Group>
                          <Form.Group controlId="contact" className="my-1">
                            <Form.Label>Enter Contact</Form.Label>
                            <Form.Control
                              type="number"
                              value={values.contact}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={!!errors.contact}
                              isValid={!!touched.contact}
                            />
                            {errors.contact && touched.contact ? (
                              <Form.Control.Feedback type="invalid">
                                {errors.contact}
                              </Form.Control.Feedback>
                            ) : null}
                          </Form.Group>
                          <Form.Group controlId="message" className="my-1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              value={values.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={!!errors.message}
                              isValid={!!touched.message}
                            />
                            {errors.message && touched.message ? (
                              <Form.Control.Feedback type="invalid">
                                {errors.message}
                              </Form.Control.Feedback>
                            ) : null}
                          </Form.Group>
                          <Form.Group className="my-2">
                            Gender
                            <div className="form-control mb-2">
                              <label className="mx-1">
                                <Form.Check
                                  name="gender"
                                  inline
                                  type="radio"
                                  value="male"
                                  onChange={handleChange}
                                />
                                Male
                              </label>
                              <label className="mx-2">
                                <Form.Check
                                  inline
                                  type="radio"
                                  name="gender"
                                  onChange={handleChange}
                                  value="female"
                                />
                                FeMale
                              </label>
                              <label className="mx-2">
                                <Form.Check
                                  inline
                                  type="radio"
                                  name="gender"
                                  value="other"
                                  onChange={handleChange}
                                />
                                Other
                              </label>
                            </div>
                          </Form.Group>
                          <Form.Group className="my-2" id="checkbox-group">
                            Hobbies
                            <div className="form-control mb-2">
                              <label className="mx-2">
                                <Form.Check
                                  name="hobbies"
                                  inline
                                  value="codeing"
                                  onChange={handleChange}
                                  checked={values.hobbies.includes(
                                    "codeing",
                                    []
                                  )}
                                />
                                Codeing
                              </label>
                              <label className="mx-2">
                                <Form.Check
                                  inline
                                  name="hobbies"
                                  onChange={handleChange}
                                  value="crikcet"
                                  checked={values.hobbies.includes(
                                    "crikcet",
                                    []
                                  )}
                                />
                                Crikcet
                              </label>
                              <label className="mx-2">
                                <Form.Check
                                  inline
                                  name="hobbies"
                                  value="traveling"
                                  onChange={handleChange}
                                  checked={values.hobbies.includes(
                                    "traveling",
                                    []
                                  )}
                                />
                                Traveling
                              </label>
                            </div>
                            {errors.hobbies && touched.hobbies ? (
                              <div className="text-danger">
                                {errors.hobbies}
                              </div>
                            ) : null}
                          </Form.Group>
                          <Button
                            type="submit"
                            className="form-control"
                            disabled={isSubmitting}
                          >
                            SEND
                          </Button>
                        </Form>
                      )
                    }
                  </Formik>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} style={{ marginTop: "10px" }}>
              <Card style={{ height: "530px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.268077609944!2d72.82510549999999!3d21.181507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc53566d6b%3A0xa05f4515a070c233!2sDarwin!5e0!3m2!1sen!2sin!4v1706176464673!5m2!1sen!2sin"
                  height="100%"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </Layout>
  );
}

export default Contact;
