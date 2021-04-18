import Head from "next/head";
import FrontPage from "../components/frontPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spica Cosmo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FrontPage />
    </>
  );
}
