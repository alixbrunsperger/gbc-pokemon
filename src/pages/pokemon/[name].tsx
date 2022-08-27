import React, { Fragment } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";
import Page404 from "../../components/Page404";
import { useRouter } from "next/router";
import { PokemonType } from "../../types/types";
import Link from "next/link";

const PokemonPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const id: string = "pokemon-" + name;

  const { data, status, error } = useQuery<PokemonType, Error>(id, async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
    return res.data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") {
    if (error && error.message == "Request failed with status code 404") {
      return <Page404 />;
    } else {
      if (status === "error") return <span>Error...</span>;
    }
  }

  return (
    <div>
      {data && (
        <div className="card-main">
          <div className="card-img">
            <Image
              src={data.sprites.front_default}
              alt="pokemon default picture"
              width="200"
              height="200"
            />
            <div className="card-id">N° {data.id}</div>
          </div>
          <div className="card-data">
            {data.name}
            <br />
            TYPE
            <br />
            {`HEIGHT    ${data.height} '`}
            <br />
            {`WEIGHT    ${data.weight} lb`}
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="card-link">
            <Link href="/">Back to list</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
