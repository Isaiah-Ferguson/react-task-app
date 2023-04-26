import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function CreateAccountAdminComponent() {
  return (
    <div className="background1">
      <Container>

        <Row>
          <Col><div className="header">Create Account Admin</div></Col>
          <Col>
            <Form className="form1">
              <Form.Group controlId="formBasicEmail">
                <h1 className="inputtoptext"> Email: </h1>
                <Form.Control className="input" type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <h1 className="inputtoptext">Username: </h1>
                <Form.Control className="input" type="email" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <h1 className="inputtoptext">Password:</h1>
                <Form.Control className="input" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
              </Form.Group>

            </Form>
            <div className="Submitbutton"  >
              <Button  className="Submitbutton1">
                Submit
              </Button>
            </div>
          </Col>


        </Row>

      </Container>


    </div>



  )
}
