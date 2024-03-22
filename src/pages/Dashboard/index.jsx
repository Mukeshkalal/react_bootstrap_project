import { Container, Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });
  return (
    <Layout>
      <Container className="pt-2">
        <Card>
          <Card.Body>
            <Card.Header>
              <Card.Title>Dashboard</Card.Title>
            </Card.Header>
            <Card.Body>
              Change the underlying component CSS base class name and modifier
              class names prefix. This is an escape hatch for working with
              heavily customized bootstrap css.
            </Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Dashboard;
