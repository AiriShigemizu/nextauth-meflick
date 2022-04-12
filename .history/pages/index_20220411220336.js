import Head from "next/head";
import Brands from "../components/Brands";
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
      <main>
        <Slider />
        <Brands />
      </main>
    </div>
  );
}
