import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row, Form, Col} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { GetLoggedInUserData, updateTaskItem } from '../../DataServices/DataServices';
import { loggedInData } from '../../DataServices/DataServices';

type Id = {
   Id: number;
  }

 export default function TaskTrackerEditModal(props: Id) {

  const [taskId, setTaskId] = useState(0);
  const [show, setShow] = useState(false);
  const [viewable, setViewable] = useState("To Do");
  const [username, setUsername] = useState('');
  const [title, setTitle]  = useState('');
  const [ taskDescription, setTaskDescription] = useState('');
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { setViewable(event.target.value) };

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTaskDescription(e.target.value);
    
    }

    const editTask = () => {
      const testing = async () => {
        let ToDo = false;
        let InProgress = false;
        let complete = false;
        console.log(viewable)
        if(viewable === "To Do"){
          ToDo = true;
          InProgress = false;
          complete = false;
        }else if(viewable === "In Progress"){
          InProgress = true;
          ToDo = false;
          complete = false;
        }else{
          complete = true;
          InProgress = false;
          ToDo = false;
        }
        const userNames = loggedInData();
        const taskData = {
          id: props.Id,
          UserId: userNames.userId,
          Date: new Date,
          title: title,
          userName: username,
          description: taskDescription,
          isToDo: ToDo,
          isProgress: InProgress,
          isCompleted: complete
        }
        console.log(taskData)
        updateTaskItem(taskData);
      }
      testing();
      handleClose();
    }

    const deleteTask = () => {
      const testing = async () => {
        let ToDo = false;
        let InProgress = false;
        let complete = false;
        if(viewable === "To Do"){
          ToDo = true;
          InProgress = false;
          complete = false;
        }else if(viewable === "In Progress"){
          InProgress = true;
          ToDo = false;
          complete = false;
        }else{
          complete = true;
          InProgress = false;
          ToDo = false;
        }
        const userNames = loggedInData();
        console.log(props.Id);
        const taskData = {
          id: props.Id,
          UserId: userNames.userId,
          Date: new Date,
          title: title,
          userName: username,
          description: taskDescription,
          isToDo: false,
          isProgress: false,
          isCompleted: false,
          isDeleted: true
        }
        updateTaskItem(taskData);
      }
      testing();
      handleClose();
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
            <textarea placeholder="What will you tell your underlings to do..." style={{ borderRadius: 5, height: 100, width: '100%' }} onChange={handlePost}></textarea></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={deleteTask}>
              Delete
            </Button>
            <Button variant="primary" onClick={editTask}>
              Submit Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

