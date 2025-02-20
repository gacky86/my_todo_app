import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './components/AddTask'
// import TodoList from './components/TodoList'
// import EditTodo from './components/EditTodo'
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import './App.css'

// const Nabvar = styled.nav`
//   background: #dbfffe;
//   min-height: 8vh;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `

// const Logo = styled.div`
//   font-weight: bold;
//   font-size: 23px;
//   letter-spacing: 3px;
// `

// const NavItems = styled.ul`
//   display: flex;
//   width: 400px;
//   max-width: 40%;
//   justify-content: space-around;
//   list-style: none;
// `

// const NavItem = styled.li`
//   font-size: 19px;
//   font-weight: bold;
//   opacity: 0.7;
//   &:hover {
//     opacity: 1;
//   }
// `

// const Wrapper = styled.div`
//   width: 700px;
//   max-width: 85%;
//   margin: 20px auto;
// `

function App() {
  return (
    <BrowserRouter>
      {/* <TaskList/> */}
      <Routes>
        <Route path='/' element={<Navigate to="/tasks" />}/>
        <Route path='/tasks' element={<TaskList/>}/>
        <Route path='/tasks/new' element={<AddTask/>}/>
        <Route path='/tasks/:id/edit' element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
