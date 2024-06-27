import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ videoName }) => {

  console.log('NODE.ENV', process.env.NODE_ENV)
  console.log('CDNURL', process.env.PROD_CDN_URL)
  const videoRef = useRef(null);
  const cdnUrl = process.env.NODE_ENV === 'development'
  ? process.env.DEV_CDN_URL
  : provess.env.PROD_CDN_URL
  console.log('cdnUrl', cdnUrl)
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`
  // const hlsSource = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/hls/${videoName}.m3u8`;
  // const hlsSource = `https://poolofwork-video-output.s3.us-west-1.amazonaws.com/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`
  // const mp4Source = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`
  // const thumbnailSource = `https://d2jgbsygfslqso.cloudfront.net/${videoName}/thumbnails/${videoName}.jpg`

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