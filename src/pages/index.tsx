import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery, UseQueryResult } from "react-query";
import { ErrorType, PokemonLightType } from "../types/types";
import { fetchPokemons } from "../utils/dataFetch";
import GameBoyContainer from "../components/GameBoyContainer";
import PokemonListContent from "../components/PokemonListContent";
import PokemonListSidePanel from "../components/PokemonListSidePanel";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getPokemons", () => fetchPokemons());
  const data = queryClient.getQueryData("getPokemons");

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    notFound: !data,
  };
};

interface QueryResultType {
  results: PokemonLightType[];
}

const Home: NextPage = () => {
  const queryResult: UseQueryResult<QueryResultType, ErrorType> = useQuery(
    "pokemons",
    () => fetchPokemons()
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
    <GameBoyContainer classAddon="list">
      <PokemonListContent pokemons={data ? data.results : []} />
      <PokemonListSidePanel />
    </GameBoyContainer>
  );
};

export default Home;
