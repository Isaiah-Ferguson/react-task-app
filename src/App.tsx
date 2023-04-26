import './App.css';
import './Components/LoginComponent/LoginComponent.css'
import './Components/LoginComponent/UsersLogin.css'
import './Components/CreateAccountComponent/CreateAccountComponent.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import UsersLogin from './Components/LoginComponent/UsersLogin';
import TaskTrackerComponent from './Components/TaskTrackerComponent/TaskTrackerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/TaskTrackerComponent/TaskTrackerCard.css'
import './Components/LoginComponent/LoginComponent.css'
import './Components/LoginComponent/UsersLogin.css'
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent';




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent/>}/>          
          <Route path='/UsersLogin' element={<UsersLogin/>}/>
          <Route path='/CreateAccountComponent' element={<CreateAccountComponent/>} />
        </Routes>
        </BrowserRouter>
  
  

  );
}

export default App;
