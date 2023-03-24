import React, { useContext } from "react";
import { ExplorerContext } from "@context/ExplorerContext";
import ExplorerInfo from "../ExplorerInfo";
import { Songs } from '../ExplorerInfo/Songs';
import { Home } from "../Home";

const ContentExplorer = () => {
  const { selectedContent, state } = useContext(ExplorerContext);

  const INITIAL = 1

  const getExplorerComponent = (item) => {
    if(state.selected == INITIAL) {
      return <Home key={item.name} {...item} />;
    }
    if (item.id !== undefined) {
      return <Songs key={item.name} {...item} />;
    } else {
      return <ExplorerInfo key={item.name} {...item} />;
    }
  };

  const renderProps = () => (
    <>
      {selectedContent.map(item => getExplorerComponent(item))}
    </>
  );

  return (
    <section className="ContainerPc">
      <div id={state.name}>{renderProps()}</div>
    </section>
  );
};

export { ContentExplorer }