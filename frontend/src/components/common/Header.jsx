
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";
import { signOut } from "../../lib/api/auth";
import Cookies from 'js-cookie';

// style
import styled from 'styled-components'

// styled-components
const Navbar = styled.div`
  background-color: #3a86ff;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Logo = styled.h1`
  color: white;
  margin-left: 10px;
  font-weight: 300;
`
const SignOutBtn = styled.button`
  background-color: #e1ecf4;
  border-radius: 10px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  line-height: 0;
  margin-right: 10px;
  outline: none;
  padding: .8em;
  height: 30px;

  :hover{
    background-color: #b3d3ea;
    color: #2c5777;
  }
`

const Header = () => {
  const {isSignedIn, setIsSignedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut()
    .then((res) => {
      console.log(res);
      if (res.data.success === true) {
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');

        setIsSignedIn(false);
        navigate('/signin');
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
    <Navbar>
      {/* app logo */}
      <Link to='/'>
        <Logo>TODO APP</Logo>
      </Link>
      {/* login/logout link */}
      {isSignedIn === true && (
        <SignOutBtn onClick={handleSignOut}>Sign Out</SignOutBtn>
      )}
    </Navbar>
  )
}

export default Header
