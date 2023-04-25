import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Button } from 'react-bootstrap';

export default function () {
  return (
    <div className='bgimage'>
        <Container>
            <Row>
                <Col>
                <p className='PageTitle'>Master Task Tracker</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='text-center'>
                    <Button className='Button1'>Admin User</Button>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col className='text-center'>
                    <Button className='Button1'>User Login</Button>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col className='text-center'>
                    <p className='text-format'>Create a User, Click Here!</p>
                </Col>
            </Row>

        </Container>
    </div>
  )
}
