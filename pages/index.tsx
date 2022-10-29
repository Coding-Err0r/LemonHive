import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import NavBar from "../components/header";

import Hero from "../components/hero";
import EventSchedule from "../components/eventSchedule";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <EventSchedule />
    </>
  );
}
