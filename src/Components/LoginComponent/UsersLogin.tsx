import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { login, GetLoggedInUserData } from '../../DataServices/DataServices';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function UsersLogin() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    const handleSubmit = async () => {
        let userData = {
            Username : username,
            Password: password
        }
        let token = await login(userData);

        if(token.token != null){
          localStorage.setItem("Token", token.token);
          await GetLoggedInUserData(username);
          navigate("/TaskTrackerComponent");
        }
    }

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
                            <Form.Control className='text-center w-25 mx-auto bg' type="Text" placeholder=""   onChange={({ target: { value } }) => setUsername(value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center mt-3'>
                        <Form.Group className="mb-1" controlId="formPassword">
                            <Form.Label className='Label-Format'>Password:</Form.Label>
                            <Form.Control className='text-center w-25 mx-auto bg' type="Password" placeholder=""  onChange={(e) => setPassword(e.target.value)}  />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='text-center'>
                        <Link to="/TaskTrackerComponent">
                            <Button className='Button1' onClick={handleSubmit}>Submit</Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
