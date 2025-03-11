// components
import CheckBox from "./CheckBox";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TaskCardStyle = styled.div`
  margin: 10px 0px;
  padding: 10px 3px;
  display: flex;
  border: 1px solid #7aa7c7;
  border-radius: 10px;
  background-color: #DAE7EB;
  color: #5182c6;
`
const TaskCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 5px;
  width: 100%;
`
const TaskTitle = styled.div`
  grid-column: span 3 / span 3;
`
const TaskDeadline = styled.div`
  grid-column-start: 4;
  border-left: 0.5px solid #7aa7c7;
  padding-left: 8px;
`
const TaskCard = ({data, index}) => {

  return (
    <Link to={`/task/${data.id}`} key={index}>
      <TaskCardStyle>
        <CheckBox index={index} data={data}/>
        <TaskCardGrid>
          <TaskTitle><p>{data.title}</p></TaskTitle>
          <TaskDeadline>
            {data.deadline === null ? (<p>-</p>) : (<p>{data.deadline}</p>)}
          </TaskDeadline>
        </TaskCardGrid>
      </TaskCardStyle>
    </Link>
  )
}

export default TaskCard
