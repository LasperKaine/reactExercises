import { useState } from 'react';
import LoginForm from "../components/LoginFrom";
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <button onClick={() => setShowLogin(!showLogin)}>
        Switch
      </button>

      {showLogin ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;
