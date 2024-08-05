// import React, { useEffect, useRef, useState } from "react";
// import { RiNeteaseCloudMusicLine } from "react-icons/ri";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import { CgPlayTrackPrev, CgPlayTrackNext, CgPlayPause } from "react-icons/cg";
// import { IoIosPlay } from "react-icons/io";
// import { CurrentSongProps, SongsProps } from "./Type";
// import { mySongs } from "./data";

// const App = () => {
//   const [songs, setSongs] = useState<SongsProps[]>(mySongs);
//   const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
//   const [currentSong, setCurrentSong] = useState<CurrentSongProps>(
//     songs[currentSongIndex]
//   );
//   const [playBtn, setPlayBtn] = useState(true);
//   const [showSongs, setShowSongs] = useState(true);
//   const [songInfo, setSongInfo] = useState<{
//     current: number;
//     duration: number;
//   }>({
//     current: 0,
//     duration: 0,
//   });

//   const audioRef = useRef<HTMLAudioElement>(null);

//   const playSong = ():void => {
//     setPlayBtn(!playBtn);
//     if (playBtn) {
//       audioRef.current?.play();
//     } else {
//       audioRef.current?.pause();
//     }
//   };

//   useEffect(() => {
//     setCurrentSong(songs[currentSongIndex]);
//   }, [currentSongIndex, songs]);

//   const selectSong = (num: number): void => {
//     setPlayBtn(false)
//     setCurrentSongIndex(num);
//   };

//   const changeSong = (numt: number):void => {
//     const newIndex = (currentSongIndex + numt + songs.length) % songs.length;
//     setCurrentSongIndex(newIndex);
//     setPlayBtn(false);
//   };

//   const Time = (time: number): string => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   const songHandle = (): void => {
//     setSongInfo({
//       current: audioRef.current?.currentTime || 0,
//       duration: audioRef.current?.duration || 0,
//     });
//   };

//   const Handler = (e:React.ChangeEvent <HTMLInputElement>):void => {
//     const newTime = Number(e.target.value);
//     audioRef.current!.currentTime = newTime;
//     setSongInfo({ ...songInfo, current: newTime });
//   };

//   return (
//     <div className="max-h-screen overflow-hidden">
//       <nav className="bg-green-700 text-white h-16 flex justify-around items-center">
//         <RiNeteaseCloudMusicLine className="text-5xl cursor-pointer" />
//         <h1 className="text-3xl">Amazon Music</h1>
//         {showSongs ? (
//           <FaArrowAltCircleLeft
//             onClick={() => setShowSongs(false)}
//             className="text-2xl cursor-pointer"
//           />
//         ) : (
//           <FaArrowAltCircleRight
//             onClick={() => setShowSongs(true)}
//             className="text-2xl cursor-pointer"
//           />
//         )}
//       </nav>
//       <div
//         className="flex h-[calc(100vh-4rem)]"
//       >
//         <div className={`overflow-y-auto ${showSongs ? "w-1/5" : "w-0"}`}
//           style={{ transition: "width 0.5s" }}
//         >
//           {showSongs && (
//             <div className="flex flex-col gap-2 p-1">
//               {songs.map((song, index) => (
//                 <div
//                   key={index}
//                   onClick={() => selectSong(index)}
//                   className={`flex justify-between cursor-pointer ${
//                     index === currentSongIndex
//                       ? "bg-pink-400"
//                       : "bg-blue-600 hover:bg-pink-500"
//                   } rounded-md text-white text-center p-4`}
//                 >
//                   <img
//                     className="w-10 h-10 rounded-full"
//                     src={song.cover}
//                     alt={song.name}
//                   />
//                   <div>
//                     <p className="text-xl">{song.name}</p>
//                     <p className="text-xs">{song.artist}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div
//           className={`music bg-blue-700 flex text-white flex-col justify-center items-center ${
//             showSongs ? "w-4/5" : "w-full"
//           }`}
//           style={{ transition: "width 0.5s" }}
//         >
//           <img
//             src={currentSong.cover}
//             alt={currentSong.name}
//             className="w-80 h-80 rounded-full"
//           />
//           <h2 className="text-4xl my-5">{currentSong.name}</h2>
//           <h6 className="text-2xl mb-5">{currentSong.artist}</h6>
//           <div className="flex gap-2">
//             <label>{Time(songInfo.current)}</label>
//             <input className="cursor-pointer"
//               max={songInfo.duration}
//               value={songInfo.current}
//               type="range"
//               onChange={Handler}
//             />
//             <label>{Time(songInfo.duration)}</label>
//           </div>
//           <div className="flex text-5xl">
//             <CgPlayTrackPrev
//               onClick={() => changeSong(-1)}
//               className="cursor-pointer"
//             />
//             {playBtn ? (
//               <IoIosPlay onClick={playSong} className="cursor-pointer" />
//             ) : (
//               <CgPlayPause onClick={playSong} className="cursor-pointer" />
//             )}
//             <CgPlayTrackNext
//               onClick={() => changeSong(1)}
//               className="cursor-pointer"
//             />
//           </div>
//           <audio
//             onTimeUpdate={songHandle}
//             onLoadedMetadata={songHandle}
//             ref={audioRef}
//             src={currentSong.audio}
//           ></audio>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>bvjdhvgjhjskfbjkfbjkbjkfgjkfgjbjkb</h1>
      <button>bjvjhhjhdgvdfhjdzkvbznmvbfdjvh</button>
      <h5>hjvjdfvfjkbvfjbf</h5>
    </div>
  )
}

export default App
