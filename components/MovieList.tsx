"use client";

import { ChevronDoubleDownIcon, PlayIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const movies = [
  {
    title: "Big Buck Bunny",
    description:
      "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    genre: "Comedy",
    duration: "10 minutes",
  },
  {
    title: "Sintel",
    description:
      "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailUrl: "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
    genre: "Adventure",
    duration: "15 minutes",
  },
  {
    title: "Tears of Steel",
    description:
      "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnailUrl:
      "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    genre: "Action",
    duration: "12 minutes",
  },
  {
    title: "Elephant's Dream",
    description:
      "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl: "https://download.blender.org/ED/cover.jpg",
    genre: "Sci-Fi",
    duration: "15 minutes",
  },
];

interface MovieCardProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  genre: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  thumbnailUrl,
  duration,
  genre,
}) => {
  const router = useRouter();
  const redirectToWatch = useCallback(
    () => router.push("/watch/"),
    [router, id]
  );

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        onClick={redirectToWatch}
        src={thumbnailUrl}
        alt={""}
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div
        className="
        opacity-0 
        absolute 
        top-0 
        transition 
        duration-200 
        z-10 
        invisible 
        sm:visible 
        delay-300 
        w-full 
        scale-0 
        group-hover:scale-110 
        group-hover:-translate-y-[6vw] 
        group-hover:opacity-100"
      >
        <img
          className="cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]"
          src={thumbnailUrl}
          alt={""}
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md"
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <PlayIcon className="text-black w-4 lg:w-6" />
            </div>
            {/* <FavoriteButton movieId={data.id} /> */}
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <ChevronDoubleDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MovieListProps {
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title }) => {
  //   const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     fetchMovieList().then((response) => console.log(response));
  //   }, []);

  async function fetchMovieList() {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map((movie, i) => {
            return (
              <MovieCard
                key={i}
                id={i}
                title={movie.title}
                thumbnailUrl={movie.thumbnailUrl}
                duration={movie.duration}
                genre={movie.genre}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
