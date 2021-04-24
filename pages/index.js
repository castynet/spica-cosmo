import Head from "next/head";
import { useApp } from "../components/appContext";

import FrontPage from "../components/frontPage";
import PageSwitch from "../components/pageSwitch";
import FrontPageCards from "../components/frontPageCards";

export default function Home() {
  const app = useApp();

  function PageView() {
    return app.homeView === "intro" ? <FrontPage /> : <FrontPageCards />;
  }

  return (
    <>
      <Head>
        <title>Spica Cosmo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageView />
      <PageSwitch />
    </>
  );
}
