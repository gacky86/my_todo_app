import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  // define initial state
  const initialNewTask = {
    id: null,
    title: '',
    status: false,
    deadline: '',
    memo: ''
  }

  // define state for input value
  const [ newTask, setNewTask ] = useState(initialNewTask);

  // define navigate here
  const navigate = useNavigate();

  // input change function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  }
  // addTask function(axios)
  const saveTask = () => {
    axios.post('http://localhost:3000/api/v1/tasks/', newTask)
    .then((res) => {
      console.log(res);
      navigate('/');
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <div>
      <h1>Add New Task</h1>
      {/* input, call setState onChange */}
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      {/* button to submit */}
      <button onClick={saveTask}>
        Submit
      </button>
    </div>
  )
}

export default AddTask
