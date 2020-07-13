import React from "react";

import CollectionPreview from "../../component/CollectionPreview/collectionPreview-com";
import { Switch, Route } from "react-router-dom";
import Category from "../../component/Category/category-com";

const Shop = ({ match }) => {
  console.log("Test" + match.path);

  return (
    <Switch>
      <Route exact path="/shop/:categoryId" component={Category} />
      <Route path="/shop" component={CollectionPreview} />
    </Switch>
  );
};

export default Shop;
