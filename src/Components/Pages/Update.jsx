import React, { useContext, useState } from "react";
import { UpdateContext } from "../../App";
import { Header } from "../../Common/Header";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

export const Update = () => {
  const { updateName, updatePost, handleUpdate, handleUpdateDetails } =
    useContext(UpdateContext);
  const [name, setName] = useState(updateName);
  const [title, setTitle] = useState(updatePost.title);
  const [body, setBody] = useState(updatePost.body);
  const history = useHistory();
  const handleUpdateData = (event) => {
    event.preventDefault();
    history.push("/CRUD_Application");
    handleUpdateDetails(name, title, body, updatePost.id);
  };
  return (
    <div>
      {" "}
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "75vh" }}
      >
        <Card
          className="w-100"
          style={{ maxWidth: "800px", border: "1px solid" }}
        >
          <Card.Header className="card-heading text-center text-white bg-dark">
            <b>Post Details</b>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => handleUpdateData(e)}>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Creator Name</label>
                  <Form.Control
                    className="my-2"
                    // placeholder={"Name"}
                    value={name}
                    onChange={(value) => setName(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Title</label>

                  <Form.Control
                    className="my-2"
                    // placeholder="Title"
                    value={title}
                    onChange={(value) => setTitle(value.target.value)}
                    required
                  />
                </div>
              </div>
              <Form.Group>
                <label>Body</label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="my-2"
                  // placeholder="Body"
                  value={body}
                  onChange={(value) => setBody(value.target.value)}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button type="submit">UPDATE</Button>
                <Button
                  onClick={() => {
                    history.push("/CRUD_Application");
                  }}
                  className="btn btn-dark"
                >
                  BACK
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
