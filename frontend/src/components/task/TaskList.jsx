// 役割：すべてのTaskを取得してTaskカードをレンダリングする

// context
import { TasksContext } from "../layout/TaskLayout";

// components
import TaskCard from "./TaskCard";
import Header from "../common/Header";
import { useContext } from "react";

import styled from 'styled-components'

const TaskListContainer = styled.div`
  width: 592px;
  height: 310px;
  margin: 0 0 0 auto;
  padding: 0 5px;
  border: 1px solid #7aa7c7;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  background-color: #e1ecf4;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  `

const TaskCardsWrapper = styled.div`
  color: #5182c6;
  margin: 20px;
`

const TaskList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <TaskListContainer>
      <Header header="Task List"/>
      <TaskCardsWrapper>
        {tasks.map((data, key) => {
          return (
            <TaskCard key={key} data={data} index={key} />
          )
        })}
      </TaskCardsWrapper>
    </TaskListContainer>
  )
}

export default TaskList
