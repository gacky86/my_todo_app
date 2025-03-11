// 役割：Task作成に必要なフォームをgridを使って配置すること
// React関係
import PropTypes from 'prop-types';
import { useContext, useState } from "react";

// api
import { handleCreateTask } from "../../lib/api/handleTask";

// context
import { AuthContext } from '../../App';

// components
import TitleForm from "./TitleForm";
import DeadlineForm from "./DeadlineForm";
import MemoForm from "./MemoForm";
import SubmitBtn from "../common/SubmitBtn";

// style
import styled from 'styled-components'

// style-components
const AddTaskForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 24px;
  column-gap: 10px;
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
  label {
    display: block;
    color: #5182c6;
  }
`
const TitleFormWapper = styled.div`
`
const DeadlineFormWapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`
const MemoFormWapper = styled.div`
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 1;
`
const SubmitBtnWapper = styled.div`
  grid-column: span 2 / span 2;
  grid-row-start: 3;
  text-align: right;
`

const TaskForm = ({currentTaskObj}) => {
  const { currentUser } = useContext(AuthContext);

  const [taskObj, setTaskObj] = useState(currentTaskObj);

  const handleSubmit = () => {
    handleCreateTask({...taskObj, user_id: currentUser.id});
  }

  return (
    <AddTaskForm onSubmit={handleSubmit}>
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
    </AddTaskForm>
  )
}

// propTypes definitions
TaskForm.propTypes = {
  currentTaskObj: PropTypes.object.isRequired
}

export default TaskForm
