import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Reader from "./pages/Reader/Reader.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/reader/:path"
        element={
          <ReaderWrapper />
        }
      />
      {/* <Route
        path="/cuento"
        element={
          <Reader
            doc={"unzipped_Cuento/META-INF"}
            title={"Story Twice Told // Cuento Dos Veces Contado"}
          />
        }
      />
      <Route
        path="/bobby"
        element={
          <Reader
            doc={"unzipped_BobbyAndShiloh/META-INF"}
            title={"Bobby And Shiloh Save The Night"}
          />
        }
      /> */}
    </Routes>
  </Router>
);

const ReaderWrapper = () => {
  const { path } = useParams();
  let doc = '';
  let title = '';
  console.log('PATH', path)
  switch (path) {
    case 'grapevinediaries':
      doc = 'GVD/META-INF';
      title = 'The Grapevine Diaries';
      break;
    case 'cuento':
      doc = 'Cuento/META-INF';
      title = 'Story Twice Told // Cuento Dos Veces Contado';
      break;
    case 'bobbyandshiloh':
      doc = 'BobbyAndShiloh/META-INF';
      title = 'Bobby And Shiloh Save The Night';
      break;
    default:
      break;
  }

  return <Reader doc={doc} title={title} />;
}
export default App;
