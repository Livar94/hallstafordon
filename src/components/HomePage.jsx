import "../assets/Home.css";
import { Link } from "react-router-dom";
import Zaldo from "../photos/img3.jpg";

const HomePage = () => {
  return (
    <div className="hero-container">
      <header className="header">
        <Link to="/" className="logo-site">Hallsta Fordon</Link>
        <nav className="nav-menu">
          <Link to="/">Hem</Link>
          <a href="https://www.blocket.se/">Bilar i lager</a>

          {/* <Link to="">Bilar i lager</Link> */}
          <Link to="/salj">Sälj din bil</Link>
          <Link to="/om">Om oss</Link>
        </nav>
      </header>
      <img src={Zaldo} alt="Car showcase" className="hero-image" />
      <div className="hero-text">
        <h1>Välkommen till Hallstafordon</h1>
        <p>Vi erbjuder kvalitetsbilar till bästa pris. Utforska vårt sortiment idag!</p>
        <a href="https://www.blocket.se/" target="_blank" rel="noopener noreferrer">
          <button className="bilarilager-btn">Bilar i lager</button>
        </a>
      </div>

      <div className="contact-info">
        <h2>Kontakta oss</h2>
        <ul>
          <li><strong>Telefonnummer:</strong><br /> <a href="tel:0123456789">0123-456 789</a></li>
          <li><strong>E-post:</strong><br /> <a href="mailto:info@hallstafordon.se">info@hallstafordon.se</a></li>
          <li><strong>Adress:</strong> <br /><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar" target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></li>
          <li><strong>Öppettider: <br /> </strong> Måndag-Fredag: 10:00 - 18:00<br /> Lördag: 11:00 - 15:00</li>
        </ul>
      </div>

      <div className="map-container">
        <h2>Hitta oss på kartan</h2>
        <iframe
            title="Hallsta Fordon Karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.3352886455593!2d16.687538965346355!3d59.58217802648421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f45d51e0d6a0b%3A0x33a9bfb8c9da69a4!2sBrinkv%C3%A4gen%202%2C%2073430%20Hallstahammar!5e0!3m2!1sen!2sse!4v1672768762992!5m2!1sen!2sse"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p><strong>Adress</strong><br /> <p className="ad-tel-ep-op"><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar"  target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></p></p>
          <p><strong>Telefon</strong><br /> <p className="ad-tel-ep-op"><a href="tel:0123456789" >0123-456 789</a></p></p>
          <p><strong>E-post</strong><br /> <p className="ad-tel-ep-op"><a href="mailto:info@hallstafordon.se" >info@hallstafordon.se</a></p></p>
          <p><strong>Öppettider<br /> </strong> <p className="ad-tel-ep-op">Mån-Fre: 10:00 - 18:00 <br /> Lör: 11:00 - 15:00</p></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
