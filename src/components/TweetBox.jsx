import { Avatar, Button } from '@mui/material'
import { dblClick } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import './css/TweetBox.css'
import db from '../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Dip',
      username: 'dip05',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweet__input">
          <Avatar src="https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"/>
          <input 
            required
            onChange={e => setTweetMessage(e.target.value)} 
            value={tweetMessage} 
            placeholder= "What's happening?"
          />
        </div>
        <input 
          className="tweet__input--img" 
          placeholder='Optional: Enter image URL' 
          type='text'
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
        />
        <Button onClick={sendTweet} type="submit" className = "tweet__btn">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox