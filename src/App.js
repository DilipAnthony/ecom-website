import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage-com.jsx"
import {Route, Switch} from "react-router-dom"
import Shop from "./pages/shop/shop-com.jsx"
import Header from "./component/header/header-com.jsx"
import SIgn from "./pages/signIn-SignUp-Page/SignIn-SignUp-Com"
import {auth, createOtherUser} from "./firebase/firebase-utils.js"
import {SignInWithFacebook} from "./firebase/firebase-utils.js"
import 'react-app-polyfill/stable';




class App extends React.Component {
  constructor(){
    super();

    this.state = {
      isSignedIn: null
    }
  
}

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
    if(user){
    const userRef = await createOtherUser(user);
    userRef.onSnapshot(snap => {
      const {displayName, email, createdAt} = snap.data();
      const {id} = snap;
    console.log(snap.data());
  
    this.setState({
      isSignedIn: {
        displayName,
        email,
        createdAt,
        id
      }
    })
    
    
    })
  }
  else{
    this.setState({
      isSignedIn: user
    })
  }
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div className="App">
    <Header status={this.state.isSignedIn}/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" render={() => (this.state.isSignedIn ? <Homepage /> : <SIgn />) } />
    </Switch>
    </div>
  );
}
}

// render={(props) => <Dashboard {...props} isAuthed={true}
{/* <Route 
        {...props} 
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/login' /> */}

export default App;
