import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView && !isLoaded) {
      videoRef.current.load();
      setIsLoaded(true);
    }
  }, [inView, isLoaded]);

  return (
    <div ref={ref} style={{ width: '100%', height: 'auto' }}>
      <video
        ref={videoRef}
        controls
        poster={poster}
        style={{ width: '50%', height: 'auto' }}
        preload="none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
