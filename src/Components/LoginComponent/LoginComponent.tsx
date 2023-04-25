import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className='bgimage'>
            <Container>
                <Row className='Position'>
                    <Col>
                        <p className='PageTitle'>Master Task Tracker</p>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col className='text-center'>
                        <Link to="/UsersLogin">
                            <Button className='Button1'>Admin User</Button>
                        </Link>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='text-center'>
                        <Link to="/UsersLogin">
                            <Button className='Button1'>User Login</Button>
                        </Link>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='text-center'>
                        <Link to="/CreateAccountComponent">
                            <p className='text-format'>Create a User, Click Here!</p>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
