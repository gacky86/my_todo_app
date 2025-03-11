// components
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import styled from 'styled-components'
import { updateTask } from "../../lib/api/task";
import { useContext } from 'react';
import { TasksContext } from '../layout/TaskLayout';

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

const CheckBox = ({index, data}) => {

  const {tasks, setTasks} = useContext(TasksContext);

  const updateStatus = (index, data) => {
    updateTask(data.id, {...data, status: !data.status})
    .then((res) => {
      const newTasks = [...tasks];
      newTasks[index].status = res.data.status;
      setTasks(newTasks);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <>
      {data.status ? (
        <CheckedBox>
          <ImCheckboxChecked onClick={() => updateStatus(index, data) } />
        </CheckedBox>
      ) : (
        <UncheckedBox>
          <ImCheckboxUnchecked onClick={() => updateStatus(index, data) } />
        </UncheckedBox>
      )}
    </>
  )
}

export default CheckBox
