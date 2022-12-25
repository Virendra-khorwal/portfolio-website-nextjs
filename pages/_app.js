import '../styles/globals.css'
import HasprCursor from "haspr-cursor"; 
import "haspr-cursor/dist/cursor.css";
import Navbar from '../components/Navbar';

import {
  DispatchCursor,
  CURSOR_SHOW,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,
  CURSOR_EXCLUSION,
  CURSOR_STICKY,
  CURSOR_MAGNETIC,
  CURSOR_REVEAL,
  CURSOR_UNDERLINE,
} from "haspr-cursor";


export default function App({ Component, pageProps }) {
  const dispatch = DispatchCursor();
  return (
    <>
      <HasprCursor>
        <div
          className="px-28 cursor-none"
          onMouseEnter={() => CURSOR_COLOR("RED")}
          onMouseLeave={CURSOR_HIDE}
        >
          <Navbar />
          <Component {...pageProps} />
        </div>
      </HasprCursor>
    </>
  );
}
