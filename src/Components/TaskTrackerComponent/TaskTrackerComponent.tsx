import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from 'react-bootstrap';
import TaskTrackerModal from './TaskTrackerModal';
import TaskTrackerCard from './TaskTrackerCard';
import TaskTrackerCardProgress from "./TaskTrackerCardProgress";
import TaskTrackerCardComplete from "./TaskTrackerCardComplete";

export default function TaskTrackerComponent() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 993);
    const [selectedSection, setSelectedSection] = useState('To Do');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 993);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      function handleButtonClick(sectionName: string) {
        setSelectedSection(sectionName);
      }


  return (
    <div className='container-fluid taskComponentBG'  style={{color: 'white'}}>
        <Row className='d-flex justify-content-evenly'>
            <Col lg={6} md={6} sm={6} xs={6}><h1>Admin Page</h1></Col>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-end'>
                <Button>Sign Out</Button></Col>
        </Row>
        <TaskTrackerModal/>
        <Container className='taskTrackerDiv'>
            <Row>
                <h1 className='text-center'>Master Task Tracker</h1>
            </Row>
            {(isMobile) && (<Row>
            <Col><Button  onClick={() => handleButtonClick('To Do')}>To Do</Button></Col>
            <Col><Button  onClick={() => handleButtonClick('In Progress')}>In Progress</Button></Col>
            <Col><Button  onClick={() => handleButtonClick('Complete')}>Complete</Button></Col>
                </Row>)}
            <Row>
            {(!isMobile || selectedSection === 'To Do') && (<Col lg={4}>
                    <Row>
                        <h1 className='text-center'>To Do</h1>
                    </Row>
                    <Row className='d-flex justify-content-center scrollDiv'><TaskTrackerCard/></Row>
                </Col>)}
                {(!isMobile || selectedSection === 'In Progress') && (
                    <Col lg={4}>
                    <Row>
                        <h1 className='text-center'>In Progress</h1>
                    </Row>
                    <Row className='d-flex justify-content-center scrollDiv'><TaskTrackerCardProgress/></Row>
                </Col>
                )}

                {(!isMobile || selectedSection === 'Complete') && (
                <Col lg={4}>
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
