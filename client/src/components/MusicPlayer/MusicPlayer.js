import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "./MusicPlayer.css";

const audioList2 = [
  {
    name: "Bedtime Stories",
    singer: "Jay Chou",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3",
  },
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"
      );
    },
  },
  {
    name: "难得",
    singer: "安来宁",
    cover: "//cdn.lijinke.cn/nande.jpg",
    musicSrc: "//cdn.lijinke.cn/nande.mp3",
  },
];

const MusicPlayer = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <ReactJkMusicPlayer
        mode="full"
        audioLists={audioList2}
        defaultPlayIndex={0}
        autoPlay={false}
        showDownload={false}
        showThemeSwitch={false}
        toggleMode={false}
        responsive={false}
        glassBg={true}
      />
      ,
    </div>
  );
};

export default MusicPlayer;
