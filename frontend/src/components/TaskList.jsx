import { useContext } from 'react';
import { TaskContext } from './layout/TaskLayout';
import { updateTask } from "../lib/api/task";

// style
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { Link } from 'react-router-dom';


// style
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
const TaskListHeader = styled.h2`
  font-weight: 200;
  color: #5c89c8;
  margin: 10px 20px;
  border-bottom: 0.5px solid #7aa7c7;
  `
const TaskCardsWrapper = styled.div`
  color: #5182c6;
  margin: 20px;
  `

const TaskCard = styled.div`
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

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`


const TaskList = () => {
  const {tasks, setTasks} = useContext(TaskContext);



  const updateStatus = (key, data) => {

    // var newdata = {
    //   id: data.id,
    //   title : data.title,
    //   memo: data.memo,
    //   deadline: data.deadline,
    //   status: !data.status
    // }

    updateTask(data.id, {...data, status: !data.status})
    // updateTask(data.id, newdata)
    .then((res) => {
      console.log("yyyyyy");

      const newTasks = [...tasks];
      console.log(newTasks);

      newTasks[key].status = res.data.status;
      setTasks(newTasks);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <TaskListContainer>
      <TaskListHeader>All Tasks</TaskListHeader>
      <TaskCardsWrapper>
        {tasks.map((data, key) => {
          return (
            <Link to={`/task/${data.id}`} key={key}>
              <TaskCard>
                {data.status ? (
                  <CheckedBox>
                    <ImCheckboxChecked onClick={() => updateStatus(key, data) } />
                  </CheckedBox>
                ) : (
                  <UncheckedBox>
                    <ImCheckboxUnchecked onClick={() => updateStatus(key, data) } />
                  </UncheckedBox>
                )}
                <TaskCardGrid>
                  <TaskTitle><p>{data.title}</p></TaskTitle>
                  <TaskDeadline>
                    {data.deadline === null ? (<p>-</p>) : (<p>{data.deadline}</p>)}
                  </TaskDeadline>
                </TaskCardGrid>
              </TaskCard>
            </Link>
          )
        })}
      </TaskCardsWrapper>
    </TaskListContainer>
  );
};
export default TaskList;
