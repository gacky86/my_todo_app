import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from "../common/Header";

const TaskDetailContainer = styled.div`
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

const TaskDetail = () => {
  return (
    <TaskDetailContainer>
      <Header header="Task Detail"/>
      {/* App.jsxで定義している、'/task/:id', '/edit/:id'のルーティングの出力先 */}
      <Outlet />
    </TaskDetailContainer>
  )
}

export default TaskDetail
