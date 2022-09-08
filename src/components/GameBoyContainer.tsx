import React, { FunctionComponent } from "react";

interface GameBoyContainerProps {
  classAddon?: string,
  children: any
}

const GameBoyContainer: FunctionComponent<GameBoyContainerProps> = ({
  classAddon,
  ...props
}) => {
  const cssAddon: string = classAddon ? classAddon : "";
  return (
    <section className="main-container">
      <div className={`content-container ${cssAddon}`}>
      {props.children}
      </div>
    </section>
  );
};

export default GameBoyContainer;
