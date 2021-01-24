import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';

export default function Feed() {
    const [posts, setsPosts] = useState([]);

    useEffect(() => {
        // effect
        return () => {
            // cleanup
        }
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
            <Post displayName="arafat alkayfee"
                username="aalkayfe"
                verified={true}
                text="HEYYYY"
                avatar="https://i.pinimg.com/736x/05/1a/1a/051a1a039d72989fbfd6735fec7b93fa.jpg"
                image="https://i.pinimg.com/736x/05/1a/1a/051a1a039d72989fbfd6735fec7b93fa.jpg"
                />
            
        </div>
    )
}
