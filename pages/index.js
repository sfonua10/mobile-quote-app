import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes</title>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="flex bg-red-100 h-screen content-center">
        <h1 className="self-center text-4xl leading-tight mx-8 uppercase text-gray-800	">
          We can choose to let God prevail in our lives.. We can choose to let
          God be the most powerful influence in our lives.. 
          <br /><br />
          <span className="text-3xl">

          -- President
          Russell M. Nelson
          </span>
        </h1>
      </main>
    </>
  );
}
