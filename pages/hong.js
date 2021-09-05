import React, { useState } from "react";
import Head from "next/head";
import parse from "html-react-parser";

export default function Hong() {
  const quotes = [
    {
      word: "PRAY",
      quote: "HEARKEN, \nO YE PEOPLE OF MY CHURCH,",
      reference: "DOCTRINE AND COVENANTS 1:1",
      source: "Joseph Smith Jr.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState({
    word: "HEARKEN",
    quote: "<p>Hearken,</p> <p>O Ye people of my church,</p><p>saith the voice of Him<p>who dwells on High,</p><p>and whose eyes are upon</p><p>all men; yea, verily I say:</p><br /><p>hearken ye people from afar;</p><p>and ye that are upon the islands of the sea,</p><p>listen together.</p>",
    reference: "DOCTRINE AND COVENANTS 6:22-23",
    source: "Joseph Smith Jr.",
  });

  const [currentInd, setCurrentInd] = useState(0);

  const nextQuote = () => {
    setCurrentInd(currentInd + 1);
    if (currentInd === quotes.length - 1) {
      setCurrentInd(0);
    }

    setCurrentQuote(quotes[currentInd]);
  };

  return (
    <>
      <Head>
        <title>Hong Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="flex bg-white-300 h-screen font-notoSerifTC">
        <div
          className="flex flex-col text-right self-center mx-8"
          onClick={nextQuote}
        >
          <h1 className="text-5xl leading-tight uppercase text-gray-800 font-thin tracking-widest">
            {currentQuote.word}
          </h1>
          <br />
          ________

          <br /><br />
          <div className="uppercase font-quickSand tracking-widest leading-loose">
            {parse(currentQuote.quote)}
            <p className="text-sm opacity-50">{currentQuote.reference}</p>
            <br />
            <p className="tangerine-greatVibes">{currentQuote.source}</p>
          </div>
        </div>
      </main>
    </>
  );
}
