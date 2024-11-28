import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoVideo = () => {
    return (
        <div className="page page5">
            <div className="video-container">
                <video controls autoPlay muted loop>
                    <source src="assets/demoVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>        </div>
    );
};

export default DemoVideo;