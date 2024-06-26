import React from 'react';

const Background = ({ playStatus, hero }) => {
  const images = [
    "https://i.pinimg.com/736x/88/e0/c6/88e0c64bbd4e8646b80efdb68025a2c4.jpg",
    "https://images.hindustantimes.com/auto/img/2021/08/15/1600x900/Rimac_Nevara_1629031609366_1629031613270.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-flame-lighted-car-desktop-wallpaper-hd-1920x1080-image_2935337.jpg",
    "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
    "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];

  if (playStatus) {
    return (
      <video className="w-[90vw] h-[90vh] object-cover rounded-2xl" autoPlay loop muted playsInline>
        <source src="https://cdn.pixabay.com/video/2023/10/12/184734-873923034_large.mp4" type="video/mp4" />
      </video>
    );
  } else if (hero >= 0 && hero < images.length) {
    return (
      <img 
        className="w-[90vw] h-[90vh] object-cover rounded-2xl"
        src={images[hero]} 
        alt={`Background ${hero + 1}`}
      />
    );
  }
  return null;
};

export default Background;
