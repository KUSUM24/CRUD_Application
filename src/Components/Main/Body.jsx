import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { ThumbDownAlt } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  DeleteContext,
  DislikedContext,
  LikedContext,
  PostsContext,
  UpdateContext,
  UserContext,
} from "../../App";
import "./styles/body.css";
import { useHistory } from "react-router-dom";

export const Body = ({ statusDisplay }) => {
  const postList = useContext(PostsContext);
  const userList = useContext(UserContext);
  const handleDelete = useContext(DeleteContext);
  const { updateName, updatePost, handleUpdate } = useContext(UpdateContext);

  const { likedList, handleLiked } = useContext(LikedContext);
  const { dislikedList, handleDisliked } = useContext(DislikedContext);

  const history = useHistory();

  const createPost = (data) => {
    const changeLiked = (postId) => {
      handleLiked(postId);
    };
    const changeDisliked = (postId) => {
      handleDisliked(postId);
    };
    const getUpdate = (postId) => {
      handleUpdate(postId);
      history.push("/update");
    };
    return (
      <>
        <Card className="text-center m-4 w-75">
          <Card.Header className="card-header bg-dark text-white">
            <b>{data.title} </b>
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
            <b className="d-flex ">
              By{" "}
              <div className="mx-2" style={{ textDecoration: "underline" }}>
                {userList.map((user) => {
                  if (user.id == data.userId) {
                    return user.name;
                  }
                })}
              </div>
            </b>
            <div className="d-flex">
              <div
                className="btn text-white d-flex align-items-center"
                style={{ backgroundColor: "#5567ff" }}
                onClick={() => getUpdate(data.id)}
              >
                <EditIcon />
              </div>
              <div
                className="btn text-white d-flex align-items-center mx-2"
                style={{ backgroundColor: "#ed0b4c" }}
                onClick={() => handleDelete(data.id)}
              >
                <DeleteForeverIcon />
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
