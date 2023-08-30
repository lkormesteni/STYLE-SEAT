import './App.css';
import React, {useState} from 'react'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';

function App() {
  const [view, setView] = useState('Login')
  
  const changeToHome = () => {
    setView('Home')
  }

  const changeToSignUp = () => {
    setView('SignUp')
  }

  const changeToLogin = () => {
    setView('Login')
  }

  return (

    <div className="App">
      {view === 'Login'  && <Login  changeToSignUp  ={changeToSignUp} changeToHome={changeToHome}/>} 
      {view === 'SignUp' && <SignUp changeToLogin   ={changeToLogin}  changeToHome={changeToHome}/>}
      {view === 'Home'   && <Home />}


    </div>
  );
}

export default App;
