import React, { useRef, useState } from 'react';
import './Video.css';
import VideoSidebar from './VideoSidebar';
import VideoFooter from './VideoFooter';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false)

    const handleVideoPress = () => {
        // if Video is playing 
        // stop it...
        // otherwise if it is not playing
        // play it

        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video className="video__player" onClick={handleVideoPress} loop ref={videoRef} src={url} />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
