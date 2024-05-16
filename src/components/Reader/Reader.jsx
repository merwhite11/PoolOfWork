import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
// import { PiDotsThreeOutline, PiDotsThreeOutlineFill } from "react-icons/pi";
import useLocalStorageState from 'use-local-storage-state';
// import Modal from './Modal.jsx';
// import AppNavbar from '../AppNavbar.jsx'


const Reader = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const renditionRef = useRef(null)
  const [rend, setRend] = useState(null)
  const [bookProgress, setBookProgress] = useLocalStorageState('book-progress', {});


  const handleLocationChanged = (loc) => {
    setBookProgress({
      ...bookProgress,
      [title]: loc
    });
  };

  return (

    <div className="container background">
      <div className="row">

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container">
            < ReactReader
              title={title}
              url={epubUrl}
              location = {bookProgress ? bookProgress[title] : bookProgress}
              locationChanged={handleLocationChanged}
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