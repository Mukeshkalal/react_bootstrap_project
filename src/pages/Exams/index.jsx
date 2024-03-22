import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import axios from "axios";

function Exams() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [fileds, setFileds] = useState([]);

  const callApi = () => {
    setIsLoading(true);
    axios
      .get("https://api.darwinstech.com/api/exams", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer "+ localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        setFileds(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Erroe=====>qq", err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
      setIsLoggedIn(false);
      callApi();
    }
  }, []);
  return (
    <Layout>
      <Container className="pt-2 " variant='primary'>
        {isLoggedIn ? (
          <Card >
            <Card.Header className="bg-primary bg-opacity-75">If You have not Login In to First</Card.Header>
            <Card.Body className="bg-primary bg-opacity-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eos
              nobis est. Go and <Link to="/login" className="link-success">Login</Link> To the page
            </Card.Body>
          </Card>
        ) : (
          <Row className="g-3">
            <h2>Exams data</h2>
            <>
              {isLoading ? (
                <div className="align-items-center">
                  <Spinner animation="border" variant="primary" /> Loading....
                </div>
              ) : (
                ""
              )}
              {fileds.map((exm, i) => {
                return (
                  <Col md={3} key={exm.id}>
                    <Card >
                      <Card.Header>
                        {i + 1}.{" "}
                        {exm.name.length >= "20"
                          ? exm.name.slice(0, 20) + "..."
                          : exm.name}
                      </Card.Header>
                      <Card.Body>
                        {exm.description.length >= "75"
                          ? exm.description.slice(0, 75) + "..."
                          : exm.description}
                        <div className="d-flex justify-content-between">
                          <div title="marks">
                            <FaCheckCircle color="red" size={20} /> {exm.marks}
                          </div>
                          <div title="timeLimite">
                            <FaClock color="red" size={20} /> {exm.duration}
                          </div>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Button variant="primary" className="w-100">Read More</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </>
          </Row>
        )}
      </Container>
    </Layout>
  );
}

export default Exams;
