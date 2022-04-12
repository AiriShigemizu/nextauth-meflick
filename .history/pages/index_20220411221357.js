import Head from "next/head";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Brands from "../components/Brands"

export default function index() {

  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brands />
      </main>
    </div>
  );
}
