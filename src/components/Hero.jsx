import imageGrid from "../image/image-grid.png";
export default function Hero() {
  return (
    <div className="hero">
      <img className="image-grid" src={imageGrid} alt="image grid" />
      <h2>Online Experiences</h2>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
