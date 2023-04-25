
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, Form} from 'react-bootstrap'

 export default function TaskTrackerEditModal() {
    const [show, setShow] = useState(false);
    const [viewable, setViewable] = useState("Select Privacy");
    const [username, setUsername] = useState('');
    const [title, setTitle]  = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { setViewable(event.target.value) };
  
    return (
      <>
        <p onClick={handleShow} className='editModalButton'>
         ...
        </p>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Asign Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
            <Col>
            <Form.Control type="text" placeholder="Enter Task Title" onChange={({ target: { value } }) => setTitle(value)}/>
            </Col>
            <Col>
            <Form>
                <Form.Select value={viewable} onChange={handleChange}>
                  <option value="In House Open Mat">To Do</option>
                  <option value="public">In Progress</option>
                </Form.Select>
              </Form>
            </Col>
            </Row>
            <br/>
            <Col>
            <Form.Control type="text" placeholder="Enter Asignee's Name" onChange={({ target: { value } }) => setUsername(value)}/>
            </Col>
            <br/>
            <textarea placeholder="What will you tell your underlings to do..." style={{ borderRadius: 5, height: 100, width: '100%' }}></textarea></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

