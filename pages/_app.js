// blog-frontend/pages/_app.js

import '../styles/styles.css';  // import your global styles here

// To load Google Fonts like Orbitron, use Next.js Head component instead of <link> in index.js
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
