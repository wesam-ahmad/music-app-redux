import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
