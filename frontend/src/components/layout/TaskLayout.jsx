// TaskLayoutの役割
// AddTask, TaskList, TaskDetailの３つをgridを切ってレンダリングすること

// react
import { createContext, useEffect, useState } from "react"

// api
import { getTaskList } from "../../lib/api/task";

// Components
import TaskList from "../task/TaskList"
import AddTask from "../task/AddTask"
import TaskDetail from "../task/TaskDetail";

// style
import styled from 'styled-components'

// context
export const TasksContext = createContext();

// styled-components
const TaskLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
`
const AddTaskWrapper = styled.div`
  grid-column: span 2 / span 2;
`
const TaskListWrapper = styled.div`
  grid-row: span 3 / span 3;
  grid-row-start: 2;
`
const TaskDetailWrapper = styled.div`
  grid-row: span 3 / span 3;
  grid-row-start: 2;
`

const TaskLayout = () => {
  const handleGetTaskList = () => {
    getTaskList()
    .then((res) => {
      setTasks(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  };

  // Task一覧を管理するContext
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    handleGetTaskList();
  }, [])

  return (
    <TasksContext.Provider value={{tasks, setTasks, handleGetTaskList}}>
      <TaskLayoutGrid>
        <AddTaskWrapper>
          <AddTask/>
        </AddTaskWrapper>
        <TaskListWrapper>
          <TaskList/>
        </TaskListWrapper>
        <TaskDetailWrapper>
          <TaskDetail/>
        </TaskDetailWrapper>
      </TaskLayoutGrid>
    </TasksContext.Provider>
  )
}

export default TaskLayout
