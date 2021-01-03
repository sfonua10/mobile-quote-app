import React, {useState} from 'react';
import Head from "next/head";
import {getRandomInt} from '../utils/getRandomInt';

export default function Home() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const quotes = [
    {
      quote: '..whose eyes are upon all men;..',
      source: 'D&C 1:1'
    },
    {
      quote: 'the voice of the Lord is unto all men, ...',
      source: 'D&C 1:2'
    },
    {
      quote: '...their iniquities shall be spoken upon the housetops, and their secret acts shall be revealed.',
      source: 'D&C 1:3'
    },
    {
      quote: 'Let God Prevail',
      source: 'President Russell M. Nelson'
    }
  ];
  const [currentQuote, setCurrentQuote] = useState({
    quote: 'CTR',
    source: 'Bishop'
  });
  const [currentInd, setCurrentInd] = useState(0);
  const [randomColor, setRandomColor] = useState('blue');
  const nextQuote = () => {
    setCurrentInd(currentInd + 1);
    if(currentInd === quotes.length - 1) {
      setCurrentInd(0);
    }
    
    setCurrentQuote(quotes[currentInd]);
    setRandomColor(colors[getRandomInt(colors.length)]);
  } 
  return (
    <>
      <Head>
        <title>Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>

      <main className={`flex bg-${randomColor}-200 h-screen content-center`}>
        <div className="self-center" onClick={nextQuote}>
          <h1 className="text-4xl leading-tight mx-8 uppercase text-gray-800">
            {currentQuote?.quote}
            <br />
            <br />
            <span className="text-3xl">--{currentQuote?.source}</span>
          </h1>
        </div>
      </main>
    </>
  );
}
