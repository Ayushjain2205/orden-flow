import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import NFTpage from "./Pages/NFTpage";
import Badges from "./Pages/Badges";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home />} />
          <Route exact path='/create' render={(props) => <Create />} />
          <Route exact path='/nft' render={(props) => <NFTpage />} />
          <Route exact path='/badges' render={(props) => <Badges />} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
