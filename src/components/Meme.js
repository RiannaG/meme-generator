import memesdata from "../memesdata";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesdata.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img src={memeImage} />
    </div>
  );
}
