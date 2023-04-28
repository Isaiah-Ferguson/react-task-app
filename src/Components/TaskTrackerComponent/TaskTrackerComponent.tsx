import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from 'react-bootstrap';
import TaskTrackerModal from './TaskTrackerModal';
import TaskTrackerCard from './TaskTrackerCard';
import TaskTrackerCardProgress from "./TaskTrackerCardProgress";
import TaskTrackerCardComplete from "./TaskTrackerCardComplete";
import NavBarComponent from "../NavbarComponent/NavbarComponent";
import { loggedInData, GetLoggedInUserData, checkToken, getTaskItems } from "../../DataServices/DataServices";
import { useNavigate, } from 'react-router-dom';



export default function TaskTrackerComponent() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [selectedSection, setSelectedSection] = useState('To Do');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      function handleButtonClick(sectionName: string) {
        setSelectedSection(sectionName);
      }




  return (


    <div className='container-fluid taskComponentBG'  style={{color: 'white'}}>
        <NavBarComponent/>

        <Container className='taskTrackerDiv'>
            <Row>
                <h1 className='text-center'>Master Task Tracker</h1>
            </Row>
            {(isMobile) && (<Row>
            <Col className="d-flex justify-content-center"><Button  onClick={() => handleButtonClick('To Do')}>To Do</Button></Col>
            <Col className="d-flex justify-content-center"><Button  onClick={() => handleButtonClick('In Progress')}>In Progress</Button></Col>
            <Col className="d-flex justify-content-center"><Button  onClick={() => handleButtonClick('Complete')}>Complete</Button></Col>
                </Row>)}
            <Row>
            {(!isMobile || selectedSection === 'To Do') && (
            <Col lg={4} md={4}>
                    <Row>
                        <h1 className='text-center'>To Do</h1>
                    </Row>
                    <Row className='d-flex justify-content-center scrollDiv'><TaskTrackerCard/></Row>
                </Col>)}
                {(!isMobile || selectedSection === 'In Progress') && (
                    <Col lg={4} md={4}>
                    <Row>
                        <h1 className='text-center'>In Progress</h1>
                    </Row>
                    <Row className='d-flex justify-content-center scrollDiv'><TaskTrackerCardProgress/></Row>
                </Col>
                )}
                {(!isMobile || selectedSection === 'Complete') && (
                <Col lg={4} md={4}>
                    <Row>
                        <h1 className='text-center'>Complete</h1>
                    </Row>
                    <Row className='d-flex justify-content-center scrollDiv'><TaskTrackerCardComplete/></Row>
                </Col>)}
                
            </Row>
        </Container>
            
        
    </div>
  )
}
