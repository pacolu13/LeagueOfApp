import ReactPlayer from 'react-player';

type Props = {
  video: string;
}

export const VideoPreview = (video: Props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={video.video}
        controls={true}
      />
    </div>
  );
};

