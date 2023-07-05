import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

const LoginSignup = () => {
  return (
    <section>
      <div className="fixed top-0 left-0 right-0 z-10 sm:hidden">
        <Navbar />
      </div>

      <div className="h-fit flex flex-col sm:flex-row sm:h-screen">
        <Head>
          <title>Login CHATTER</title>
          <meta name="description" content="Bookworm’s heaven" />
          <link
            rel="icon"
            href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/du8oaagwi/image/upload/v1686066266/ChatterImg_ev0xcp.svg")`
          }}
          className="relative w-full sm:w-2/5 h-screen sm:h-fit bg-cover bg-no-repeat bg-center "
        >
          <div className="absolute inset-0 h-full bg-black bg-opacity-30 text-white flex items-center justify-center flex-col">
            <h1
              className={`tracking-wider text-3xl leading-loose`}
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <b className="uppercase">chatter</b>
            </h1>
            <p
              style={{ fontFamily: "DM Sans, sans-serif" }}
              className="w-4/5 leading-relaxed "
            >
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
            <ul className="flex gap-5 p-2.5 md:hidden ">
              <li className="cursor-pointer h-10 flex items-center justify-center border-2 border-blue-700 w-28 rounded-md ">
                <Link href="#formSection">Log in</Link>
              </li>
              <li className="cursor-pointer h-10 flex items-center justify-center w-28 bg-blue-700 w-24 rounded-md capitalize text-white">
                <Link href="#formSection">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>

        <section
          className="w-full sm:w-3/5 h-screen sm:h-fit flex flex-col items-center py-4 overflow-hidden"
          id="formSection"
        >
          <div className="w-full flex items-center flex-col">
            {/*Switch Forms Navigation Section*/}
            <div className="h-12 flex flex-col justify-evenly sm:w-4/6 w-4/5">
              <div className="flex flex-row text-sm cursor-pointer">
                <p className="uppercase w-1/2">
                  <b>Register</b>
                </p>
                <p className="uppercase w-1/2 text-right">
                  <b className="">Login</b>
                </p>
              </div>

              <div className="h-1.5 w-full rounded-3xl flex bg-gray-200">
                <div className="w-1/2 h-full rounded-3xl bg-blue-700"></div>
                <div className="w-1/2 h-full"></div>
              </div>
            </div>

            {/*Form Section*/}
            <div className="relative sm:w-4/6 w-4/5 ">
              <form className="absolute left-0  ">
                <h2
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  className="text-xl"
                >
                  Register as a Writer
                </h2>
              </form>

              <form className="absolute left-full invisible">
                <h2
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  className="text-xl"
                >
                  Welcome back
                </h2>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LoginSignup;
