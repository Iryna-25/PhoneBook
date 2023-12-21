import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "../styles/Elements.styled.jsx";

const HomePublicPage = () => (
  <Wrapper>
    <h1>Welcome!</h1>
    <h3> Create your phone book of contacts</h3>
    <p>
      <Link to={"/register"}> Sign Up </Link>(for new users) or{" "}
      <Link to={"/login"}> Log In </Link>to get access to your contacts.
    </p>
  </Wrapper>
);

export default HomePublicPage;
