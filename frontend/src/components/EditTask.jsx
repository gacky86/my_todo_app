import { useContext } from 'react';
import { TaskContext } from './layout/TaskLayout';

// style
import styled from 'styled-components'

// styled-components
const TaskEditContainer = styled.div`
  margin: 10px 20px;
  padding: 0 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #5c89c8;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;

  h4 {
    font-weight: 400;
  }
  input {
    margin: 3px;
    width: 100%;
    display: block;
    background-color: #e5e8e9;
    padding: 3px;
    border: 1px solid #7aa7c7;
    border-radius: 5px;
    font-size: 16px;
    color: #5686c9;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`

const TaskTitle = styled.div`
  `
const TaskDeadline = styled.div`

  `
const TaskMemo = styled.div`
  grid-row: span 2 / span 2;
  input {
    height: 75%;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 16px;
  padding: 8px 0px;
  button {
    background-color: #ffb703;
    color: #5182c6;
    font-weight: 100;
    font-size: 16px;
    border: 0.5px solid #7aa7c7;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
  }
`

const Edit = () => {
  const {taskDetail, handleUpdateTask, handleChange} = useContext(TaskContext);

  return(
    <>

      <form action="">
        <TaskEditContainer>
          <TaskTitle>
            <label htmlFor="title">Title :</label>
            <input type="text" id="title" name="title" value={taskDetail.title} onChange={(e) => handleChange(e)}/>
          </TaskTitle>
          <TaskDeadline>
            <label htmlFor="deadline">Deadline : </label>
            <input type="text" id="deadline" name="deadline" value={taskDetail.deadline} onChange={(e) => handleChange(e)}/>
          </TaskDeadline>
          <TaskMemo>
            <label htmlFor="memo">Memo : </label>
            <input type="text" id="memo" name="memo" value={taskDetail.memo} onChange={(e) => handleChange(e)}/>
          </TaskMemo>
        </TaskEditContainer>
      </form>
      {/* submit button */}
      <Buttons>
        <button onClick={() => handleUpdateTask()}>Update</button>
      </Buttons>
    </>
  )
}
export default Edit
