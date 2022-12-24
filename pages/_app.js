import '../styles/globals.css'
import HasprCursor from "haspr-cursor"; // Import Wrapper
import "haspr-cursor/dist/cursor.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <HasprCursor>
        <div className="px-28">
          <Component {...pageProps} />
        </div>
      </HasprCursor>
    </>
  );
}
