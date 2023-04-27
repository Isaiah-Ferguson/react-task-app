import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createAccount } from "../../DataServices/DataServices";


export default function CreateAccountComponent() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let userData = {
    id: 0,
    Username : username,
    Password: password
}
const handleSubmit = () => {
createAccount(userData);
navigate("/UsersLogin");
}

  return (
      <Container>
         <div className="background2">
        <Row>
          <Col><div className="header">Create Account</div></Col>
          <Col>
            <Form className="form1">

              <Form.Group  controlId="formBasicEmail">
                <h1 className="inputtoptext">Username: </h1>
                <Form.Control className="input" type="email" placeholder="Enter Username"  onChange={({ target: { value } }) => setUsername(value)}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <h1 className="inputtoptext">Password:</h1>
                <Form.Control className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
              </Form.Group>
              <Form.Group  controlId="formBasicCheckbox">
              </Form.Group>

            </Form>
            <div className="Submitbutton"  >
            <Button className="Submitbutton1" onClick={handleSubmit}>
            Submit
          </Button>
          </div>
          </Col>


        </Row>
        </div>
      </Container>

    




  )
}
