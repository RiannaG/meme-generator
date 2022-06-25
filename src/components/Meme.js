export default function Meme() {
  return (
    <form>
      <div className="meme--input">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>
      <button className="meme--button">Get a new meme image 🖼</button>
    </form>
  );
}
