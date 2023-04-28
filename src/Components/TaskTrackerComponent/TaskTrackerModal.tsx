import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row, Form, Col} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { GetLoggedInUserData, addTaskItem } from '../../DataServices/DataServices';
import { loggedInData } from '../../DataServices/DataServices';

interface TaskTracker {
  id: number;
  userId: number;
  Date: Date;
  UserName: string;
  Description: string;
  Title : string;
  isToDO: false;
  isProgress: false;
  isCompleted: false;
  // Other properties of a BlogItem
}

function TaskTrackerModal() {
  const [task, setTask] = useState<TaskTracker[]>([]);
  const [taskId, setTaskId] = useState(0);
  const [show, setShow] = useState(false);
  const [viewable, setViewable] = useState("Select Privacy");
  const [username, setUsername] = useState('');
  const [title, setTitle]  = useState('');
  const [ taskDescription, setTaskDescription] = useState('');
  // const [isProgress, setIsProgress] = useState(false);
  // const [isToDo, setToDo] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(e.target.value);
  
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { setViewable(event.target.value) };

  const createTask = () => {
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
      const taskData = {
        Id: taskId,
        UserId: userNames.userId,
        Date: new Date,
        title: title,
        UserName: username,
        description: taskDescription,
        isToDo: ToDo,
        isProgress: InProgress,
        isCompleted: false
      }
      console.log(taskData);
      addTaskItem(taskData);
    }
    testing();
    handleClose();
    window.location.reload();
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Task +
      </Button>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createTask}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskTrackerModal;