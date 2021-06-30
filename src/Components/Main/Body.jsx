import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { ThumbDownAlt } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  DislikedContext,
  LikedContext,
  PostsContext,
  UserContext,
} from "../../App";

export const Body = ({ statusDisplay }) => {
  const postList = useContext(PostsContext);
  const userList = useContext(UserContext);
  const { likedList, handleLiked } = useContext(LikedContext);
  const { dislikedList, handleDisliked } = useContext(DislikedContext);
  const createPost = (data) => {
    const changeLiked = (postId) => {
      handleLiked(postId);
    };
    const changeDisliked = (postId) => {
      handleDisliked(postId);
    };
    return (
      <>
        <Card className="text-center m-2 w-75">
          <Card.Header className="card-header">
            {data.id} <b>{data.title} </b>
          </Card.Header>
          <Card.Body>{data.body}</Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div
                className={`${
                  likedList.includes(data) ? "btn btn-success" : "btn btn-light"
                } mx-2`}
                onClick={() => changeLiked(data.id)}
              >
                <ThumbUpIcon />
              </div>
              <div
                className={`${
                  dislikedList.includes(data)
                    ? "btn btn-danger"
                    : "btn btn-light"
                }`}
                onClick={() => changeDisliked(data.id)}
              >
                <ThumbDownAlt />
              </div>
            </div>
            {/* {userList.map((user) => {
              if (user.id == data.userId) {
                return user.name;
              }
            })} */}
            <div className="d-flex">
              <div
                className="btn text-white d-flex align-items-center"
                style={{ backgroundColor: "#5567ff" }}
              >
                <EditIcon />
                {/* EDIT */}
              </div>
              <div
                className="btn text-white d-flex align-items-center mx-2"
                style={{ backgroundColor: "#ed0b4c" }}
              >
                <DeleteForeverIcon />
                {/* DELETE */}
              </div>
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  };
  return (
    <div className="d-flex flex-column align-items-center">
      {statusDisplay == "Disliked" ? (
        <>{dislikedList.map(createPost)}</>
      ) : (
        <>
          {statusDisplay == "Liked" ? (
            <>{likedList.map(createPost)}</>
          ) : (
            <>{postList.map(createPost)}</>
          )}
        </>
      )}
    </div>
  );
};
