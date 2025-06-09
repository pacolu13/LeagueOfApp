import React from 'react';
import ReactPlayer from 'react-player';

type Props = {
  video: string;
}

const VideoPreview = (video : Props ) => {
  return (
    <div className="player-wrapper" style={{ maxWidth: '640px' }}>
      <ReactPlayer 
        url={video.video}
        controls={true}
        width="100%"
      />
    </div>
  );
};

export default VideoPreview;
