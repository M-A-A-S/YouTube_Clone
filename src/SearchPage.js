import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6MFTckQaqk8Keh4QzWVwIDVd-KWncnB1DI1aEBg&s"
            channel="ZAmericanEnglish"
            verified
            subs="660k"
            noOfVideos={ 382 }
            description="You can learn English For Free "
        />
        <hr />
        <VideoRow
        views="1.4m"
        subs="659k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Simple Past"
        />
        <VideoRow
        views="2.4m"
        subs="559k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Continuos Past"
        />
        <VideoRow
        views="1.2m"
        subs="459k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Prefect Past"
        />
        <VideoRow
        views="5.4m"
        subs="759k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Prefect Continuos Past"
        />
        <VideoRow
        views="8.4m"
        subs="459k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Simple Present"
        />
        <VideoRow
        views="10.4m"
        subs="359k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Continuos Present"
        />
        <VideoRow
        views="8.4m"
        subs="222k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Perfect Present"
        />
        <VideoRow
        views="6.4m"
        subs="393k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Perfect Continuos Present"
        />
        <VideoRow
        views="5.4m"
        subs="298k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Future Simple"
        />
        <VideoRow
        views="3.4m"
        subs="939k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Future Continuos"
        />
        <VideoRow
        views="3.4m"
        subs="439k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Future Perfect"
        />
        <VideoRow
        views="3.4m"
        subs="839k"
        description="You can learn English For Free You can learn English For Free You can learn English For Free You can learn English For Free"
        timestamp="59 Seconds ago"
        image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        channel="ZAmericanEnglish"
        title="Future Perfect Continuos"
        />
    </div>
  )
}

export default SearchPage;