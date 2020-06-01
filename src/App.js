import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage-com.jsx"
import {Route, Switch} from "react-router-dom"
import Shop from "./pages/shop/shop-com.jsx"
import Header from "./component/header/header-com.jsx"
import SIgn from "./pages/signIn-SignUp-Page/SignIn-SignUp-Com"
import {auth, createOtherUser} from "./firebase/firebase-utils.js"
import {SignInWithFacebook} from "./firebase/firebase-utils.js"
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-action"
import SignIn from './component/SIgnIn-com/SignIn-com';




class App extends React.Component {

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
    const {setCurrentUser} = this.props;
    if(user){
    const userRef = await createOtherUser(user);
    userRef.onSnapshot(snap => {
      const {displayName, email, createdAt} = snap.data();
      const {id} = snap;
    console.log(snap.data());
  
    setCurrentUser({
        displayName,
        email,
        createdAt,
        id
    })
    
    
    })
  }
  else{
    setCurrentUser(user)
  }
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SIgn}/>
    </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: use => dispatch(setCurrentUser(use))
})

export default connect(null, mapDispatchToProps)(App);
