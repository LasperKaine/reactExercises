import useForm from '../hooks/formHooks';
import { useAuthentication } from '../hooks/api-hooks';

const RegisterForm = () => {
  const { postUser } = useAuthentication();

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async (formData) => {
    try {
      const result = await postUser(formData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const { handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />

        <input
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
