import { useState } from "react"
import { createTask } from "../lib/api/task";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const initialNewTask = {
    id: null,
    title: '',
    status: false,
    deadline: '',
    memo: '',
    user_id: 1
  }

  const [newTask, setNewTask] = useState(initialNewTask);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target);
    setNewTask({...newTask, [name]: value});
  }

  const handleSubmit = () => {
    createTask(newTask)
    .then(() => {
      console.log("success");
      navigate('/');
    })
    .catch(() => {
      console.log("error");
    })
  }

  return (
    <div>
      {/* input */}
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={newTask.title} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="memo">Memo</label>
          <input type="text" id="memo" name="memo" value={newTask.memo} onChange={(e) => handleChange(e)}/>
        </div>
      </form>
      {/* submit button */}
      <button onClick={() => handleSubmit()}>作成</button>
    </div>
  )
}

export default AddTask
