import React, { FunctionComponent } from "react";
import { getRandomIntInclusive } from "../utils/helpers";

const PokemonListSidePanel: FunctionComponent = () => {
  const own = getRandomIntInclusive(1, 20);
  const seen = getRandomIntInclusive(own, 40);

  return (
    <div className="list-side-panel">
      <div className="list-side-panel-top">
        SEEN
        <br />
        3
        <br />
        OWN
        <br />
        1
      </div>
      <div className="list-side-panel-bottom">
        DATA
        <br />
        CRY
        <br />
        AREA
        <br />
        QUIT
      </div>
    </div>
  );
};

export default PokemonListSidePanel;
