import { Button, Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { db } from './firebase';
import './TweetBox.css';
import firebase from "firebase";

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        
        db.collection("posts").add({
            displayName: 'King James',
            username: "kingjames",
            vervied: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/736x/05/1a/1a/051a1a039d72989fbfd6735fec7b93fa.jpg",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setTweetImage("");
        setTweetMessage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/736x/05/1a/1a/051a1a039d72989fbfd6735fec7b93fa.jpg" />
                    <input value={tweetMessage} placeholder="What's happening" type="text" onChange={(e) => setTweetMessage(e.target.value)}/>
                </div>
                <input 
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                />
                <Button onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
