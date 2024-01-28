import React from "react";

import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
// import Profiles from "../components/Profiles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" />
        <MovieList title="My List" />
      </div>
    </>
  );
};

export default Home;
