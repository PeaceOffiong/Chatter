import {
  Navbar,
  HomeBody,
  About,
  WhyChatter,
  Review,
  Others,
  Footer
} from "../components";

import { useGlobalContext } from "../context/globalContext";
import { useEffect } from "react";

export default function IndexPage() {
  const { fixNavBar,isNavbarFixed } = useGlobalContext();

  useEffect(() => {
    fixNavBar();
    console.log("wetin dey sup");
  },[isNavbarFixed]);

  return (
    <main>
      <section id="home" className="h-screen ease-linear">
        <Navbar />
        <HomeBody />
      </section>
      <section id="about" className="h-auto ">
        <article className="w-full md:flex items-center justify-center p-8 gap-8">
          <About />
        </article>
        <article className="flex items-center justify-center  p-6 flex-col">
          <WhyChatter />
        </article>
      </section>
      <section className="h-full">
        <article className="h-auto bg-yellow-100 bg-opacity-50 flex flex-col items-center justify-center p-16 md:p-24 gap-10 md:flex-row">
          <Review />
        </article>
        <article className="flex justify-center items-center h-full md:h-96 gap-10 flex-col md:flex-row">
          <Others />
        </article>
      </section>
      <Footer />
    </main>
  );
}
