import '../styles/globals.css'
import HasprCursor from "haspr-cursor"; 
import "haspr-cursor/dist/cursor.css";
import Navbar from '../components/Navbar';

import {
  DispatchCursor,
  CURSOR_HIDE,
  CURSOR_COLOR,
} from "haspr-cursor";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }) {
  const dispatch = DispatchCursor();
  return (
    <>
      <HasprCursor>
        <div
          className="px-28 sm:px-10 cursor-none"
          onMouseEnter={() => CURSOR_COLOR("RED")}
          onMouseLeave={CURSOR_HIDE}
        >
          <Navbar />
          <Component {...pageProps} />
        </div>
      </HasprCursor>
      <ToastContainer />
    </>
  );
}
