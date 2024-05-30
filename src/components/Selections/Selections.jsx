import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Button, Collapse } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

const Selections = ({ rend, selections, setSelections, title }) => {

  const [open, setOpen] = useState(false);

  const deleteSelection = (title, index) => {
    setSelections((prevSelections) => {
      const updatedSelections = { ...prevSelections };
      updatedSelections[title] = prevSelections[title].filter((item, j) => j !== index);
      return updatedSelections;
    });
  };

  return (

    <div className="col-md-10 d-flex d-row min-height-100 rounded mb-3">
      {/* <h6>Highlights</h6>
      <button className='btn btn-light justify-self-end'>V</button> */}



      <div className="flex-grow-1">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className='btn btn-light w-100 text-start d-flex align-items-center justify-content-between'
        >
          {open ? 'Close Highlights' : 'See Highlights'}
          {open ? <BiCaretUp style={{ marginLeft: 'auto' }} /> : <BiCaretDown style={{ marginLeft: 'auto' }} />}
        </Button>
        <Collapse in={open}>
          <div>
            <ul className="list-unstyled border-top border-stone-400">
              {selections[title] ? (
                selections[title].map(({ text, cfiRange }, i) => (
                  <li key={i} className="p-2 border-bottom">
                    <span>{text}</span>
                    <button
                      className="btn-close-sm ms-auto"
                      onClick={() => {
                        rend?.annotations.remove(cfiRange, 'highlight')
                        deleteSelection(title, i);
                      }}
                    >
                    </button>
                  </li>
                ))
              ) : (
                <li className="p-2"></li>
              )}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  )
};


export default Selections;