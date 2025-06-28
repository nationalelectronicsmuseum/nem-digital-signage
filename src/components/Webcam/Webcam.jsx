import { useEffect, useRef } from 'react';

const LiveWebcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    getCam();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded shadow-lg w-full max-w-md"
      />
    </div>
  );
};

export default LiveWebcam;
