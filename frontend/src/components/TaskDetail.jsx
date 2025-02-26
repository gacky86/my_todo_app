import { useEffect, useState } from "react";
import { getTaskDetail } from "../lib/api/task";
// react-route v6 以降はuseHistoryではなくuseNavigateを使用
import { useNavigate, useParams } from "react-router-dom";

const TaskDetail = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskDetail(params.id)
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <div>{data.title}</div>
      <button onClick={() => navigate('/')}>戻る</button>
    </div>
  )
}

export default TaskDetail
