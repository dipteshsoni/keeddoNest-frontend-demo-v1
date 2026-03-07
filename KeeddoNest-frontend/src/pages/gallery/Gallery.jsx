import "./Gallery.css";
import img1 from "../../assets/CounsellingServices.jpeg";
import img2 from "../../assets/EarlyLearning.jpeg";
import img3 from "../../assets/FreeZone.jpeg";
import img4 from "../../assets/SkillDevelopment.jpeg";
import img5 from "../../assets/ToddlerProgram.jpeg";
import img6 from "../../assets/SchoolSupport.jpeg";
import img7 from "../../assets/KeeddonestImage1.jpeg";
import img8 from "../../assets/KeeddonestImage01.jpeg";
import img9 from "../../assets/KeeddonestLogo.jpeg";

export default function Gallery() {

  const images = [
    img1,
    img2,
    img3,img4,
    img5,
    img6,img7,img8,img9
    
  ];

  return (
    <section className="gallery-page">

      <div className="gallery-wrapper">

        <div className="gallery-header">
          {/* <h1>Our Learning Moments</h1>
          <p>
            A glimpse into the nurturing environment, engaging sessions,
            and meaningful experiences at Keeddonest.
          </p> */}
          <h1>Images coming soon</h1>
          <p >
            A glimpse into the nurturing environment, engaging sessions,
            and meaningful experiences at Keeddonest will be showcased here soon. We are in the process of collecting and curating beautiful moments from our programs to share with you. Stay tuned for updates!
          </p>
        </div>

{/* Disabling gallery for now as we are still in the process of collecting images and designing the gallery layout. It will be available soon with a beautiful showcase of our learning moments and activities. Stay tuned for updates! */}
        {/* <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="Gallery" />
            </div>
          ))}
        </div> */}

      </div>

    </section>
  );
}