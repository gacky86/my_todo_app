import { useContext, useState } from "react"
import { createTask } from "../lib/api/task";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { TaskContext } from "./layout/TaskLayout";

// Flatpickr
import 'flatpickr/dist/flatpickr.min.css'
import Flatpickr from 'react-flatpickr'
import { format } from "date-fns";

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
const AddTaskHeader = styled.h2`
  font-weight: 200;
  color: #5c89c8;
  margin: 10px 20px;
  border-bottom: 0.5px solid #7aa7c7;
  `
const AddTaskGrid = styled.div`
  color: #5182c6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 8px;
  margin: 20px;

  input {
    width: 100%;
    height: 100%;
    background-color: #dae7eb;
    border: 1px solid #7aa7c7;
    border-radius: 5px;
    font-size: 18px;
    text-align: start;

    &:focus {
      background-color: white;
    }
  }
`
const DeadlineForm = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`
const MemoForm = styled.div`
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 1;
`
const FormLabel = styled.label`
  display: block;
  `
const SubmitDiv = styled.div`
  text-align: right;
  padding: 8px 20px;
`
const SubmitBtn = styled.button`
  background-color: #ffb703;
  color: #5182c6;
  font-weight: 100;
  font-size: 16px;
  border: 0.5px solid #7aa7c7;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
`

const AddTask = () => {
  const {currentUser} = useContext(AuthContext);
  const {handleGetList} = useContext(TaskContext);

  const navigate = useNavigate();

  const initialNewTask = {
    id: null,
    title: '',
    status: false,
    deadline: '',
    memo: '',
    user_id: currentUser.id
  }

  const [newTask, setNewTask] = useState(initialNewTask);

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target);
    setNewTask({...newTask, [name]: value});
  }

  const handleDateChange = (date) => {
    // flatpickrで取得されるDate ObjectはActiveRecordのdate型に変換する必要がある
    const selectedDate = format(date[0], "yyyy-MM-dd");
    setNewTask({...newTask, deadline: selectedDate});
  }

  const handleSubmit = () => {
    createTask(newTask)
    .then(() => {
      console.log("success");
      handleGetList();
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      setNewTask(initialNewTask);
      navigate('/');
    })
  }

  return (
    <AddTaskContainer>
      {/* input */}
      <AddTaskHeader>Create a new task</AddTaskHeader>
      <form action="">
        <AddTaskGrid>
          <div>
            <FormLabel htmlFor="title">Title</FormLabel>
            <input type="text" id="title" name="title" value={newTask.title} onChange={(e) => handleChange(e)}/>
          </div>
          <DeadlineForm>
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
            <Flatpickr id="deadline" value={newTask.deadline} options={{dateFormat: 'Y/m/d(D)'}} onChange={(e) => handleDateChange(e)}/>
            {/* <input type="text" id="deadline" name="deadline" value={newTask.deadline} onChange={(e) => handleChange(e)}/> */}
          </DeadlineForm>
          <MemoForm>
            <FormLabel htmlFor="memo">Memo</FormLabel>
            <input type="text" id="memo" name="memo" value={newTask.memo} onChange={(e) => handleChange(e)}/>
          </MemoForm>
        </AddTaskGrid>
      </form>
      {/* submit button */}
      <SubmitDiv>
        <SubmitBtn onClick={() => handleSubmit()}>Create</SubmitBtn>
      </SubmitDiv>
    </AddTaskContainer>
  )
}

export default AddTask
