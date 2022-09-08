import React, { FunctionComponent } from "react";
import Link from "next/link";
import GameBoyContainer from "../components/GameBoyContainer";

interface Page404Props {}
const Page404: FunctionComponent<Page404Props> = () => {
  return (
    <GameBoyContainer>
      <section className="not-found">
        <h1>Oupsi</h1>
        <Link href="/">Back to list</Link>
      </section>
    </GameBoyContainer>
  );
};

export default Page404;
