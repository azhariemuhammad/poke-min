import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import PokeCard from "./components/PokeCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Min</title>
        <meta name="description" content="Poke Min" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PokeCard imgSrc="1.png" type="bg-green-700" pokemonName="bulbasaur" />
        <PokeCard imgSrc="5.png" type="bg-red-300" pokemonName="charmeleon" />
        <PokeCard imgSrc="16.png" type="bg-orange-200" pokemonName="pidgey" />
        <PokeCard imgSrc="43.png" type="bg-green-800" pokemonName="oddish" />
        <PokeCard imgSrc="1.png" type="bg-green-800" pokemonName="bulbasaur" />
        <PokeCard imgSrc="5.png" type="bg-red-300" pokemonName="charmeleon" />
        <PokeCard imgSrc="16.png" type="bg-orange-200" pokemonName="pidgey" />
        <PokeCard imgSrc="43.png" type="bg-green-800" pokemonName="oddish" />
        <PokeCard imgSrc="1.png" type="bg-green-800" pokemonName="bulbasaur" />
        <PokeCard imgSrc="5.png" type="bg-red-300" pokemonName="charmeleon" />
        <PokeCard imgSrc="16.png" type="bg-orange-200" pokemonName="pidgey" />
        <PokeCard imgSrc="43.png" type="bg-green-800" pokemonName="oddish" />
      </main>
    </div>
  );
};

export default Home;
