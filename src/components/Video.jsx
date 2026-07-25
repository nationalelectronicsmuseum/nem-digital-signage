import "../styles/Video.css";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";

const Video = ({ src, width, height }) => {
  const content = useContent();
  let ext = "video/" + src.slice(src.lastIndexOf(".") + 1);
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
        {resolvePath(content, "common.label.videoUnsupported") ||
          "Your browser does not support the video tag."}
      </video>
    </div>
  );
};

export default Video;
