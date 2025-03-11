// 役割；Taskの情報を表示し、Editへのリンクと削除ボタンを表示すること

// react関係
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// api
import { getTaskDetail, deleteTask } from "../../lib/api/task";

// context
import { TasksContext } from "../layout/TaskLayout";

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

const TaskDetailContent = () => {
  const [taskData, setTaskData] = useState({});
  const {handleGetTaskList} = useContext(TasksContext);

  // react-router-dom
  const params = useParams();
  const navigate = useNavigate();

  // 個別のタスクのdetailを取得する
  const handleGetDetail = () => {
    getTaskDetail(params.id)
    .then((res) => {
      setTaskData(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  // 個別のタスクを削除する
  const handleDelete = () => {
    deleteTask(params.id)
    .then(() => {
      console.log("successfully deleted");
      navigate('/');
      handleGetTaskList();
    })
    .catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    handleGetDetail();
  }, [params.id]);

  return (
    <div>
      <TaskDetailContainer>
        <TaskTitle><h4>Title :</h4><p>{taskData.title}</p></TaskTitle>
        <TaskDeadline>
          <h4>Deadline :</h4>
          {taskData.deadline === null ? (<p>-</p>) : (<p>{taskData.deadline}</p>)}
        </TaskDeadline>
        <TaskMemo>
          <h4>Memo :</h4>
          {taskData.memo === "" ? (<p>-</p>) : (<p>{taskData.memo}</p>)}
        </TaskMemo>
      </TaskDetailContainer>
      <Buttons>
        <Link to={`/edit/${taskData.id}`}><FaPencilAlt/></Link>
        <button onClick={() => handleDelete()}><FaTrash/></button>
      </Buttons>

    </div>
  )
}

export default TaskDetailContent
