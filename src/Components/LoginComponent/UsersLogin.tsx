import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function UsersLogin() {
    return (
        <div className='bgimage'>
            <Container>
                <Row className='Position'>
                    <Col>
                        <p className='PageTitle'>Master Task Tracker</p>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center mt-1'>
                        <Form.Group className="mb-1" controlId="formUsername">
                            <Form.Label className='Label-Format'>Username:</Form.Label>
                            <Form.Control className='text-center w-25 mx-auto bg' type="Text" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center mt-3'>
                        <Form.Group className="mb-1" controlId="formPassword">
                            <Form.Label className='Label-Format'>Password:</Form.Label>
                            <Form.Control className='text-center w-25 mx-auto bg' type="Password" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>



            </Container>
        </div>
    )
}
