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
        "I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them",
      source: "1 Nephi 3:7",
    },
    {
      quote:
        "go, my son, and thou shalt be favored of the Lord, because thou hast not murmured",
      source: "1 Nephi 3:6",
    },
    {
      quote:
        "Great and marvelous are they works, O Lord God Almighty! Thy throne is high in the heavens, and they power, and goodness, and mercy are over all the inhabitants of the earth; and, because thou are merciful, thou wilt not suffer those who come unto thee that they shall perish!",
      source: "1 Nephi 1:14",
    },
    {
      quote:
        "his soul did rejoice, and his whole heart was filled, because of the things which he had seen, yeah, which the Lord had shown unto him.",
      source: "1 Nephi 1:15",
    },
    {
      quote:
        "the tender mercies of the Lord are over all those whom he hath chosen, because of their faith, to make them mighty even unto the power of deliverance.",
      source: "1 Nephi 1:20",
    },
    {
      quote:
        "the Lord spake unto my father, yea, even in a dream.. Blessed art thou Lehi, because of the things which thou hast done; and because thou has been faithful and declared unto this people the things which I commanded thee, behold, they seek to take away thy life.",
      source: "1 Nephi 1:20",
    },
    {
      quote:
        "having great desires to know of the mysteries of God, wherefore, I did cry unto the Lord; and behold he did visit me, and did soften my heart..",
      source: "1 Nephi 2:16",
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
  console.log("currentQuote", currentQuote.quote.split(" ").length);
  return (
    <>
      <Head>
        <title>Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="/look-up.png" />
      </Head>

      <main className={`bg-${randomColor}-200`}>
        <div className="flex h-screen mx-8" onClick={nextQuote}>
          <h1
            className={`leading-tight uppercase text-gray-800 text-right self-center ${
              currentQuote.quote.split(" ").length >= 20
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
            <Link href="/">
              <a>D&C</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
