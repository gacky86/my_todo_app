import { useEffect, useState } from 'react';
import { getTaskList, deleteTask } from '../lib/api/task';
import { Link, useNavigate } from "react-router-dom";

const TaskList = () => {
  const [dataList, setDataList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = () => {
    getTaskList()
    .then((res) => {
      console.log(res.data);
      setDataList(res.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }

  const handleDelete = (id) => {
    deleteTask(id)
    .then(() => {
      console.log("successfully deleted");
      handleGetList();
    })
    .catch((e) => {
      console.log(e);

    })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/new')}>新規作成</button>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>memo</th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
          </tr>
        </thead>
        {dataList.map(data => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.title}</td>
                <td>{data.memo}</td>
                <td><Link to={`/edit/${data.id}`}>更新</Link></td>
                <td><Link to={`/task/${data.id}`}>詳細へ</Link></td>
                <td><button onClick={() => handleDelete(data.id)}>削除</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  );
};
export default TaskList;
