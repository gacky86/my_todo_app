import { useContext } from "react"
import { AuthContext } from "../../App";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
  const {isSignedIn, loading} = useContext(AuthContext);
  console.log(isSignedIn);

  if (!loading) {
    if (isSignedIn) {
      return <Outlet />
    } else {
      return <Navigate to="/signin"/>
    }
  } else {
    return <></>
  }
}

export default PrivateLayout
