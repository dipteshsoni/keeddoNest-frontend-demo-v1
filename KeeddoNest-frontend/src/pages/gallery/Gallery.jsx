import "./Gallery.css";

export default function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  ];

  return (
    <section className="gallery-page">

      <div className="gallery-wrapper">

        <div className="gallery-header">
          <h1>Our Learning Moments</h1>
          <p>
            A glimpse into the nurturing environment, engaging sessions,
            and meaningful experiences at Keeddonest.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="Gallery" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}