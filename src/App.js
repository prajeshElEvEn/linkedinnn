import React, { useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import Widgets from './components/Widgets';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <>
      <div className="app">
        <Header />
        {
          !user ? (
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          ) : (
            <div className="app-body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )
        }
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
