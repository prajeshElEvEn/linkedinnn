import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useSelector(selectUser)
  return (
    <>
      <div className="app">
        <Header />
        {
          !user ? (
            <LoginPage />
          ) : (
            <div className="app-body">
              <Sidebar />
              <Feed />
            </div>
          )
        }

      </div>
      <ToastContainer />
    </>
  );
}

export default App;
