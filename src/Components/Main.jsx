import React from "react";
import { Header } from "../Common/Header";
import { Body } from "./Main/Body";

export const Main = ({ postList, userList }) => {
  return (
    <div>
      <Header />
      <Body postList={postList} userList={userList} />
    </div>
  );
};
