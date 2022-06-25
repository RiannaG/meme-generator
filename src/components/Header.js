import troll from "../assets/troll.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img className="header--img" src={troll} />
        <h1 className="header--title">Meme Generator</h1>
      </div>
      <h3 className="header--text">React Project</h3>
    </div>
  );
}
