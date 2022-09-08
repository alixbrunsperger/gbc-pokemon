import React from "react";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useQuery, dehydrate, QueryClient, UseQueryResult } from "react-query";
import { useRouter } from "next/router";
import { PokemonType, ErrorType } from "../../types/types";
import { fetchPokemon } from "../../utils/dataFetch";
import Link from "next/link";
import GameBoyContainer from "../../components/GameBoyContainer";
import PokemonCard from "../../components/PokemonCard";

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPokemon", name], () =>
    fetchPokemon(name)
  );

  const data = queryClient.getQueryData(["getPokemon", name]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    notFound: !data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const PokemonPage: NextPage = () => {
  const router = useRouter();
  const pokemonName: string =
    typeof router.query?.name === "string" ? router.query.name : "";
  const queryResult: UseQueryResult<PokemonType, ErrorType> = useQuery(
    ["getPokemon", pokemonName],
    () => fetchPokemon(pokemonName),
    {
      enabled: pokemonName.length > 0,
    }
  );
  const { data, isError, error } = queryResult;

  if (isError) {
    if (error.response.status == 404) {
      return <span>Not found...</span>;
    } else {
      return <span>Error...</span>;
    }
  }

  return (
    <GameBoyContainer classAddon="card">
      {data && <PokemonCard pokemon={data} />}
    </GameBoyContainer>
  );
};

export default PokemonPage;
