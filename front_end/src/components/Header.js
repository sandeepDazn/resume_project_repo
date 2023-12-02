// Skills.js
import React from "react";

const Header = () => {
  return (

    <header className="container mt-5">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h1 className="display-4 text-primary">John Doe - Web Developer</h1>
        <p className="lead">Web Developer</p>
      </div>
      <div className="text-right">
        <div className="mt-4">
          <a href="https://www.google.com" className="btn btn-primary mr-3">Login</a>
          <a href="https://www.google.com" className="btn btn-secondary">Register</a>
        </div>
      </div>
    </div>
    <div className="text-center">
      <img
        src={process.env.PUBLIC_URL + '/static_profile.jpg'}  // Replace with your profile picture URL
        alt="Profile"
        className="img-fluid rounded-circle mb-3"
        style={{ width: '150px', height: '150px' }}
      />
    </div>
  </header>

  );
};

export default Header;
