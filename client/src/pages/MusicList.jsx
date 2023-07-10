import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMusic,
  getFavoriteMusic,
  getTrendingMusic,
  setCurrentMusic,
} from "../actions/musicActions";
import MusicCard from "../components/MusicCard";
import bg from "./bg.jpg";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Categories from "../components/Categories";
const MusicList = () => {
  const musicList = useSelector((state) => state.music?.trendingMusic);
  const musicsmallList = useSelector((state) => state.music?.music);
  const fMusic = useSelector((state) => state.music?.favoriteMusic);
  const [favoriteMusic, setFavoriteMusic] = useState([]);

  const handleSetMusic = (music) => {
    dispatch(setCurrentMusic(music));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMusic());
    dispatch(getFavoriteMusic());
  }, [dispatch]);

  useEffect(() => {
    setFavoriteMusic(fMusic);
  }, [fMusic]);

  return (
    <>
      <section
        className="py-20 bg-slate-900 mt-[8vh]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div className="mb-12 ms-6 space-y-5 md:mb-16 md:text-center">
          <h1 class="font-bebas-neue md:text-5xl text-left uppercase text-2xl lg:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Music can
            <span class="text-2xl lg:text-7xl md:text-5xl text-cyan-500">
              Bloom
            </span>
            Everywhere
          </h1>
          <p className="lg:text-2xl lg:text-left text-sm capitalize text-gray-100 md:text-left md:text-2xl">
            Listen to the music that moves your soul
          </p>
        </div>
      </section>

      <div className="text-left p-10 my-5">
        <h1 className="text-3xl font-bold">Trending</h1>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-3/4 p-4">
          <ScrollingCarousel>
            {musicList?.map((item, i) => (
              <div className="box card hero w-60 mx-2" key={i}>
                <MusicCard
                  cover={item.track.album.images[0].url}
                  name={item?.track.name}
                  src={item?.track.preview_url}
                  artist={item?.track.artists[0].name}
                />
              </div>
            ))}
          </ScrollingCarousel>

          <div className="text-left p-10">
            <h1 className="text-3xl font-bold">Browse all</h1>
          </div>
          <Categories />
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4 ">
          <h1 className="text-3xl font-bold mb-3">My Favorite Songs</h1>
          <div className="text-white  flex items-center justify-center">
            <div className="flex justify-center border rounded-lg ">
              <ul className="bg-white rounded-lg text-gray-900 w-full">
                {favoriteMusic?.map((song, i) => (
                  <li
                    className="flex border-b-2 items-center space-x-3 mb-2 hover:bg-yellow-300"
                    key={i}
                  >
                    <button
                      className="p-3 group focus:outline-none"
                      onClick={() => {
                        handleSetMusic({
                          cover: `${song?.cover}`,
                          name: `${song?.name}`,
                          src: `${song?.src}`,
                          artist: `${song?.artist}`,
                        });
                      }}
                    >
                      <svg
                        className="w-4 h-4 group-hover:text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                    <div className="text-xs text-gray-400">
                      <img src={song?.cover} width={50} />
                    </div>
                    <div className="flex-1">
                      <span>{song?.artist}</span> - <span>{song?.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicList;
