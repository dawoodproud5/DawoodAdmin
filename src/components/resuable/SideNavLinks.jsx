import React from "react";
import "./css/Resubale.css";
import { Link, useLocation } from "react-router-dom";

const SideNavLinks = () => {
  const location = useLocation();
  return (
    <>
      <ul className="mt-12 space-y-4">
        <li className="flex justify-start items-center gap-2 text-lg">
          <Link
            to="/dashborad"
            className={`sideNavLinkDesign ${
              location.pathname === "/dashborad" ? "active" : ""
            }`}
          >
            <span className="d-flex align-items-center px-4">Dashboard</span>
          </Link>
        </li>
        <Link
          to="/clients/info"
          className={`sideNavLinkDesign ${
            location.pathname === "/clients/info" ? "active" : ""
          }`}
        >
          <span className="d-flex align-items-center px-4">Clients</span>
        </Link>
        <li className="flex justify-start items-center gap-2 text-lg">
          <Link
            to="/candidates/info"
            className={`sideNavLinkDesign ${
              location.pathname === "/candidates/info" ? "active" : ""
            }`}
          >
            <span className="d-flex align-items-center px-4">Candidates</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideNavLinks;
