import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TaskTrackerComponent from './Components/TaskTrackerComponent/TaskTrackerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/TaskTrackerComponent/TaskTrackerCard.css'
function App() {
  return (
<BrowserRouter>
<TaskTrackerComponent/>
<Routes>
</Routes>
</BrowserRouter>
  );
}

export default App;
