import "../../styles/Video.css";

const Video = ({ src, width, height }) => {
  let ext = "video/" + src.substr(src.lastIndexOf(".") + 1);
  return (
    <div className="video-wrapper">
      <video
        width={width}
        height={height}
        controls
        controlsList="nodownload"
        disablePictureInPicture
        className="content-video"
      >
        <source src={src} type={ext} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
