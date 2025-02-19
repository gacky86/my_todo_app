import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EditTask = () => {
  const initialCurrentTask = {
    id: null,
    title: '',
    status: false,
    deadline: '', // Active-Record date型を想定
    memo: ''
  }

  // jsx上でparamsの値を取得するにはuseParamsを使う
  const { id } = useParams();

  // TaskのdataはObjectとしてstateに保持する
  // 初期値は上で定義しておく
  const [ currentTask, setCurrentTask ] = useState(initialCurrentTask);

  const navigate = useNavigate();

  const getTask = id => {
    // getが成功したらthen, 失敗したらcatchの処理を実行する
    axios.get(`http://localhost:3000/api/v1/tasks/${id}`)
    .then((res) => {
      setCurrentTask(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // jsx部分でinputのname属性でどのプロパティを更新するのかを指定しているので
  // この関数でname属性を使えばreusableな関数として扱える
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({ ...currentTask, [name]: value });
  }

  // getTaskはstateを更新する関数なので、EditTaskコンポーネント直下でcallすると
  // レンダリングをトリガーしてしまい無限ループに陥るので、useEffect内でcallする
  // idがundefinedやnullに変化したときはaxios.getを実行したくないので、わざわざif文を入れている
  // それを想定していなければif文は必要ない
  useEffect(() => {
    if (id) {
      getTask(id);
    }
  }, [id])

  // stateに保持しているtaskのデータを元に、axiosのpatchメソッドを使ってtaskのupdateを行う
  // patchで送る先はrails側のroutesに従う
  // 2/18 patch は正しく送信されている(webコンテナのログで確認済み)のに、なぜかDBがupdateされない
  // dockerを再build, 再upすると治った
  const updateTask = () => {
    axios.patch(`http://localhost:3000/api/v1/tasks/${currentTask.id}`, currentTask)
    .then(() => {
      console.log('success');
      navigate("/tasks");
      // ここでtasksにnavigateすると、App.jsxのRouteに従ってコンポーネントが入れ替わるが
      // コンポーネント外(Router外のコンポーネント)の部分は更新されないので注意
      // 最新のtasklistを常に表示したい場合などは工夫が必要
    })
    .catch(() => {
      console.log('error');
    })
  }

  return (
    <>
      <h1>Edit Task</h1>
        <div>
          <label htmlFor="title">Current Title</label>
          {/* inputタグの属性について下記参照 */}
          {/* https://qiita.com/it_tsumugi/items/b875efe89ae6c68abdd3 */}
          <input
            type="text"
            id="title"
            name="title"
            value={currentTask.title}
            onChange={handleInputChange}
          />
          <div>
            <span>CurrentStatus</span><br/>
            {currentTask.status ? "Completed" : "UnCompleted"}
          </div>

          <div>
            <button onClick={updateTask}>
              Edit
            </button>

          </div>
        </div>



      <p>{id}</p>
    </>
  )
}
export default EditTask;
