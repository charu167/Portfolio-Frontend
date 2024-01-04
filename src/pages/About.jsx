import React, { useContext, useEffect } from "react";

//Importing Context
import AuthContext from "../context/Auth.Context";

export default function About() {
  const context = useContext(AuthContext);
  return (
    <div>
      <div>About</div>
      <div>{context}</div>
    </div>
  );
}
