import { Link, Outlet } from "react-router-dom";
import NavbarStyle from "../components/NavbarStyle";




const SharedLayout = () => {
  return (
    <>
    <NavbarStyle />
    <Outlet />
    </>
  )
}

export default SharedLayout