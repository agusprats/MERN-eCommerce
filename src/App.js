import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';


class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter> 
      <div className="grid-container">
          <header>
            <Link to="/">Dress Lovers </Link>
          </header>
          <main>
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeScreen} exact />
            
          </main>
          <footer>2020 All rights reserved</footer>
      </div>
      </BrowserRouter>
    </Provider>
    );
  }
}
export default App;

