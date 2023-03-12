import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { getRandomInt } from "../utils/getRandomInt";

export default function Home() {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const quotes = [
    {
      quote:
        "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him",
      source: "James 1:5",
    },
    {
      quote:
        "“they draw near to me with their lips, but their hearts are far from me, they teach for doctrines the commandments of men, having a form of godliness, but they deny the power thereof.”",
      source: "Joseph Smith History 1:19",
    },
    {
      quote: "..whose eyes are upon all men;..",
      source: "D&C 1:1",
    },
    {
      quote: "the voice of the Lord is unto all men, ...",
      source: "D&C 1:2",
    },
    {
      quote:
        "...their iniquities shall be spoken upon the housetops, and their secret acts shall be revealed.",
      source: "D&C 1:3",
    },
    {
      quote: "Let God Prevail",
      source: "President Russell M. Nelson",
    },
  ];
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentInd, setCurrentInd] = useState(0);
  const [randomColor, setRandomColor] = useState("blue");
  const nextQuote = () => {
    setCurrentInd(currentInd + 1);
    if (currentInd === quotes.length - 1) {
      setCurrentInd(0);
    }

    setCurrentQuote(quotes[currentInd]);
    setRandomColor(colors[getRandomInt(colors.length)]);
  };
  return (
    <>
      <Head>
        <title>Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="/look-up.png" />
      </Head>

      <main className={`flex bg-${randomColor}-200 h-screen content-center`}>
        <div className="flex w-screen h-screen mx-8" onClick={nextQuote}>
          <h1
            className={`leading-tight uppercase text-gray-800 self-center ${
              currentQuote.quote.split(" ").length >= 34
                ? "text-2xl"
                : "text-4xl"
            }`}
          >
            {currentQuote?.quote}
            <br />
            <br />
            <span className="text-3xl">--{currentQuote?.source}</span>
          </h1>
          <div className="self-end opacity-50">
            <Link href="/bom">
              BOM
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
