// src/components/users/SignForm.jsx
import { Link } from 'react-router-dom';


// style
import styled from 'styled-components'

const FormContainer = styled.div`
  margin: 100px auto;
  width: 400px;
  border: 1px solid black;
  text-align: center;
  border: 1px solid #7aa7c7;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #e1ecf4;
  input {
    margin: 3px;
    width: 60%;
    /* display: block; */
    background-color: #e5e8e9;
    padding: 3px;
    border: 1px solid #7aa7c7;
    border-radius: 5px;
    font-size: 16px;
    color: #5686c9;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`
const FormHeader = styled.h2`
  font-weight: 200;
  color: #5c89c8;
  margin: 10px 20px;
  border-bottom: 0.5px solid #7aa7c7;
  `

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
    <FormContainer>
      {signType === 'signUp' ?
        (<FormHeader>Sign up</FormHeader>) :
        (<FormHeader>Sign In</FormHeader>)}
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
      <button onClick={() => handleSubmit()}>Sign In</button>

      {/* link to signup (only for signin) */}
      {signType === 'signIn' && (
        <div>
          <p>Dont have an account?</p>
          <Link to='/signup'>SingUp Now!</Link>
        </div>
      )}

    </FormContainer>
  );
};
export default SignForm;
