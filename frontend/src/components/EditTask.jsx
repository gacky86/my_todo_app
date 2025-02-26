import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask, getTaskDetail } from '../lib/api/task';

const Edit = () => {
  const initialTask = {
    title: '',
    memo: '',
  }
  // apiで取得したデータを管理する為のstate
  const [taskValue, setTaskValue] = useState({initialTask});

  // 一覧からreact-router-domを使ってidを取得
  const params = useParams();

  const navigate = useNavigate();

  // 画面が描画された時、paramsが更新された時に関数を実行
  useEffect(() => {
    handleGetData(params)
  }, [params])

  // idをapiクライアントに渡し、/api/v1/posts/:idのエンドポイントからデータ取得
  const handleGetData = () => {
    getTaskDetail(params.id)
    .then((res) => {
      setTaskValue({
        title: res.data.title,
        memo: res.data.memo
      });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  // テキストフィールドの変更を検知し値を書き換えstateで管理
  const handleChange = (e) => {
    setTaskValue({...taskValue, [e.target.name]: e.target.value})
  }

  // 更新ボタン押下後、idとparameterをapiクライアントに渡しリクエストを投げる
  const handleSubmit = () => {
    updateTask(params.id, taskValue)
    .then(() => {
      console.log("success");
      navigate('/');
    })
    .catch((e) => {
      console.log(e);
    })
  }

  return(
    <>
      <h1>Edit</h1>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={taskValue.title} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="memo">Memo</label>
          <input type="text" id="memo" name="memo" value={taskValue.memo} onChange={(e) => handleChange(e)}/>
        </div>
      </form>
      {/* submit button */}
      <button onClick={() => handleSubmit()}>更新</button>
    </>
  )
}
export default Edit
