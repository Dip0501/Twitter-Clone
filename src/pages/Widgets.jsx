import React from 'react'
import './css/Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <SearchIcon className="widgets__search"/>
          <input placeholder='Search Twitter' type="text" />
        </div>

        <div className="widgets__container">
          <h2>What's happening</h2>
          
          <TwitterTweetEmbed tweetId={"1551404019305697280"} />
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="BillGates"
            options={{ height: 400 }}
          />
          <TwitterShareButton
            url={"https://twitter.com/BillGates"}
            options={{text: "Bill Gates is awesome!", via: "BillGates"}}
          />
        </div>
    </div>
  )
}

export default Widgets