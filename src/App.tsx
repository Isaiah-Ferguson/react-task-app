import './App.css';
import './Components/LoginComponent/LoginComponent.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import UsersLogin from './Components/LoginComponent/UsersLogin';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TaskTrackerComponent from './Components/TaskTrackerComponent/TaskTrackerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/TaskTrackerComponent/TaskTrackerCard.css'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent/>}/>
          <Route path='/UsersLogin' element={<UsersLogin/>}/>
                
        </Routes>
      </BrowserRouter>
  );
}

export default App;
