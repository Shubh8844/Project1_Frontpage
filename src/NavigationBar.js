import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import WorkIcon from "@material-ui/icons/Work";
import CreateIcon from "@material-ui/icons/Create";
import MailIcon from "@material-ui/icons/Mail";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="nav__title">
        KAR<span style={{ color: "#6066a8" }}>MA</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Nav>
          <NavLink exact className="active" to="/home">
            <span className="nav__link">
              <HomeIcon className="nav__icon" />
              Home
            </span>
          </NavLink>
          <NavLink exact className="active" to="/aboutus">
            <span className="nav__link">
              <PersonIcon className="nav__icon" />
            </span>
            AboutMe
          </NavLink>
          <NavLink exact className="active" to="/service">
            <span className="nav__link">
              <SettingsApplicationsIcon className="nav__icon" />
            </span>
            Services
          </NavLink>
          <NavLink exact className="active" to="/portfolio">
            <span className="nav__link">
              <WorkIcon className="nav__icon" />
            </span>
            Portfolio
          </NavLink>
          <NavLink exact className="active" to="/blog">
            <span className="nav__link">
              <CreateIcon className="nav__icon" />
            </span>
            Blog
          </NavLink>
          <NavLink exact className="active" to="/contact">
            <span className="nav__link">
              <MailIcon className="nav__icon" />
            </span>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
