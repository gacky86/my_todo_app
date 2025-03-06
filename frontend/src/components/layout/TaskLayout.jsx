import { createContext, useEffect, useState } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"

// Components
import TaskList from "../TaskList"
import AddTask from "../AddTask"

// api
import { getTaskList, getTaskDetail, deleteTask, updateTask } from '../../lib/api/task';

// Context
export const TaskContext = createContext();

// style
import styled from 'styled-components'

// styled-components
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
`
const AddTaskContainer = styled.div`
  grid-column: span 2 / span 2;
`
const TaskListContainer = styled.div`
  grid-row: span 3 / span 3;
  grid-row-start: 2;
`
const TaskDetailContainer = styled.div`
  grid-row: span 3 / span 3;
  grid-row-start: 2;

  /* Task Detail Container は '/' ではempty */
  /* '/task/:id' '/edit/:id' では該当するtaskを表示する */
  width: 592px;
  height: 310px;
  margin: 0 0 auto 0;
  padding: 0 5px;
  border: 1px solid #7aa7c7;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  background-color: #e1ecf4;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const TaskDetailHeader = styled.h2`
  font-weight: 200;
  color: #5c89c8;
  margin: 10px 20px;
  border-bottom: 0.5px solid #7aa7c7;
  `

const TaskLayout = () => {
  // taskの一覧と個別のtaskのdetailをstateで管理し、taskの追加、編集、削除の際に再取得するようにする。
  const [tasks, setTasks] = useState([]);
  const [taskDetail, setTaskDetail] = useState({});

  const navigate = useNavigate();

  // 一覧からreact-router-domを使ってidを取得
  const params = useParams();


  // taskの一覧を取得する
  const handleGetList = () => {
    getTaskList()
    .then((res) => {
      console.log("handleGetList");
      console.log(res.data);
      setTasks(res.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }

  // 個別のタスクのdetailを取得する
  const handleGetDetail = () => {
    getTaskDetail(params.id)
    .then((res) => {
      setTaskDetail(res.data);
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
      handleGetList();
    })
    .catch((e) => {
      console.log(e);
    })
  }

  // stateに持っているtaskDetailの値で個別のタスクを更新する
  const handleUpdateTask = () => {
    updateTask(params.id, taskDetail)
    .then(() => {
      console.log("success");
      navigate('/');
      handleGetList();
    })
    .catch((e) => {
      console.log(e);
    })
  }

  // フォームをtargetとして
  const handleChange = (e) => {
    console.log(e.target);

    setTaskDetail({...taskDetail, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    handleGetList();
  }, []);

  useEffect(() => {
    if (params.id) {
      handleGetDetail();
    }
  }, [params.id]);

  return (
    <div>
      <TaskContext.Provider value={{tasks, taskDetail, params, setTasks, handleGetList, handleGetDetail, handleDelete, handleChange, handleUpdateTask}}>
        <MainContainer>
          <AddTaskContainer>
            <AddTask/>
          </AddTaskContainer>
          <TaskListContainer>
            <TaskList/>
          </TaskListContainer>
          <TaskDetailContainer>
          <TaskDetailHeader>Task Detail</TaskDetailHeader>
            <Outlet/>
          </TaskDetailContainer>
        </MainContainer>
      </TaskContext.Provider>
    </div>
  )
}

export default TaskLayout
