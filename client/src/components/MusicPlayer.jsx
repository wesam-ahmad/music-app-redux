import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const MusicPlayer = ({ tracks, gate }) => {
  const [playing, setPlaying] = useState(gate);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(0);

  const [Tracks, setTracks] = useState(
    useSelector((state) => state.music?.currentMusic)
  );
  const [show, setShow] = useState(true);

  const audioRef = useRef(null);

  const handlePlay = () => {
    setDuration(audioRef.current.duration);
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const handleNextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack((prevTrack) => prevTrack + 1);
    }
  };

  const handlePrevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack((prevTrack) => prevTrack - 1);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setDuration(0);
          setCurrentTime(0);
          setShow(false);
        }}
        onPlay={() => {
          setDuration(audioRef.current.duration);
          setCurrentTime(0);
          setPlaying(true);
          setShow(true);
        }}
        autoPlay={gate}
      />

      {show && (
        <div className="fixed w-screen bottom-0 inset-x-0 z-20 bg-[#00000080]">
          <input
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={handleSeek}
            className="flex justify-center h-5 items-center w-3/4  focus:outline-none mx-auto mt-5 rounded-full"
            style={{ accentColor: "white", height: "5px" }}
          />

          <div class="flex justify-center md:justify-between items-center h-16">
            <div class="img md:flex items-center md:visible hidden">
              <img
                src={tracks[currentTrack]?.cover}
                alt="img"
                class="w-16 h-16 object-cover mx-3 mb-5"
              />
              <h1 className="text-white font-bold">
                {tracks[currentTrack]?.name} - {tracks[currentTrack]?.artist}
              </h1>
            </div>

            <div class="flex items-center relative sm:right-24">
              <button className="prev-song" onClick={handlePrevTrack}>
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="30"
                  width="30"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
                </svg>
              </button>

              <button onClick={playing ? handlePause : handlePlay}>
                {!playing ? (
                  <svg
                    stroke="currentColor"
                    fill="white"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="mx-5 text-white"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    className="bi bi-pause-circle mx-5 text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                  </svg>
                )}
              </button>

              <button className="next-song" onClick={handleNextTrack}>
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
                </svg>
              </button>
            </div>
            <div class="md:flex items-center mx-5 md:visible hidden">
              <button className="volume">
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-full marker:appearance-none bg-gray-300 rounded-full focus:outline-none"
                style={{
                  accentColor: "red",
                  background: `linear-gradient(to right, rgba(255,255,0) 0%, rgba(255,0,0) ${(
                    volume * 100
                  ).toFixed(2)}%, #CBD5E0 ${(volume * 100).toFixed(
                    2
                  )}%, #CBD5E0 100%)`,
                  height: "5px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
