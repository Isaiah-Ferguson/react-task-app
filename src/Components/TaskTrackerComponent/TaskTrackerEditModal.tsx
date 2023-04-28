
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, Form} from 'react-bootstrap'
import { updateTaskItem } from '../../DataServices/DataServices';
import { loggedInData } from '../../DataServices/DataServices';
import { type } from 'os';
type Id ={ Id: number}

 export default function TaskTrackerEditModal(props:Id) {
    const [show, setShow] = useState(false);
    const [viewable, setViewable] = useState("Select Privacy");
    const [username, setUsername] = useState('');
    const [title, setTitle]  = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [taskId, setTaskId] = useState(0);
    const [ taskDescription, setTaskDescription] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { setViewable(event.target.value) };
  
    const EditTask = () => {
      const testing = async () => {
        let ToDo = true;
        let InProgress = true;
  
        if(viewable === "To Do"){
          ToDo = true;
          InProgress = false;
        }else{
          InProgress = true;
          ToDo = false;
        }
        const userNames = loggedInData();
        const taskItem = {
          Id: props.Id,
          UserId: userNames.userId,
          Date: new Date,
          title: title,
          UserName: username,
          description: taskDescription,
          isToDo: ToDo,
          isProgress: InProgress,
          isCompleted: false
        }
        console.log(taskItem);
        updateTaskItem(taskItem);
      }
      testing();
      handleClose();
      // window.location.reload();
    }
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
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Complete">Complete</option>
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
            <Button variant="primary" onClick={EditTask}>
              Submit Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

