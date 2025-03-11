// 役割：ヘッダーおよび新しいTaskを追加するためのフォームとボタンをレンダリングする

// components
import Header from "../common/Header";
import TaskForm from "./TaskForm";

// style
import styled from 'styled-components'

// styled-components
const AddTaskContainer = styled.div`
  width: 1200px;
  margin: 10px auto;
  padding: 0 5px;
  border: 1px solid #7aa7c7;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  background-color: #e1ecf4;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  `

const initialTaskObj = {
  id: null,
  user_id: null,
  title: '',
  status: false,
  deadline: '',
  memo: '',
}

const AddTask = () => {
  return (
    <AddTaskContainer>
      <Header header="Create a new task"/>
      <TaskForm currentTaskObj={initialTaskObj}/>
    </AddTaskContainer>
  )
}

export default AddTask
