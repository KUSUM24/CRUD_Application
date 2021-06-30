// import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader } from "./Common/Loader";
import { Main } from "./Components/Main";
import { Disliked } from "./Components/Pages/Disliked";
import { Liked } from "./Components/Pages/Liked";
export const PostsContext = React.createContext();
export const UserContext = React.createContext();
export const LikedContext = React.createContext();
export const DislikedContext = React.createContext();
function App() {
  const [postList, setPostList] = useState([]);
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
      setPostList(json);
      console.log(json);
      res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      });
      json = await res.json();
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
    console.log(currentLikedList);
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
    console.log(currentDislikedList);
    setDislikedList([...currentDislikedList]);
    setLikedList([...currentLikedList]);
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
                    <Route exact path="/">
                      <Main />
                    </Route>
                    <Route path="/liked">
                      <Liked />
                    </Route>
                    <Route path="/disliked">
                      <Disliked />
                    </Route>
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
