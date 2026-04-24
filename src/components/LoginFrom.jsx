import useForm from '../hooks/formHooks';
import { useAuthentication } from '../hooks/api-hooks';

const LoginForm = () => {
  const { postLogin } = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    try {
      const result = await postLogin(formData);

      console.log(result);

      localStorage.setItem('token', result.token);

      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  const { handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            id="loginuser"
            name="username"
            type="text"
            autoComplete="username"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            id="loginpassword"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
