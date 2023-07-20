import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid container ">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-center" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-center" to="/allPackages">
                  All Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-center" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-center" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active text-center" to="/addToDB">
                    Add Package
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active text-center" to="/users">
                    All Users
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active text-center" to="/myBooking">
                    My Booking
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link
                    className="nav-link active text-warning tw-bold m-2  text-center border border-warning rounded-pill p-1"
                    to="/home"
                  >
                    {user.photoURL ? (
                      <span>
                        <img className="userImg" src={user.photoURL} alt="" />
                      </span>
                    ) : (
                      <span>
                        <img
                          className="userImg"
                          src="https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg"
                          alt=""
                        />
                      </span>
                    )}{" "}
                    {user?.displayName}
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              {user?.email ? (
                <button className="btn btn-outline-danger" onClick={logOut}>
                  Sign Out
                </button>
              ) : (
                <Link to="/signIn">
                  <button className="btn btn-outline-warning mx-2">
                    Sign In
                  </button>
                </Link>
              )}
              {!user?.email ? (
                <Link to="/signUp">
                  <button className="btn btn-outline-info">Sign Up</button>
                </Link>
              ) : (
                <p></p>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
