import React, { useContext } from "react";
import { LikedContext, UserContext } from "../../App";
import { Header } from "../../Common/Header";
import { Card } from "react-bootstrap";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { ThumbDownAlt } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Body } from "../Main/Body";

export const Liked = () => {
  const { likedList, handleLiked } = useContext(LikedContext);
  const userList = useContext(UserContext);

  return (
    <div>
      <Header />
      <Body statusDisplay="Liked" />
    </div>
  );
};
