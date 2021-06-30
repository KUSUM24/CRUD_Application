import React from "react";
import { Card } from "react-bootstrap";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { ThumbDownAlt } from "@material-ui/icons";

export const Body = ({ postList, userList }) => {
  console.log(postList);
  const createPost = (data, index) => {
    return (
      <>
        <Card className="text-center m-2 w-75">
          <Card.Header className="card-header">{data.title} </Card.Header>
          <Card.Body>{data.body}</Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <ThumbUpAltIcon style={{ color: "blue" }} />
              <ThumbDownAlt />
            </div>
            {userList.map((user) => {
              if (user.id == data.userId) {
                return user.name;
              }
            })}
            <div className="d-flex">
              <div className="btn">EDIT</div>
              <div className="btn">DELETE</div>
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  };
  return (
    <div className="d-flex flex-column align-items-center">
      {postList.map(createPost)}
    </div>
  );
};
