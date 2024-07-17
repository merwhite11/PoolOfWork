import React, { useEffect, useRef, useCallback } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoName }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const cdnUrl = process.env.CDN_URL;
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`;

  const initializeVid = useCallback(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      const hls = new Hls({
        debug: false,
        xhrSetup: (xhr, url) => {
          xhr.withCredentials = false;
        },
        maxBufferLength: 30,
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Fatal network error encountered, trying to recover');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Fatal media error encountered, trying to recover');
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hlsRef.current = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSource;
    } else {
      video.src = mp4Source;
    }
  }, [hlsSource, mp4Source]);

  const handleFullscreenChange = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      // Fullscreen mode
      if (!videoRef.current.src) {
        initializeVid();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      videoRef.current.play();
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

  useEffect(() => {
    initializeVid();

    const handleOrientationChange = debounce(() => {
      initializeVid();
    }, 300);

    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    window.addEventListener("orientationchange", handleOrientationChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener("orientationchange", handleOrientationChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, [initializeVid]);

  return (
    <div>
      <video ref={videoRef} controls className="w-100" poster={thumbnailSource}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
