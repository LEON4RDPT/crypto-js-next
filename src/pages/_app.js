// src/pages/_app.js

import '../styles/App.css';  // Adjust based on your structure
import '../styles/Register.css'; // Add any other styles you need globally
import '../styles/Modal.css'; // Add any other styles you need globally

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
