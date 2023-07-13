import { Button } from "components/ui/button";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Ultimate Recipe App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2518-1571259200.jpg')] bg-no-repeat bg-cover h-screen bg-fixed ">

        <div className="flex justify-center p-10 ">
          <h1 className="bold text-7xl text-yellow-500">Your Recipes in One Place</h1>
        </div>

        <div className="flex justify-center items-center h-2/3 pb-10">
          <Button variant="outline" className="border-yellow-150 border-3 text-2xl rounded-xl p-10 bg-gradient-to-l from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transition-all">Start Cooking!!</Button>
        </div>
      </div>
      <div className="h-40"></div>
    </>
  );
}