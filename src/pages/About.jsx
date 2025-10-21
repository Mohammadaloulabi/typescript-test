import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>about page</p>
      <img src="/typescript-test/vite.svg" alt="k" />
      <Outlet />
    </div>
  );
};

export default About;
