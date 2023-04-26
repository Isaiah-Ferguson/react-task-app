import React from 'react'
import {Row, Col} from 'react-bootstrap'
import TaskTrackerEditModal from './TaskTrackerEditModal'
export default function TaskTrackerCard() {
  return (
    <>
        <div className='taskCard'>
        <Row>
            <Col>
            <li>Progress</li>
            </Col>
            <Col className='d-flex justify-content-end'>
            <TaskTrackerEditModal/>
            </Col>
        </Row>
        <Row>
            <Col><h4>Task Title</h4></Col>
            <Col className='d-flex justify-content-end'><h5>User Name</h5></Col>
        </Row>
        <div>
            <h3 style={{color: '#D3C7C7'}}>Description</h3>
        </div>
        <div className='descriptionDiv'>
            <p style={{color: 'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi consectetur libero labore est, cum suscipit sit, cumque vero autem, animi consequuntur voluptate. Ullam corrupti fuga, iusto ab dignissimos beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium at, consequatur, adipisci reprehenderit dolorum optio facilis dolore eveniet assumenda quod officiis molestias? Alias mollitia enim expedita tempora quisquam beatae.</p>
        </div>
    </div>
    </>

  )
}
