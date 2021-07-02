import { Divider } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { CreateContext } from "../../App";
import { Header } from "../../Common/Header";

export const Create = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleCreate = useContext(CreateContext);

  const handlePostDetails = (event) => {
    event.preventDefault();
    history.push("/CRUD_Application");
    handleCreate(name, title, body);
  };
  return (
    <div>
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
            <Form onSubmit={(e) => handlePostDetails(e)}>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Creator Name</label>

                  <Form.Control
                    className="my-2"
                    placeholder="Name"
                    value={name}
                    onChange={(value) => setName(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <Form.Control
                    className="my-2"
                    placeholder="Title"
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
                  placeholder="Body"
                  value={body}
                  onChange={(value) => setBody(value.target.value)}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit">CREATE</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
