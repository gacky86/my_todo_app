import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';

// Components
import Header from "./components/common/Navbar";
import SignUp from "./components/users/SignUp";
import SignIn from "./components/users/SignIn";
import PrivateLayout from "./components/layout/PrivateLayout";
import PublicLayout from "./components/layout/PublicLayout";
import TaskLayoutSub from "./components/layout/TaskLayout";
import TaskDetailContent from "./components/task/TaskDetailContent";
import TaskDetailEdit from "./components/task/TaskDetailEdit";


// style
import './App.css'

// Functions
import { getCurrentUser } from "./lib/api/auth";

// 認証情報をグローバルに管理するためにcreateContextで定義
export const AuthContext = createContext();

const App = () => {
  // 認証情報をStateで保存するためにここで定義する
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // 認証情報のStateを更新するための関数
  // 認証ずみのユーザーがいるかどうかのチェック
  // いた場合はそのユーザーの情報を取得する
  const handleGetCurrentUser = () => {
    const response = getCurrentUser();

    if (!response || !response.then) {
      console.log("getCurrentUser() returned an invalid response");
      setLoading(false);
      return;
    }

    response.then((res) => {
      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
      } else {
        console.log('no current user');
      }
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    handleGetCurrentUser();
    console.log("useEffect");
  }, []);

  return (
    <>
      {/* AuthContext.Providerの中身ではContextが使用できる */}
      <AuthContext.Provider
        value={{loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
        <Router>
          <Header/>
          <Routes>
            <Route element={<PublicLayout/>}>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/signin' element={<SignIn/>}/>
            </Route>
            <Route element={<PrivateLayout/>}>
              <Route path='/' element={<TaskLayoutSub/>}>
                {/* 下記のコンポーネントを表示するにはTaskLayoutSubがレンダリングする中に<Outlet/>が必要 */}
                <Route path='/task/:id' element={<TaskDetailContent/>}/>
                <Route path='/edit/:id' element={<TaskDetailEdit/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  )
};
export default App;
