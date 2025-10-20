import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>about page</p>
      <Outlet />
    </div>
  );
};

export default About;
