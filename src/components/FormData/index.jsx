import Form from "react-bootstrap/Form";

function FormData() {
  return (
    <Form>
      <div className="m-3 ms-2 d-flex">
        <Form.Group controlId="male" className="d-flex mx-2 ">
          <Form.Check type="radio" name="gender" label='Male'/>
        </Form.Group>
        <Form.Group controlId="female" className="d-flex mx-2">
          <Form.Check type="radio" name="gender" label='Female'/>
        </Form.Group>
        <Form.Group controlId="other" className="d-flex mx-2">
          <Form.Check type="radio" name="gender" label='Other'/>
        </Form.Group>

        {/* <label htmlFor="male">
          <input type="radio" id="male" name="gander" />
          <span className="ms-1">Male</span>
        </label>
        <label htmlFor="female">
          <input type="radio" id="female" name="gander" />
          <span className="ms-1">Female</span>
        </label>
        <label htmlFor="other">
          <input type="radio" id="other" name="gander" />
          <span className="ms-1">Other</span>
        </label> */}
      </div>
    </Form>
  );
}

export default FormData;
