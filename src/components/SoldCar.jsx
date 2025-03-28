import { Link } from "react-router-dom";
import '../assets/SoldCar.css';
import Zaldo from "../photos/img1.jpg";

const SoldCar = () => {
  return (
    <div className="soldcar-page">
        {/* Header */}
        <header className="site-header">
        <Link to="/" className="site-logo">Hallsta Fordon</Link>
        <nav className="site-nav">
          <Link to="/">Hem</Link>
          <a href="https://www.blocket.se/">Bilar i lager</a>
          <Link to="/salj">Sälj din bil</Link>
          <Link to="/om">Om oss</Link>
        </nav>
      </header>
      
      {/* Hero Image */}
      <img src={Zaldo} alt="Car showcase" className="hero-banner" />

      {/* Formulär */}
      <div className="car-sale-form">
        <h2>Vi köper din bil</h2>
        <p>Fyll i formuläret nedan – vi återkopplar inom 24 timmar.</p>
        <p>Vi köper bilar i alla modeller och skick.</p>
        <form action="https://formspree.io/f/movelzrn" method="POST">
          <label className="label-color">Namn</label>
          <input type="text" name="namn" required />

          <label className="label-color">E-post</label>
          <input type="email" name="email" required />

          <label className="label-color">Telefonnummer</label>
          <input type="tel" name="telefon" required />

          <label className="label-color">Bilmodell</label>
          <input type="text" name="bilmodell" required />

          <label className="label-color">Registreringsnummer</label>
          <input type="text" name="regnummer" required />

          <label className="label-color">Beskrivning</label>
          <textarea name="beskrivning" required></textarea>

          <button type="submit" className="form-submit-btn">Skicka</button>
        </form>

      </div>
      {/* <div>
        <div>
            <h1>hello</h1>
        </div>
      </div> */}
      <footer className="site-footer">
        <div className="footer-details">
          <p><strong>Adress</strong><br /> <p className="contact-info"><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar"  target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></p></p>
          <p><strong>Telefon</strong><br /> <p className="contact-info"><a href="tel:0123456789" >0123-456 789</a></p></p>
          <p><strong>E-post</strong><br /> <p className="contact-info"><a href="mailto:info@hallstafordon.se" >info@hallstafordon.se</a></p></p>
          <p><strong>Öppettider<br /> </strong> <p className="contact-info">Mån-Fre: 10:00 - 18:00 <br /> Lör: 11:00 - 15:00</p></p>
        </div>
      </footer>
    </div>
  );
};

export default SoldCar;