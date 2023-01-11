import React from "react";
import Nav from "./Nav";
import Title from "./Title";

const Mainpage = ({ children }) => {
  return (
    <div>
      <Title
        title="Box office"
        subtitle="Are you locking for a movie or an actor?"
      />
      <Nav />

      {children}
    </div>
  );
};

export default Mainpage;
