import { Button, Avatar } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/736x/05/1a/1a/051a1a039d72989fbfd6735fec7b93fa.jpg" />
                    <input placeholder="What's happening" type="text"/>
                </div>
                <input 
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
