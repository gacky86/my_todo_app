
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";
import { signOut } from "../../lib/api/auth";
import Cookies from 'js-cookie';

const Header = () => {
  const {isSignedIn, setIsSignedIn} = useContext(AuthContext);

  const handleSignOut = () => {
    signOut()
    .then((res) => {
      console.log(res);
      if (res.data.success === true) {
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');

        setIsSignedIn(false);
        Navigate('/signin');
        console.log('succeeded in sign out');
      } else {
        console.log('failed in sign out');
      }
    })
    .catch((e) => {
      console.log(e);
    })
  }

  return (
    <div>
      {/* app title */}
      <h1>TODO APP</h1>
      {/* login/logout link */}
      {isSignedIn === false && (
        <Link to='/signin'>Sign In</Link>
      )}
      {isSignedIn === true && (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </div>
  )
}

export default Header
