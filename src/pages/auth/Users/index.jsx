import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User() {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate()
  const userApi = () => {
    axios
      .get("https://api.darwinstech.com/api/users")
      .then((resp) => {
        setUserData(resp.data.data.data);

        // console.log("Response=====>", resp);
      })
      .catch((err) => {
        console.log("Errors=====>", err);
      });
  };

  const confirmDelete = (data) => {
    console.log(data.id);
    axios
      .delete(`https://api.darwinstech.com/api/users/${data.id}`)
      .then((res) => {
        console.log("response===>", res);
        location.reload();
      })
      .catch((err) => {
        console.log("error===>", err);
      });
  };

  const handleEdit = (data) => {
    navigate('/user/'+data.id)
    console.log(data.id);
  };

  const apiPage = () => {
    axios
      .get(`https://api.darwinstech.com/api/users?page=${count}`)
      .then((resp) => {
        setUserData(resp.data.data.data);
      })
      .catch((err) => {
        console.log("Errors=====>", err.message);
      });
  };
  const handleNext = () => {
    setCount(count + 1);
    apiPage();
  };
  const handlePvr = () => {
    setCount(count - 1);
    apiPage();
  };
  useEffect(() => {
    userApi();
  }, []);
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
                {userData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <th>{data.created_at}</th>
                      <th>{data.updated_at}</th>
                      <th>
                        <Button
                          variant="primary"
                          className="mx-md-1 my-sm-2 "
                          onClick={() => {
                            handleEdit(data);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="mx-md-1 my-1"
                          onClick={() => {
                            confirmDelete(data);
                          }}
                        >
                          Delete
                        </Button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>

        <div className="d-flex justify-content-between py-2">
          <Button onClick={handlePvr}>Privise</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </Container>
    </Layout>
  );
}

export default User;
