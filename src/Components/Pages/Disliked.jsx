import React from "react";
import { Body } from "../Main/Body";
import { Header } from "../../Common/Header";

export const Disliked = () => {
  return (
    <div>
      <Header />
      <Body statusDisplay="Disliked" />
    </div>
  );
};
