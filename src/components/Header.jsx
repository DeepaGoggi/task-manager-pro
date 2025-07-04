import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/taskSlice";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white ">
      <h4 className="m-2">Welcome to Task Manager Pro!</h4>
      <div className="d-flex gap-2">
        <Link to="/add">
          <Button variant="outline-light">+ Add Task</Button>
        </Link>
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};
export default Header;
