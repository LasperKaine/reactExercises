import useForm from '../hooks/formHooks';
import { useUserContext } from '../hooks/contextHooks';

const LoginForm = () => {
  const { handleLogin } = useUserContext();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    try {
      await handleLogin(formData);
    } catch (e) {
      console.log(e.message);
    }
  };

  const { handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleInputChange} />
      <input name="password" type="password" onChange={handleInputChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
