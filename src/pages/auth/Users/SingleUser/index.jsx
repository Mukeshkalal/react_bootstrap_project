import axios from "axios";
import Layout from "../../../../components/Layout";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleUser() {
  const [user, setUser] = useState({});
  const param = useParams();
  const navigate = useNavigate();
  const url = "https://api.darwinstech.com/api/users/";

  const apiCall = () => {
    axios
      .get(url + param.userId)
      .then((resp) => {
        setUser(resp.data)
        // console.log(resp.data);
      })
      .catch((err) => {console.log(err.message, 'error======><><');});
  };
  const handleUpdate = () => {
    console.log("Edit");
  };

  const handleCancel = () => {
    console.log("delete");
    navigate('/users')
  };

  useEffect(() => {
    apiCall();
  });
  return (
    <Layout>
      <Container className="pt-3">
        <Row>
          <Col sm={12}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <th>{user.created_at}</th>
                  <th>{user.updated_at}</th>
                  <th>
                    <Button
                      variant="primary"
                      className="mx-md-1 my-sm-2 "
                      onClick={handleUpdate}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="mx-md-1 my-1"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SingleUser;
