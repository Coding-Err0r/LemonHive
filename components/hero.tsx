import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <>
      <section className="mt-24">
        <div className="">
          <div className="absolute flex gap-x-96 left-1/2 transform -translate-x-1/2 z-0">
            <div className=" bg-circle rounded-full bg-circle-left z-30 "></div>
            <div className="bg-circle rounded-full bg-circle-right z-30"></div>
          </div>
        </div>
        <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 relative">
          <div className="hidden  lg:col-span-4 lg:flex lg:mt-96 lg:-ml-20 z-40">
            <Image
              src="/assets/images/1.jpg"
              alt="mockup"
              width={329}
              height={419}
              className="rounded-2xl z-40"
              style={{ height: "419px" }}
            />
            <div className="z-30  h-40 w-40 lg:-ml-24 lg:mt-72">
              <svg
                width="197"
                height="191"
                viewBox="0 0 197 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.1011 1.41208C60.7298 1.14322 61.3619 0.880734 61.9973 0.624695H135.418C136.053 0.880734 136.685 1.14322 137.314 1.41208H60.1011Z"
                  fill="#FFC93E"
                />
                <path
                  d="M45.3269 9.28589C45.7365 9.02046 46.1482 8.75799 46.562 8.49851H150.853C151.267 8.75799 151.678 9.02046 152.088 9.28589H45.3269Z"
                  fill="#FFC93E"
                />
                <path
                  d="M34.7901 17.1597C35.0986 16.8954 35.4088 16.6329 35.7207 16.3723H161.694C162.006 16.6329 162.316 16.8954 162.625 17.1597H34.7901Z"
                  fill="#FFC93E"
                />
                <path
                  d="M26.6015 25.0335C26.846 24.7697 27.092 24.5073 27.3395 24.2461H170.076C170.323 24.5073 170.569 24.7697 170.814 25.0335H26.6015Z"
                  fill="#FFC93E"
                />
                <path
                  d="M20.0268 32.9073C20.2246 32.6439 20.4236 32.3814 20.6239 32.12H176.791C176.991 32.3814 177.19 32.6439 177.388 32.9073H20.0268Z"
                  fill="#FFC93E"
                />
                <path
                  d="M14.6905 40.7812C14.851 40.5179 15.0127 40.2554 15.1755 39.9938H182.239C182.402 40.2554 182.564 40.5179 182.724 40.7812H14.6905Z"
                  fill="#FFC93E"
                />
                <path
                  d="M10.3721 48.655C10.5011 48.3919 10.6313 48.1294 10.7626 47.8676H186.652C186.784 48.1294 186.914 48.3919 187.043 48.655H10.3721Z"
                  fill="#FFC93E"
                />
                <path
                  d="M6.93085 56.5288C7.03229 56.2658 7.13483 56.0033 7.23846 55.7414H190.177C190.28 56.0033 190.383 56.2658 190.484 56.5288H6.93085Z"
                  fill="#FFC93E"
                />
                <path
                  d="M4.27269 64.4026C4.34916 64.1397 4.42669 63.8772 4.50529 63.6152H192.91C192.988 63.8772 193.066 64.1397 193.142 64.4026H4.27269Z"
                  fill="#FFC93E"
                />
                <path
                  d="M2.33284 72.2764C2.38615 72.0136 2.4405 71.7511 2.4959 71.4891H194.919C194.974 71.7511 195.029 72.0136 195.082 72.2764H2.33284Z"
                  fill="#FFC93E"
                />
                <path
                  d="M1.06643 80.1503C1.09783 79.8875 1.13026 79.625 1.16373 79.3629H196.251C196.285 79.625 196.317 79.8875 196.349 80.1503H1.06643Z"
                  fill="#FFC93E"
                />
                <path
                  d="M0.442878 88.0241C0.453205 87.7613 0.46456 87.4989 0.476941 87.2367H196.938C196.95 87.4989 196.962 87.7613 196.972 88.0241H0.442878Z"
                  fill="#FFC93E"
                />
                <path
                  d="M0.442878 95.8979C0.432572 95.6357 0.423291 95.3732 0.415039 95.1105H197C196.992 95.3732 196.982 95.6357 196.972 95.8979H0.442878Z"
                  fill="#FFC93E"
                />
                <path
                  d="M1.06643 103.772C1.0351 103.51 1.00481 103.247 0.975545 102.984H196.439C196.41 103.247 196.38 103.51 196.349 103.772H1.06643Z"
                  fill="#FFC93E"
                />
                <path
                  d="M2.33284 111.646C2.27968 111.383 2.22756 111.121 2.17649 110.858H195.238C195.187 111.121 195.135 111.383 195.082 111.646H2.33284Z"
                  fill="#FFC93E"
                />
                <path
                  d="M4.27269 119.519C4.19648 119.257 4.12134 118.995 4.04725 118.732H193.368C193.294 118.995 193.218 119.257 193.142 119.519H4.27269Z"
                  fill="#FFC93E"
                />
                <path
                  d="M6.93085 127.393C6.82983 127.131 6.7299 126.869 6.63106 126.606H190.784C190.685 126.869 190.585 127.131 190.484 127.393H6.93085Z"
                  fill="#FFC93E"
                />
                <path
                  d="M10.3721 135.267C10.2437 135.005 10.1165 134.743 9.99034 134.48H187.425C187.299 134.743 187.171 135.005 187.043 135.267H10.3721Z"
                  fill="#FFC93E"
                />
                <path
                  d="M14.6905 143.141C14.5311 142.879 14.3728 142.617 14.2157 142.353H183.199C183.042 142.617 182.884 142.879 182.724 143.141H14.6905Z"
                  fill="#FFC93E"
                />
                <path
                  d="M20.0268 151.015C19.8306 150.753 19.6356 150.491 19.442 150.227H177.973C177.779 150.491 177.584 150.753 177.388 151.015H20.0268Z"
                  fill="#FFC93E"
                />
                <path
                  d="M26.6015 158.888C26.3594 158.627 26.1187 158.365 25.8794 158.101H171.536C171.296 158.365 171.056 158.627 170.814 158.888H26.6015Z"
                  fill="#FFC93E"
                />
                <path
                  d="M34.79 166.762C34.4858 166.502 34.1832 166.239 33.8822 165.975H163.533C163.232 166.239 162.929 166.502 162.625 166.762H34.79Z"
                  fill="#FFC93E"
                />
                <path
                  d="M45.3269 174.636C44.9263 174.376 44.5277 174.114 44.1311 173.849H153.284C152.887 174.114 152.489 174.376 152.088 174.636H45.3269Z"
                  fill="#FFC93E"
                />
                <path
                  d="M60.1011 182.51C59.5008 182.253 58.9036 181.991 58.3095 181.723H139.105C138.511 181.991 137.914 182.253 137.314 182.51H60.1011Z"
                  fill="#FFC93E"
                />
                <path
                  d="M111.206 189.596C107.113 190.116 102.942 190.384 98.7075 190.384C94.4735 190.384 90.3019 190.116 86.2089 189.596H111.206Z"
                  fill="#FFC93E"
                />
              </svg>
            </div>
          </div>
          <Image
            src="/assets/images/shape.png"
            alt=""
            width={900}
            height={1000}
            className="absolute  ml-36 h-2/3 rotate-12 lg:left-1/2 lg:-translate-x-1/2 lg:mt-32 lg:ml-72  lg:h-4/5 lg:rotate-12"
          />
          <Image
            src="/assets/images/strip.png"
            alt=""
            width={70}
            height={50}
            className="absolute -mt-10 ml-28 lg:left-1/2 lg:-translate-x-1/2 lg:-ml-32 lg:mt-6"
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
                Buy Tickets
              </a>
              <ArrowUpRightIcon className="h-4 w-4 text-black -ml-6" />
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:-mb-56 lg:mt-28">
              <Link
                to="scheduler"
                spy={true}
                smooth={true}
                className=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base  font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 -rotate-90 mb-7"
              >
                Scroll Down
              </Link>
              <div className="-ml-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0314936 0.938778L8.3137 15.284L16.5959 0.938778L15.5705 0.938777L8.3137 13.5079L1.05692 0.938777L0.0314936 0.938778Z"
                    fill="#0A142F"
                  />
                  <path
                    d="M2.26385 0.938778L8.3137 11.4174L14.3636 0.938777L2.26385 0.938778Z"
                    fill="#0A142F"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden  lg:col-span-4 lg:flex lg:mt-60 lg:ml-16 lg:-mr-28 z-40 lg:flex-col">
            <Image
              src="/assets/images/2.jpg"
              alt="mockup"
              width={549}
              height={559}
              className="rounded-2xl lg:mt-4"
              style={{ height: "559px" }}
            />

            <div className="lg:-mt-16 lg:-ml-16">
              <svg
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1206 0.261045L67.3333 43.9947L110.997 10.6905L79.6675 55.7921L124.835 87.0275L72.2589 71.1682L56.5097 123.777L55.3461 68.8737L0.445394 70.1523L52.3019 52.0796L34.1206 0.261045Z"
                  fill="#FFC93E"
                />
              </svg>
            </div>
          </div>
          <div className="lg:hidden  z-40 mt-10 flex flex-col right-0 left-0 m-auto">
            <Image
              src="/assets/images/2.jpg"
              alt="mockup"
              width={327}
              height={333}
              className="rounded-2xl"
              style={{ height: "333px" }}
            />
            <div className="ml-56 -mt-16">
              <svg
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1206 0.261045L67.3333 43.9947L110.997 10.6905L79.6675 55.7921L124.835 87.0275L72.2589 71.1682L56.5097 123.777L55.3461 68.8737L0.445394 70.1523L52.3019 52.0796L34.1206 0.261045Z"
                  fill="#FFC93E"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .bg-circle {
            height: 700px;
            width: 700px;
          }
          .bg-circle-right {
            background: #be229c;
            opacity: 0.13;
            filter: blur(250px);
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
          .bg-circle-left {
            background: #7c3eff;
            opacity: 0.13;
            filter: blur(250px);
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
        `}
      </style>
    </>
  );
};

export default Hero;
