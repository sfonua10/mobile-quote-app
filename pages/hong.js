import React, { useState } from "react";
import Head from "next/head";
const parse = require('html-react-parser');

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
    quote: "<p>Hearken, <br />O Ye people of my church,<br />saith the voice of Him<br />who dwells on High,<br />and whose eyes are upon<br />all men; yea, verily I say:<br /><br />hearken ye people from afar;<br />and ye that are<br />upon the islands of the sea,<br />listen together.</p>",
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

  const testStr = `<p>Hello, World,\nand all you beautiful people in it!</p>`
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
