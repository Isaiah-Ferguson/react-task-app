import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/LoginComponent';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent />} />      
        </Routes>
      </BrowserRouter>
  );
}

export default App;
