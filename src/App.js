// import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader } from "./Common/Loader";
import { Main } from "./Components/Main";

function App() {
  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      let json = await res.json();
      setPostList(json);
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
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && <Main postList={postList} userList={userList} />}
    </div>
  );
}

export default App;
