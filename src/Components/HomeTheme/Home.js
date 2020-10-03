import withRoot from "./modules/withRoot";

import React from "react";
import ProductHero from "./modules/views/ProductHero";

function Index() {
  return (
    <>
      <ProductHero />
    </>
  );
}

export default withRoot(Index);
