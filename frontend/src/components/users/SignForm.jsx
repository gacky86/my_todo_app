// src/components/users/SignForm.jsx
import { Link } from 'react-router-dom';

const SignForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    signType,
    name,
    setName,
    passwordConfirmation,
    setPasswordConfirmation,
  } = props;

  return (
    <>
      <form action="">
        {/* Form for name (only for signUp) */}
        {signType === 'signUp' && (
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        )}

        {/* Form for email */}
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        {/* Form for password */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        {/* Form for password confirmation (only for signUp) */}
        {signType === 'signUp' && (
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input type="text" id="passwordConfirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          </div>
        )}

      </form>
      {/* button to submit */}
      <button onClick={() => handleSubmit()}>Submit</button>

      {/* link to signup (only for signin) */}
      {signType === 'signIn' && (
        <div>
          <p>Dont have an account?</p>
          <Link to='/signup'>SingUp Now!</Link>
        </div>
      )}

    </>
  );
};
export default SignForm;
