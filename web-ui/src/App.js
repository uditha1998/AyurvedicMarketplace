import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

//Isiwara
import ProductHome from './view/all-product';
import ProductView from './view/view-product';


//Parami

//Thusith

//Randi



export default function App() {
  return (
    <Router>
      <div>
        

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>

           {/*Isiwara*/}

          <Route path="/product" element={<ProductHome />} />
          <Route path="/product-view" element={<ProductHome />} />

       
           {/*Parami*/}

           {/*Randi*/}

           {/*Thusith*/}




        </Routes>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}
