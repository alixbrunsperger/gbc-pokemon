import type { NextPage } from "next";
import { useQuery } from "react-query";
import axios from "axios";
import { PokemonLightType } from "../types/types";
import PokemonCardLight from "../components/PokemonCardLight";

const Home: NextPage = () => {
  const { data, status } = useQuery("pokemons", async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=7");
    return res.data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error...</span>;

  return (
    <section className="main">
      <div className="main-list">
        <h1>CONTENTS</h1>
        {data.results &&
          data.results.map((item: PokemonLightType, index: number) => (
            <PokemonCardLight
              key={index}
              pokemonLight={item}
              index={index + 1}
            />
          ))}
      </div>
      <div className="main-panel">
        <div className="main-panel-top">
          SEEN
          <br />
          3<br />
          OWN
          <br />1
        </div>
        <div className="main-panel-bottom">
          DATA
          <br />
          CRY
          <br />
          AREA
          <br />
          QUIT
          <br />
        </div>
      </div>
    </section>
  );
};

export default Home;
