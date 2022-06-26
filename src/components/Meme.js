import memesdata from "../memesdata";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesdata);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="meme--container">
      <div className="meme--input">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>
      <button className="meme--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <img src={meme.randomImage} />
    </div>
  );
}
