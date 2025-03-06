import { useContext } from "react";
// react-route v6 以降はuseHistoryではなくuseNavigateを使用
import { Link } from "react-router-dom";
import { TaskContext } from "./layout/TaskLayout";

// style
import styled from 'styled-components'
import { FaTrash, FaPencilAlt } from "react-icons/fa";

// styled-components
const TaskDetailContainer = styled.div`
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
  p {
    margin: 3px;
    width: 100%;
    background-color: #DAE7EB;
    padding: 3px;
    border: 1px solid #7aa7c7;
    border-radius: 5px;
  }
`

const TaskTitle = styled.div`

`
const TaskDeadline = styled.div`

`
const TaskMemo = styled.div`
  grid-row: span 2 / span 2;
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 20px;
  button {
    margin-left: 10px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
`

const TaskDetail = () => {
  const {taskDetail, handleDelete} = useContext(TaskContext);

  return (
    <>
      <TaskDetailContainer>
        <TaskTitle><h4>Title :</h4><p>{taskDetail.title}</p></TaskTitle>
        <TaskDeadline>
          <h4>Deadline :</h4>
          {taskDetail.deadline === null ? (<p>-</p>) : (<p>{taskDetail.deadline}</p>)}
        </TaskDeadline>
        <TaskMemo>
          <h4>Memo :</h4>
          {taskDetail.memo === "" ? (<p>-</p>) : (<p>{taskDetail.memo}</p>)}
        </TaskMemo>
      </TaskDetailContainer>
      <Buttons>
        <Link to={`/edit/${taskDetail.id}`}><FaPencilAlt/></Link>
        <button onClick={() => handleDelete()}><FaTrash/></button>
      </Buttons>
    </>
  )
}

export default TaskDetail
