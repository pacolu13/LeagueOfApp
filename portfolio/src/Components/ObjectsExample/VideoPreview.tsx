import ReactPlayer from 'react-player';

type Props = {
  video: string;
}

const VideoPreview = (video: Props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={video.video}
        controls={true}
      />
    </div>
  );
};

export default VideoPreview;
