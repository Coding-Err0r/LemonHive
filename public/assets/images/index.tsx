import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import NavBar from "../components/header";
import Background from "../components/background";
export default function Home() {
  return (
    <>
      <NavBar />
      <Background />
      <section className="fixed left-0 right-0 mt-24">
        <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="hidden  lg:col-span-4 lg:flex lg:mt-96 lg:-ml-20 z-40">
            <Image
              src="/assets/images/1.jpg"
              alt="mockup"
              width={329}
              height={419}
              className="rounded-2xl "
              style={{ height: "419px" }}
            />
          </div>
          {/* <Image
            src="/assets/images/shape.png"
            alt=""
            width={900}
            height={1000}
            className="fixed h-4/5 left-24 rotate-12 lg:mt-16 lg:right-1/4 lg:-translate-x-16 z-20"
          /> */}
          <Image
            src="/assets/images/shape.png"
            alt=""
            width={900}
            height={1000}
            className="fixed -mt-10 ml-28 lg:left-2/3 lg:-translate-x-1/2 lg:-ml-48 lg:mt-10"
          />
          <Image
            src="/assets/images/strip.png"
            alt=""
            width={70}
            height={50}
            className="fixed -mt-10 ml-28 lg:left-1/2 lg:-translate-x-1/2 lg:-ml-32 lg:mt-6"
          />
          <div className="mr-auto place-self-center lg:col-span-1 lg:-mt-96 lg:mb-8 lg:-ml-64 px-4 z-40">
            <h1 className="max-w-2xl mb-4 text-6xl font-bold tracking-tight leading-none md:text-5xl xl:text-9xl dark:text-black text-right">
              React
            </h1>
            <h1 className="max-w-2xl mb-4 text-6xl font-bold tracking-tight leading-none md:text-5xl xl:text-9xl dark:text-black text-right">
              Conference
            </h1>
          </div>
          <div className="mr-auto place-self-center lg:col-span-3 lg:mt-36 lg:-ml-60 z-40">
            <p className="max-w-xl mb-6 font-light px-3 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, est dignissimos. Dolores blanditiis esse ea aliquam
              minus doloribus fugiat, suscipit eaque temporibus animi
              voluptatibus laborum iusto odit nesciunt eius assumenda.
            </p>
            <div className="flex items-center bg-yellow-400 w-56 justify-center rounded-full ml-24 lg:ml-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base  font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
              </a>
              <ArrowUpRightIcon className="h-4 w-4 text-black -ml-6" />
            </div>
          </div>
          <div className="hidden  lg:col-span-4 lg:flex lg:mt-60 lg:ml-16 lg:-mr-28 z-40">
            <Image
              src="/assets/images/2.jpg"
              alt="mockup"
              width={549}
              height={559}
              className="rounded-2xl"
              style={{ height: "559px" }}
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .txt-size {
            height: 700px;
            width: 700px;
          }
        `}
      </style>
    </>
  );
}
