import { Container, Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import ApiCall from "../ApiCall";

function Home() {
  return (
    <Layout>
      <Container style={{ paddingTop: "5px" }}>
        <Card>
          <Card.Header>Home</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
              <ApiCall />
      </Container>
    </Layout>
  );
}

export default Home;
