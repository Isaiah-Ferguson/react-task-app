import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TaskTrackerModal from '../TaskTrackerComponent/TaskTrackerModal';
import { useNavigate } from 'react-router-dom';

function NavBarComponent() {

    let navigate = useNavigate();
    function LoginNavigate() {
        localStorage.removeItem('Token');
        navigate("/");
      };

  return (
    <Navbar expand="lg" className='whiteText'>
      <Container fluid>
        <Navbar.Brand><h1 className='whiteText'>Admin Page</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <TaskTrackerModal/>
          </Nav>
          <Form className="d-flex">
            <Button onClick={LoginNavigate}>Sign Out</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;