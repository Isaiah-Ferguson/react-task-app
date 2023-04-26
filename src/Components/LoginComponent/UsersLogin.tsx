import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
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

                <Row className='mt-3'>
                    <Col className='text-center'>
                        <Link to="/UsersLogin">
                            <Button className='Button1'>Admin User</Button>
                        </Link>
                    </Col>
                </Row>



        </Container>
    </div>
  )
}
