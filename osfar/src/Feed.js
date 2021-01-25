import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db } from "./firebase";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setsPosts] = useState([]);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setsPosts(snapshot.docs.map((doc) => ({id: doc.id, post: doc.data()})))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map(({id,post}) => (
          <Post
            key={id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
