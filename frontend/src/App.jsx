import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/task/:id' element={<TaskDetail/>}/>
          <Route path='/new' element={<AddTask/>}/>
          <Route path='/edit/:id' element={<EditTask/>}/>
        </Routes>
      </Router>
    </>
  )
};
export default App;
