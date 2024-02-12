import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entete from "./components/Entete";
import MovieList from "./components/MovieList";
import { useState } from "react";
import Footer from "./components/Footer";
import AdsComp from "./components/AdsComp";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <Entete handleSearch={handleSearch} handleCategory={handleCategory} />
      <AdsComp />
     
      <MovieList search={search} category={category} />
      <Footer />
    </div>
  );
}

export default App;
