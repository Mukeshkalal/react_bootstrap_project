import { Container, Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";

function Error() {
  return (
    <Layout>
      <Container style={{ paddingTop: "5px" }}>
        <Card className="w-25 m-auto text-center">
          <Card.Header>
            <Card.Title>Error</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>404, Page is not Found</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Error;
