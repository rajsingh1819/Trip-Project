import { Container, Row, Button } from "reactstrap";
import React, { useRef, useEffect, useState } from "react";

import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../Header/Header.css";
import TokenDecode from "../../utils/TokenDecode";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/bookTour",
    display: "ToursBook",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

function Header() {
  const [userAvaialble, setUserAvaialble] = useState(false);
  const navigation = useNavigate();
  const { userId, user } = TokenDecode();
  // console.log('user===>', user);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHederFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky_header");
      } else {
        headerRef.current?.classList.remove("stick_header");
      }
    });
  };

  const logout = () => {
    localStorage.clear();
    setUserAvaialble(false);
    navigation("/home");
  };

  useEffect(() => {
    const loginData = localStorage.getItem("autoToken");
    loginData && setUserAvaialble(loginData);
  }, [localStorage.getItem("autoToken"), !localStorage.getItem("autoToken")]);

  useEffect(() => {
    stickyHederFunc();
    return window.removeEventListener("scroll", stickyHederFunc);
  });

  const toggleMenu = () => menuRef.current?.classList.toggle("show_menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row style={{ backgroundColor: "yellow" }}>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : null
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right ">
              <div className="nav_btns">
                {userAvaialble ? (
                  <>
                    <h5 className="mb-0">{user?.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn" color="warning">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn" color="warning">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
