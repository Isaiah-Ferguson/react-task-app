import React, { useState, useEffect } from "react";
import {Row, Col} from 'react-bootstrap'
import TaskTrackerEditModal from './TaskTrackerEditModal';
import { loggedInData, GetLoggedInUserData, checkToken, getTaskItems } from "../../DataServices/DataServices";
import { useNavigate, } from 'react-router-dom';

interface TaskItem {
    Date: string;
    Id: number;
    UserId: number;
    isProgress: boolean;
    isCompleted: boolean;
    isToDo: boolean;
    UserName: string;
    description: string;
    title: string;
    // Other properties of a BlogItem
  }

export default function TaskTrackerCard() {
    let navigate = useNavigate();
    const [tasks, setTaskItem] = useState<TaskItem[]>([]);
    const [blogUserId, setBlogUserId] = useState(0);
    const [ blogPublisherName, setBlogPublisherName] = useState('');

    useEffect(() => {
        const getLoggedInData = async () => {
          const loggedIn = loggedInData();
          setBlogUserId(loggedIn.userId);
          setBlogPublisherName(loggedIn.publisherName);
          let userBlogItems = await getTaskItems();
          console.log(userBlogItems);
          setTaskItem(userBlogItems);
        };
        if (!checkToken()) {
          navigate('/Login');
        } else {
          // Get user Data and blog Items
          getLoggedInData();
        }
      }, []);
  return (

    <>
    {tasks.filter((test) => test.isToDo).map((item: TaskItem, idx: number) => {
    return (
        <div key={idx} className='taskCard'>
        <Row>
            <Col>
            <li>To Do</li>
            </Col>
            <Col className='d-flex justify-content-end'>
            <TaskTrackerEditModal/>
            </Col>
        </Row>
        <Row>
            <Col><h4>{item.title}</h4></Col>
            <Col className='d-flex justify-content-end'><h5>User Name</h5></Col>
        </Row>
        <div>
            <h3 style={{color: '#D3C7C7'}}>Description</h3>
        </div>
        <div className='descriptionDiv'>
            <p style={{color: 'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi consectetur libero labore est, cum suscipit sit, cumque vero autem, animi consequuntur voluptate. Ullam corrupti fuga, iusto ab dignissimos beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium at, consequatur, adipisci reprehenderit dolorum optio facilis dolore eveniet assumenda quod officiis molestias? Alias mollitia enim expedita tempora quisquam beatae.</p>
        </div>
    </div>
    )

    })}</>


  )
}
