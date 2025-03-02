// src/components/users/SignIn.jsx
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// context
import { AuthContext } from '../../App';
import { useContext, useState } from 'react';
// api
import { signIn } from '../../lib/api/auth';
// component
import SignForm from './SignForm';

const SignIn = () => {
  const navigate = useNavigate();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandleSubmit = () => {
    const params = generateParams();

    signIn(params)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);

        Cookies.set('_access_token', res.headers['access-token']);
        Cookies.set('_client', res.headers['client']);
        Cookies.set('_uid', res.headers['uid']);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        navigate('/');
      }
    })
    .catch((e) => {
      console.log(e);
    });
  };

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  return (
    <SignForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={signInHandleSubmit}
      signType='signIn'
    />
  );
};
export default SignIn;
