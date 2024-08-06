import React, { useEffect, useRef, useState, useCallback } from "react";
import Hls from "hls.js";

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};
const VideoPlayer = ({ videoName, onPlay }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const cdnUrl = process.env.CDN_URL;
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`;

  const initializeVid = useCallback(
    (currentTime = 0, isPlaying = false) => {
      const video = videoRef.current;

      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 30,
        });

        hlsRef.current = hls;
        hls.loadSource(hlsSource);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.currentTime = currentTime;
          if (isPlaying) {
            video.play();
          }
        });
        hlsRef.current = hls;
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsSource;
        video.currentTime = currentTime;
        if (isPlaying) {
          video.play();
        }
      } else {
        video.src = mp4Source;
        video.currentTime = currentTime;
        if (isPlaying) {
          video.play();
        }
      }
    },
    [hlsSource, mp4Source]
  );

  useEffect(() => {
    const video = videoRef.current;
    //initial mount
    initializeVid();

    const handleOrientationChange = debounce(() => {
      initializeVid(currentTime, isPlaying);
    }, 300);

    const handleFullscreenChange = () => {
      const video = videoRef.current;
      const currentTime = video.currentTime;
      const isPlaying = !video.paused;

      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        // Entered fullscreen
        initializeVid(currentTime, isPlaying);
      } else {
        // Exited fullscreen
        initializeVid(currentTime, isPlaying);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });

    observer.observe(video);

    window.addEventListener("orientationchange", handleOrientationChange);
    video.addEventListener("fullscreenchange", handleFullscreenChange);
    video.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    video.addEventListener("mozfullscreenchange", handleFullscreenChange);
    video.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      console.log("WILL DESTROY");
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      observer.unobserve(video);
      window.removeEventListener("orientationchange", handleOrientationChange);
      video.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      video.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      video.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, [initializeVid]);

  const handlePlay = () => {
    onPlay(videoRef.current);
  };

  return (
    <div>
      <video ref={videoRef} playsInline controls className="w-100" poster={thumbnailSource} onPlay={handlePlay}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;