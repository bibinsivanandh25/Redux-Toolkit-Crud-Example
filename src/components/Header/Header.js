import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 bg-black">
      <div className="d-flex  justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none text-white fs-4 fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-check2-square"
            viewBox="0 0 16 16"
          >
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
          </svg>
          <span> TodoList</span>
        </Link>
        <nav className="d-flex justify-content-between navbar">
          <ul className="text-white list-unstyled d-flex  align-items-center m-0">
            <li className="fs-4 me-3 ">
              <Link to="/" className="text-decoration-none text-white fw-bold">
                Home
              </Link>
            </li>
            <li className="fs-4 me-3">
              <Link
                to="/add"
                className="text-decoration-none text-white fw-bold"
              >
                AddItems
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
