import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
// import { PiDotsThreeOutline, PiDotsThreeOutlineFill } from "react-icons/pi";
import useLocalStorageState from 'use-local-storage-state';
import urljoin from 'url-join';
// import Modal from './Modal.jsx';
// import AppNavbar from '../AppNavbar.jsx'


const Reader = ({ doc, title }) => {
  const publicUrl = (process.env.PUBLIC_URL || '')
  const epubUrl = urljoin(publicUrl, 'epubs', doc)
  // const epubUrl = `process.env.PUBLIC_URL/epubs/${doc}`
  const renditionRef = useRef(null)
  const [rend, setRend] = useState(null)
  const [bookProgress, setBookProgress] = useLocalStorageState('book-progress', {});
  const [location, setLocation] = useState(null);
  console.log('publicurl', publicUrl)
  console.log('process.env', process.env.PUBLIC_URL)
  console.log('EPUBURL', epubUrl)
  console.log('Title', title)
  const handleLocationChanged = (loc) => {
    setBookProgress({
      ...bookProgress,
      [title]: loc
    });
  };

  return (

    <div className="container background"
     >
      <div className="row">

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container"
             style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            < ReactReader
              title={title}
              url={epubUrl}
              // location = {bookProgress ? bookProgress[title] : bookProgress}
              location={location}
              locationChanged={(loc) => { setLocation(loc) }}
              // locationChanged={handleLocationChanged}
              getRendition={(rendition) => {
                renditionRef.current = rendition;
                setRend(rendition)
                rendition.hooks.content.register((contents) => {
                  const body = contents.window.document.querySelector('body')
                  if (body) {
                    body.oncontextmenu = () => {
                      return false
                    }
                  }
                })
              }}
            />
          </div>
        </div>
      </div>
    </div >
  )
};

export default Reader;