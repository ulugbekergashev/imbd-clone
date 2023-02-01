import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Watchlist from './pages/watchlist/watchlist';
import { useState } from 'react';
import { CartProvider } from "react-use-cart";
function App() {

  return (
    <div className="App">
        <Router>
          <Header />
          <CartProvider>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
              </Routes>
            </CartProvider>
        </Router>
    </div>
  );
}

export default App;

// function removeItem(item) {
//   const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
//   setAddedItem(newItems);
// }