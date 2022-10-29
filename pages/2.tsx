import NavBar from "../components/header";
import React, { useEffect, useState } from "react";
import { arrayMoveImmutable } from "array-move";
import sortableList from "../components/sortableList";
import SortableList from "../components/sortableList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ peoples }: any) {
  const [items, setItems] = useState([
    "Organizer",
    "Speakers",
    "Location",
    "Schedule",
    "Sponsors",
  ]);
  let res;

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex));
  };

  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="container grid max-w-screen-xl px-4  mx-auto mt-24">
          <div className="wrapper rounded  w-full ">
            <div className="header flex flex-col justify-between lg:p-2 lg:px-4 px-6 ">
              <h1 className="text-6xl font-semibold -ml-1 ">Event Schedule</h1>
              <p className="py-6 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                suscipit iste ut eos.
              </p>
            </div>
          </div>
          <SortableList items={items} onSortEnd={onSortEnd} />

          <div className="lg:absolute lg:inset-72 lg:ml-96">
            {peoples.map((people: any, id: number) => {
              return (
                <div
                  className="relative flex flex-col lg:flex-row lg:space-x-0 space-y-1 lg:space-y-0 rounded-xl  max-w-xs lg:max-w-4xl mx-auto my-16 "
                  key={id}
                >
                  <div className="w-full lg:w-1/3 grid lg:place-items-center">
                    <img
                      src={people.image["url"]}
                      alt="tailwind logo"
                      className="rounded-xl h-32"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 bg-white flex flex-col space-y-2 lg:-space-x-10">
                    <h3 className="font-black text-gray-800 lg:text-xl text-xl lg:-ml-10 lg:-mt-0 -mt-32 ml-36 ">
                      {people.name}
                      <h3 className="font-light text-gray-800 lg:text-xl text-xl  lg:text-right lg:-mt-6 lg:-mr-10">
                        {people.company == null ? "NULL" : people.company}
                      </h3>
                    </h3>

                    <p className="lg:text-lg text-gray-500 text-justify ml-36 lg:ml-0">
                      {people.about}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.react-finland.fi/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        people {
          image {
            url
          }
          name
          about
          company
        }
      }
    `,
  });
  return {
    props: {
      peoples: data.people,
    },
  };
}
