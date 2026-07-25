import "../styles/Video.css";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";

// Note: videos carry no <track> captions element — the content creator burns
// captions into the video files themselves.
const Video = ({ src, width, height }) => {
  const content = useContent();
  let ext = "video/" + src.slice(src.lastIndexOf(".") + 1);
  // Posters are generated at content-prep time next to each video file
  // (see scripts/generateVideoPosters.sh), so the browser only fetches
  // metadata up front instead of the whole video.
  const poster = src.replace(/\.(mp4|webm)$/, ".poster.webp");
  return (
    <div className="video-wrapper">
      <video
        width={width}
        height={height}
        controls
        controlsList="nodownload"
        disablePictureInPicture
        preload="metadata"
        poster={poster}
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
