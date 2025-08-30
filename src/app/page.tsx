import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeDescription from "@/components/HomeDescription/HomeDescription";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeDescription />
      </main>
      <Contacts />
      <Footer />
    </>
  );
}
