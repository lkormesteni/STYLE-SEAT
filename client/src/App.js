import './App.css';
import React, {useState} from 'react'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';


function App() {
  const [view, setView] = useState('Login')
  
  
  const changeToSignUp = () => {
    setView('Signup')
  }

  const changeToLogin = () => {
    setView('Login')
  }

  return (
    <div className="App">
      <div>
        {view === 'Login' && <Login changeToSignUp ={changeToSignUp}/>}
      </div>
      
      {view === 'Signup' &&  <SignUp changeToLogin={changeToLogin}/>}
    </div>
  );
}

export default App;
