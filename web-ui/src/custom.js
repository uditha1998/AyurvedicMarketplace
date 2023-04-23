import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';

//Randi

//Thusith

//Parami

//Isiwara
import Home from './view/all-product'
// import ProductView from './view/view-product';

const App = () => {
      return (
    <Router>
      <Routes>
        {/* Randi */}

        {/* Thusith */}

        {/* Parami */}

        {/* Izi */}
        <Route exact path="/" component={Home}/>


      
      </Routes>
  </Router>
  );
};

export default App;

