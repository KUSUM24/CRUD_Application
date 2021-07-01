// import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader } from "./Common/Loader";
import { Main } from "./Components/Main";
import { Create } from "./Components/Pages/Create";
import { Disliked } from "./Components/Pages/Disliked";
import { Liked } from "./Components/Pages/Liked";
export const PostsContext = React.createContext();
export const UserContext = React.createContext();
export const LikedContext = React.createContext();
export const DislikedContext = React.createContext();
export const DeleteContext = React.createContext();
export const SearchContext = React.createContext();
export const CreateContext = React.createContext();

function App() {
  const [postList, setPostList] = useState([]);
  const [fakeList, setFakeList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedList, setLikedList] = useState([]);
  const [dislikedList, setDislikedList] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      let json = await res.json();
      console.log(json);
      setPostList(json);
      setFakeList(json);
      console.log(json);
      res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      });
      json = await res.json();
      console.log(json);
      setUserList(json);
      setLoading(false);
    };
    fetchDetails();
    return () => {};
  }, []);
  const handleLiked = (postId) => {
    let currentLikedList = likedList;
    let currentDislikedList = dislikedList;

    postList.map((item) => {
      if (postId == item.id && !currentLikedList.includes(item)) {
        currentLikedList.unshift(item);
        if (currentDislikedList.includes(item)) {
          let index = currentDislikedList.indexOf(item);
          currentDislikedList.splice(index, 1);
        }
      }
    });
    setLikedList([...currentLikedList]);
    setDislikedList([...currentDislikedList]);
  };
  const handleDisliked = (postId) => {
    let currentDislikedList = dislikedList;
    let currentLikedList = likedList;
    postList.map((item) => {
      if (postId == item.id && !currentDislikedList.includes(item)) {
        currentDislikedList.unshift(item);
        if (currentLikedList.includes(item)) {
          let index = currentLikedList.indexOf(item);
          currentLikedList.splice(index, 1);
        }
      }
    });
    setDislikedList([...currentDislikedList]);
    setLikedList([...currentLikedList]);
  };
  const handleDelete = (postId) => {
    setPostList((prevList) => prevList.filter((post) => post.id != postId));
  };
  const handleSearch = (searchText) => {
    let searchedPosts = [];
    let reg = new RegExp(searchText, "i");
    fakeList.forEach((post) => {
      userList.forEach((user) => {
        if (
          user.id == post.userId &&
          user.name.match(reg) &&
          !searchedPosts.includes(post)
        ) {
          searchedPosts.push(post);
        }
      });
      if (
        (post.title.match(reg) || post.body.match(reg)) &&
        !searchedPosts.includes(post)
      ) {
        searchedPosts.push(post);
      }
    });
    setPostList(searchedPosts);
  };
  const handleCreate = (name, title, body) => {
    console.log(name, body, title);
    let currentPostObject = {};
    let currentUserObject = {};
    currentPostObject["userId"] = userList.length + 1;
    currentPostObject["id"] = postList.length + 1;
    currentPostObject["title"] = title;
    currentPostObject["body"] = body;
    console.log(currentPostObject);
    currentUserObject["id"] = userList.length + 1;
    currentUserObject["name"] = name;
    console.log(currentUserObject);
    postList.unshift(currentPostObject);
    userList.unshift(currentUserObject);
    console.log(postList);
  };
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Switch>
            <PostsContext.Provider value={postList}>
              <UserContext.Provider value={userList}>
                <LikedContext.Provider value={{ likedList, handleLiked }}>
                  <DislikedContext.Provider
                    value={{ dislikedList, handleDisliked }}
                  >
                    <DeleteContext.Provider value={handleDelete}>
                      <SearchContext.Provider value={handleSearch}>
                        <CreateContext.Provider value={handleCreate}>
                          <Route exact path="/">
                            <Main />
                          </Route>
                          <Route path="/liked">
                            <Liked />
                          </Route>
                          <Route path="/disliked">
                            <Disliked />
                          </Route>
                          <Route path="/create">
                            <Create />
                          </Route>
                          <Route path="/CRUD_Application">
                            <Main />
                          </Route>
                        </CreateContext.Provider>
                      </SearchContext.Provider>
                    </DeleteContext.Provider>
                  </DislikedContext.Provider>
                </LikedContext.Provider>
              </UserContext.Provider>
            </PostsContext.Provider>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
