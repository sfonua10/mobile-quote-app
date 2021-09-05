import React, { useState } from "react";
import Head from "next/head";
import Image from 'next/image'
import { whoAmI } from "../data/whoAmI";
import parse from "html-react-parser";

export default function Saia() {

  const [currentQuote, setCurrentQuote] = useState({
    word: "SIOSAIA FONUA",
    quote: "Know who I am",
    reference: "",
    source: "",
    image: '/saia.jpeg'
  });

  const [currentInd, setCurrentInd] = useState(0);

  const nextQuote = () => {
    setCurrentInd(currentInd + 1);
    if (currentInd === whoAmI.length - 1) {
      setCurrentInd(0);
    }

    setCurrentQuote(whoAmI[currentInd]);
  };

  return (
    <>
      <Head>
        <title>Saia Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="flex bg-white-300 h-screen font-notoSerifTC">
        <div
          className="flex flex-col text-right self-center mx-8"
          onClick={nextQuote}
        >
          <h1 className="text-4xl leading-tight uppercase text-gray-800 font-thin tracking-widest">
            {currentQuote.word}
          </h1>
          <br />
          ________

          <br /><br />
          {currentQuote.image ?
            <>
              <p className="uppercase font-quickSand tracking-widest leading-loose text-center">{currentQuote.quote}</p>
              <Image src={currentQuote.image} alt="Saia Fonua" layout="responsive" width={300} height={500} />
            </>
            :
            <div className="uppercase font-quickSand tracking-widest leading-loose" style={{ fontSize: '5vw' }}>
              {parse(currentQuote.quote)}

              <p className="text-sm opacity-50">{currentQuote.reference}</p>
              <br />
              <p className="tangerine-greatVibes">{currentQuote.source}</p>
            </div>
          }
        </div>
      </main>
    </>
  );
}
