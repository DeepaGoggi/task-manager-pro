import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ onLogout }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white ">
      <h4 className="m-2">Welcome to Task Manager Pro!</h4>
      <Button variant="outline-light" onClick={onLogout}>
        Logout
      </Button>
    </header>
  );
};
export default Header;
