import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";

export default function index() {
  const [session] = useSession();

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
    </div>
  );
}
