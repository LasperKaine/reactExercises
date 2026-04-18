import useForm from '../hooks/formHooks';
import { useAuthentication } from '../hooks/apiHooks';

const RegisterForm = () => {
  const { postUser } = useAuthentication();

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async () => {
    try {
      const result = await postUser(inputs);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input name="username" onChange={handleInputChange} />
        </div>

        <div>
          <label>Email</label>
          <input name="email" onChange={handleInputChange} />
        </div>

        <div>
          <label>Password</label>
          <input name="password" type="password" onChange={handleInputChange} />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
