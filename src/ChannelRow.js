import React from 'react';
import "./ChannelRow.css";
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
  return (
    <div className="channelRow">
        <Avatar className="channelRow__logo" src={ image } alt={ channel } />
        <div className="channelRow__text">
            <h4>{ channel } { verified && <CheckCircleOutlineOutlinedIcon /> }</h4>
            <p>{subs} Subscribers . { noOfVideos } Videos</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}

export default ChannelRow;