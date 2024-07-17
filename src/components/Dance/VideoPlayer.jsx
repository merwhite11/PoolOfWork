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
const VideoPlayer = ({ videoName }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const cdnUrl = process.env.CDN_URL;
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`;

  // const initializeVid = () => {
    // if(hlsRef.current) {
    //   hlsRef.current.destroy();
    // }

  const initializeVid = useCallback(() => {
    console.log('INITIALIZE CALLED')
    const video = videoRef.current;

    if (Hls.isSupported()) {
      // if (hlsRef.current) {
      //   hlsRef.current.destroy();
      // }
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSource;
      // videoRef.current.src = hlsSource;
    } else {
      video.src = mp4Source;
      // videoRef.current.src = mp4Source;
    }
  }, [hlsSource, mp4Source]);

  useEffect(() => {
    console.log('USE EFFECT CALLED')
    initializeVid();
    const handleOrientationChange = debounce(() => {
      initializeVid();
    }, 300);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      console.log('WILL DESTROY')
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [initializeVid]);

  console.log('RENDERED')
  return (
    <div>
      <video ref={videoRef} controls className="w-100" poster={thumbnailSource}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
