import React from "react";
import "./category-style.css";
import { connect } from "react-redux";
import { CartItemsAdd } from "../../redux/cart/cart-action";

const Category = ({ match, shopData, CartItemsAdd }) => {
  console.log(match);
  const paramName = match.params.categoryId;
  const paramsToId = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    womens: 4,
    mens: 5,
  };

  const categoryCollection = shopData.find(
    (singleData) => singleData.id === paramsToId[paramName]
  );
  console.log(categoryCollection);
  const { title, items } = categoryCollection;

  return (
    <div className="shop-container">
      <h1>{title}</h1>
      <div className="shop-card">
        {items.map((item) => (
          <div
            className="shop-each-card"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="shop-name">
              <p>{item.name}</p>
              <p>: ${item.price}</p>
            </div>
            <div
              className="shop-name1"
              key={item.id}
              onClick={() => CartItemsAdd(item)}
            >
              <h2>Add to cart</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopData: state.shopData.shop_Data,
});

const mapDispatchToProps = (dispatch) => ({
  CartItemsAdd: (item) => dispatch(CartItemsAdd(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
