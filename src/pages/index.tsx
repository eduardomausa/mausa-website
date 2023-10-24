import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDescription from "../components/HomeDescription";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Mausa</title>
      </Head>
      <Header />
      <main>
        <HomeDescription />
      </main>
      <Footer />
    </>
  );
}
