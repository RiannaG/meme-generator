import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => setAllMeme(data));
  }, []);

  function getMemeImage() {
    const memesArray = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme--container">
      <div className="meme--input">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="meme--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <h2 className="meme--text-top">
          {meme.topText === "" ? "Change this top text" : meme.topText}
        </h2>
        <img className="meme--img" src={meme.randomImage} />
        <h2 className="meme--text-bottom">
          {meme.bottomText === ""
            ? " Change this bottom text"
            : meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
