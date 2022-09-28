import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../layouts";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nikhil George</title>
        <meta name="title" content="Nikhil George | Full Stack Web Dev" />
        <meta
          name="description"
          content="Nikhil George | Full Stack Web Dev - Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikhilgeorge.in/" />
        <meta property="og:title" content="Nikhil George" />
        <meta
          property="og:description"
          content="Nikhil George | Full Stack Web Dev - Portfolio"
        />
        <meta property="og:image" content="https://nikhilgeorge.in/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nikhilgeorge.in/" />
        <meta property="twitter:title" content="Nikhil George" />
        <meta
          property="twitter:description"
          content="Nikhil George | Full Stack Web Dev - Portfolio"
        />
        <meta
          property="twitter:image"
          content="https://nikhilgeorge.in/og-image.jpg"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍇</text></svg>"
        />
      </Head>

      <main className="container max-w-4xl mx-auto px-5">
        <HomePage />
      </main>
    </>
  );
};

export default Home;
