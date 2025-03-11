// 役割：params.idに基づくtaskをgetし、その値をもつフォームをレンダリングすること
// api
import { getTaskDetail, updateTask } from "../../lib/api/task";

// react
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// context
import { TasksContext } from "../layout/TaskLayout";

// style
import styled from 'styled-components'

// components
import TitleForm from "./TitleForm";
import DeadlineForm from "./DeadlineForm";
import MemoForm from "./MemoForm";
import SubmitBtn from "../common/SubmitBtn";

// styled-components
const EditTaskForm = styled.form`
  margin: 10px 20px;
  padding: 0 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #5c89c8;
  height: 230px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;

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

const TitleFormWapper = styled.div`
  `
const DeadlineFormWapper = styled.div`
  `
const MemoFormWapper = styled.div`
  grid-row: span 2 / span 2;
  input {
    height: 75%;
  }
`
const SubmitBtnWapper = styled.div`
  grid-row-start: 5;
  text-align: right;
`

const TaskDetailEdit = () => {
  const params = useParams();
  const [taskObj, setTaskObj] = useState({});
  const {handleGetTaskList} = useContext(TasksContext);

  // 個別のタスクのdetailを取得する
  const handleGetDetail = () => {
    getTaskDetail(params.id)
    .then((res) => {
      setTaskObj(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    handleGetDetail();
  }, [])

  const handleUpdateTask = () => {
    updateTask(taskObj.id, taskObj)
    .then(() => {
      handleGetTaskList();
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <EditTaskForm onSubmit={handleUpdateTask}>
      <TitleFormWapper>
        <TitleForm taskState={{taskObj, setTaskObj}}/>
      </TitleFormWapper>
      <DeadlineFormWapper>
        <DeadlineForm taskState={{taskObj, setTaskObj}}/>
      </DeadlineFormWapper>
      <MemoFormWapper>
        <MemoForm taskState={{taskObj, setTaskObj}}/>
      </MemoFormWapper>
      <SubmitBtnWapper>
        <SubmitBtn type='submit'>Submit</SubmitBtn>
      </SubmitBtnWapper>
    </EditTaskForm>
  )
}

export default TaskDetailEdit
