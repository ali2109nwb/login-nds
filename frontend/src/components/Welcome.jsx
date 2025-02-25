import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title has-text-black">Dashboard</h1>
      <h2 className="subtitle">
        Welcome back{" "}
        <strong className="nama has-text-black">{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
