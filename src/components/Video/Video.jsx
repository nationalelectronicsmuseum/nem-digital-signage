const Video = ({ src, width, height }) => {
    let ext = "video/" + src.substr(src.lastIndexOf('.') + 1);
    return (
        <video width={width} height={height} controls controlsList="nodownload" disablePictureInPicture>
            <source src={src} type={ext} />
            Your browser does not support the video tag.
        </video>
    )
}

export default Video;