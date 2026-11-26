import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoName, autoPlay = false, onPlay, dataTestId }) => {
  const videoRef = useRef(null);
  const cdnUrl = import.meta.env.VITE_CDN_URL || "";
  const hlsSource = `${cdnUrl}/${videoName}/hls/${videoName}.m3u8`;
  const mp4Source = `${cdnUrl}/${videoName}/mp4/${videoName}.mp4`;
  const thumbnailSource = `${cdnUrl}/${videoName}/thumbnails/${videoName}.jpg`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !cdnUrl) return;

    let hls = null;

    const tryAutoPlay = () => {
      if (autoPlay) {
        video.play().catch(() => {});
      }
    };

    if (Hls.isSupported()) {
      hls = new Hls({ maxBufferLength: 30 });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, tryAutoPlay);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSource;
      tryAutoPlay();
    } else {
      video.src = mp4Source;
      tryAutoPlay();
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [cdnUrl, hlsSource, mp4Source, autoPlay]);

  const handlePlay = () => {
    if (onPlay && videoRef.current) {
      onPlay(videoRef.current);
    }
  };

  return (
    <video
      ref={videoRef}
      playsInline
      controls
      className="max-h-[75vh] w-full bg-black object-contain"
      poster={thumbnailSource}
      onPlay={handlePlay}
      data-testid={dataTestId}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;

