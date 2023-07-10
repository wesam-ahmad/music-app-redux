import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMusic } from "../actions/musicActions";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [catergory, setCategory] = useState({
    arab: {
      name: "arab",
      img: "https://kaleela.com/Content/BlogImages/small/arab-music-an-introduction-to-the-enchanting-sounds-of-tarab.png"
    },
    classical: {
      name: "classical",
      img: "https://c.wallhere.com/photos/a7/c6/music-164489.jpg!d"
    },
    anime: {
      name: "anime",
      img: "https://cutewallpaper.org/25/anime-wallpaper-playing-piano/your-lie-in-april-piano-wallpapers-top-free-your-lie-in-april-piano-backgrounds-wallpaperaccess.png"
    }, 
    tv: {
      name: "tv",
      img: "https://i.pinimg.com/736x/cc/ff/a6/ccffa62c16228d040e600942cc44b250.jpg"
    }
  });

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 mb-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
          <button onClick={() => {
                
                navigate(`/category?cat=${JSON.stringify(catergory.arab)}`)
              }}>
          <div
              className="border-2 flex justify-center hover:cursor-pointer  items-end px-4 py-6 w-60 h-60 rounded-lg transform transition duration-500 hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://i1.sndcdn.com/artworks-ip6TCs4UbF33AxSa-b87WuA-t500x500.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="  font-medium text-5xl text-white"
                style={{ fontFamily: "impact" }}
              >
                Arab
              </h2>
            </div>
          </button>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div
              onClick={() => {
                
                navigate(`/category?cat=${JSON.stringify(catergory.classical)}`)
              }}
              className="border-2 hover:cursor-pointer flex justify-center items-end px-4 py-6 w-60 h-60 rounded-lg transform transition duration-500 hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://www.ukri.org/wp-content/uploads/2021/04/AHRC-130421-ClassicalComposersViolin.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h2
                className="  font-medium text-5xl text-white"
                style={{ fontFamily: "impact" }}
              >
                Classical
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div
            onClick={() => {
               
                navigate(`/category?cat=${JSON.stringify(catergory.anime)}`)
              }}
              className="border-2 flex hover:cursor-pointer  justify-center items-end px-4 py-6 w-60 h-60 rounded-lg transform transition duration-500 hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://pure.wallpapergk.com/download/girl_headphones_music_anime_art-1280x720.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2
                className="  font-medium text-5xl text-white"
                style={{ fontFamily: "impact" }}
              >
                Anime
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div
            onClick={() => {
                
                navigate(`/category?cat=${JSON.stringify(catergory.tv)}`)
              }}
              className="border-2 flex justify-center  hover:cursor-pointer  items-end px-4 py-6 w-60 h-60 rounded-lg transform transition duration-500 hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://media.output.com/app/uploads/2021/07/pexels-elviss-railijs-bitA%C2%81ns-1389429-scaled.jpg?auto=format%2Ccompress&fm=jpg&w=1600)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="font-medium text-5xl text-white"
                style={{ fontFamily: "impact" }}
              >
                TV & Movies
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
