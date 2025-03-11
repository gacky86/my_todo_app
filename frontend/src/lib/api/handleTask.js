// handleTask.js
// 役割：HTTPリクエストを送信する

import { getTaskList, getTaskDetail, deleteTask, createTask, updateTask } from "./task";

// taskの一覧を取得する
// 結局使わなそう
// 非同期処理にreturnがある場合、そのreturnを受け取らないまま、この関数の使用箇所の処理が進み
// 結果的にundefinedの値を扱うことになってerrorが出てしまう
// つまり、handle--の関数は使用箇所で定義する方がいい
export const handleGetTaskList = () => {
  getTaskList()
  .then((res) => {
    return res.data;
  })
  .catch((e) => {
    console.log(e);
  });
};

// 個別のタスクのdetailを取得する
export const handleGetTaskDetail = (id) => {
  getTaskDetail(id)
  .then((res) => {
    return res;
  })
  .catch((e) => {
    console.log(e);
  });
};

// 新しいタスクを作成する
export const handleCreateTask = (newTask) => {
  createTask(newTask)
  .then(() => {
    console.log("successfully created");
  })
  .catch((e) => {
    console.log(e);
  });
};

// 個別のタスクを削除する
export const handleDelete = (id) => {
  deleteTask(id)
  .then(() => {
    console.log("successfully deleted");
  })
  .catch((e) => {
    console.log(e);
  });
};

// stateに持っているtaskDetailの値で個別のタスクを更新する
export const handleUpdateTask = ({id, task}) => {
  updateTask(id, task)
  .then(() => {
    console.log("successfully updated");
  })
  .catch((e) => {
    console.log(e);
  });
};
