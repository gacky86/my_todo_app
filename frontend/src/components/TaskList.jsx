import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillEdit } from 'react-icons/ai'

const TaskList = () => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/tasks').then((res) => {
      setTasks(res.data);
      // axiosで拾ったデータはstateとして保存して、stateの中身を表示する
      // setTasksでstateを更新するとこのコンポーネントの再レンダリングが実行されるので
      // useEffectの部分が無限ループに陥る
      // それを防ぐためにuseEffectの第二引数に[]を渡しておく
    });
  }, []);

  return (
    <div>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <Link to={"/tasks/"+ task.id +"/edit"}>
              <AiFillEdit />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList;
