import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="mt-5 mx-5">
          <h1 style={{ fontSize: "100px" }}>Oops!</h1>
          <div>
            <h1 style={{ fontSize: "50px" }}>Notfound</h1>
            {token ? (
              <>
                <Link
                  to="/dashborad"
                  style={{ color: "red", fontSize: "30px" }}
                >
                  Go Back
                </Link>
              </>
            ) : (
              <>
                <Link to="/" style={{ color: "red", fontSize: "30px" }}>
                  Go Back
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
