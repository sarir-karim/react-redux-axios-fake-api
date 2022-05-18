import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Routes>
        <Route path="/" eproductListingxact element={<ProductListing/>} />
        <Route path="/product/:productId" exact element={<ProductDetails/>} />
        <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
