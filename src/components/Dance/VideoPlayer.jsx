import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ videoName }) => {
  const videoRef = useRef(null);
  const hlsSource = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/thumbnails/${videoName}.jpg`

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
    } else {
      video.src = mp4Source;
    }
  }, [hlsSource, mp4Source]);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        className="w-100"
        poster={thumbnailSource}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;