import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FaHome, FaNewspaper, FaRegEdit, FaUserCheck } from "react-icons/fa";
import {
  MdDashboardCustomize,
  MdOutlineContactPhone,
  MdOutlineModeOfTravel,
} from "react-icons/md";
import { useSelector } from "react-redux";

function Header() {
  const isLogging = useSelector((store) => store.log.isLogin);
  const navigate = useNavigate();
  // const isLogging = localStorage.getItem("token");

  const LogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/home");
    }
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" title="Home" to="/">
          <MdOutlineModeOfTravel /> THE TRAVELS
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <NavLink className="nav-link" title="Home" to="/">
              <FaHome size={20} /> Home
            </NavLink>
            <NavLink className="nav-link" title="Contact" to="/contact">
              <MdOutlineContactPhone size={20} /> Contact Me
            </NavLink>

            {isLogging ? (
              <>
                <NavLink className="nav-link" title="Exams" to="/exams">
                  <FaNewspaper size={20} /> Exams
                </NavLink>

                <NavLink title="Users" to="/users" className="nav-link">
                  <FaUserCheck size={20} /> User
                </NavLink>
                <NavLink className="nav-link" title="dashboard" to="/dashboard">
                  <MdDashboardCustomize size={20} /> DashBorad
                </NavLink>
              </>
            ) : (
              ""
            )}
            {isLogging ? (
              <>
                <NavLink title="Login" onClick={LogOut} className="nav-link">
                  <CiLogout size={20} /> logOut
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" title="Register" to="/register">
                  <FaRegEdit size={20} /> Register
                </NavLink>{" "}
                <NavLink title="Login" to="/login" className="nav-link">
                  <CiLogin size={20} /> login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
