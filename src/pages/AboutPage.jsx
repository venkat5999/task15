import React from "react";
import { Link, Outlet } from "react-router-dom";
import About from "../components/About";

export default function AboutPage() {
  return (
    <section>
      <About />

     

      <Outlet />
    </section>
  );
}