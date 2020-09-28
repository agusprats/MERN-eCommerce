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
          <header className="navbar fixed-top shadow p-3 mb-5"> 
            <Link to="/">Oh! My Dress </Link>
            <Link to="/admin">Admin</Link>
          </header>

          <main>
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeScreen} exact />
          </main>

          <footer className="footer py-4">Copyright ©2020 Oh! My Dress, Inc.</footer>
      </div>
      </BrowserRouter>
    </Provider>
    );
  }
}
export default App;
