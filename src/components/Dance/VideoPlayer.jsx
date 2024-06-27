import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ videoName }) => {

  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)
  const cdnUrl = process.env.CDN_URL
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`

  const initializeVid = (autoplay) => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      if(autoplay) {
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
          setIsPlaying(true);
        });
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
      if (autoplay) {
        video.addEventListener('loadedmetadata', () => {
          video.play();
          setIsPlaying(true);
        });
      }
    } else {
      video.src = mp4Source;
      if (autoplay) {
        video.addEventListener('loadedmetadata', () => {
          video.play();
          setIsPlaying(true);
        });
      }
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const handleOrientationChange = debounce(() => {
    if (isPlaying) {
      initializeVid(true)
    }
  }, 300);

  useEffect(() => {
    initializeVid(false);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
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