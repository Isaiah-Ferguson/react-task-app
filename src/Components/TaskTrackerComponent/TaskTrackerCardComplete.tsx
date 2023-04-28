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

export default function TaskTrackerCardProgressComplete() {
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
    {tasks.filter((test) => test.isCompleted).map((item: TaskItem, idx: number) => {
    return (
        <div key={idx} className='taskCard'>
        <Row>
            <Col>
            <li>Complete</li>
            </Col>
            <Col className='d-flex justify-content-end'>
            <TaskTrackerEditModal Id={item.Id}/>
            </Col>
        </Row>
        <Row>
            <Col><h4>{item.title}</h4></Col>
            <Col className='d-flex justify-content-end'><h5>{item.UserName}</h5></Col>
        </Row>
        <div>
            <h3 style={{color: '#D3C7C7'}}>{item.title}</h3>
        </div>
        <div className='descriptionDiv'>
            <p style={{color: 'black'}}>{item.description}</p>
        </div>
    </div>
    )

    })}</>


  )
}