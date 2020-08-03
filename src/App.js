import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage-com.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop-com.jsx";
import Header from "./component/header/header-com.jsx";
import SIgn from "./pages/signIn-SignUp-Page/SignIn-SignUp-Com";
import { auth, createOtherUser } from "./firebase/firebase-utils.js";
import { SignInWithFacebook } from "./firebase/firebase-utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { setSearchValue } from "./redux/search/search-action";
import SignIn from "./component/SIgnIn-com/SignIn-com";
import Checkout from "./pages/checkout/checkout-com";
import { CartItemsAdd } from "./redux/cart/cart-action";

class App extends React.Component {
  constructor({ shopData }) {
    super({ shopData });

    this.state = {
      searchValue: null,
      allItemsList: [],
      searchItems: [],
    };
  }

  handleChange = async (event) => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    console.log(this.state.searchValue);
    const test = [];
    this.props.shopData.map((title) =>
      title.items.map((single) => test.push(single))
    );
    await this.setState({ allItemsList: test });
    console.log("Object test" + this.state.allItemsList);
    this.setState({
      searchItems: this.state.allItemsList.filter((item) =>
        item.name
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ),
    });
    console.log("searched item" + JSON.stringify(this.state.searchItems));
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      console.log("APP JS user" + JSON.stringify(user));

      const { setCurrentUser } = this.props;
      if (user) {
        const userRef = await createOtherUser(user);
        userRef.onSnapshot((snap) => {
          const { displayName, email, createdAt } = snap.data();
          const { id } = snap;
          console.log(snap.data());

          setCurrentUser({
            displayName,
            email,
            createdAt,
            id,
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("ohoh" + this.props.searchValue);
    console.log("oooo" + JSON.stringify(this.props.isSignedIn));

    return (
      <div className="App">
        <Header />
        <div className="searchBoxDiv">
          <input
            type="search"
            className="searchBox"
            placeholder="Search for items"
            onChange={this.handleChange}
            value={this.state.searchValue}
            name="searchValue"
          />
        </div>
        {!this.state.searchValue ? (
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.isSignedIn ? <Redirect to="/" /> : <SIgn />
              }
            />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/" component={Homepage} />
          </Switch>
        ) : (
          <div className="shop-container">
            <h1>Search Results</h1>
            <div className="shop-card">
              {this.state.searchItems.map((item) => (
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
                    onClick={() => this.props.CartItemsAdd(item)}
                  >
                    <h2>Add to cart</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  shopData: state.shopData.shop_Data,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (use) => dispatch(setCurrentUser(use)),
  CartItemsAdd: (item) => dispatch(CartItemsAdd(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
