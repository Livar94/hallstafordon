import { Link } from "react-router-dom";
import '../assets/SoldCar.css';
import Zaldo from "../photos/img8.jpg";

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
        <form action="https://formspree.io/f/xblgqwdq" method="POST">
          <label className="label-color">Namn</label>
          <input type="text" name="namn" required placeholder="Namn"/>

          <label className="label-color">E-post</label>
          <input type="email" name="email" required  placeholder="E-post"/>

          <label className="label-color">Telefonnummer</label>
          <input type="tel" name="telefon" required  placeholder="Telefonnummer"/>

          <label className="label-color">Bilmodell</label>
          <input type="text" name="bilmodell" required  placeholder="Bilmodell"/>

          <label className="label-color">Registreringsnummer</label>
          <input type="text" name="regnummer" required  placeholder="Registreringsnummer"/>

          <label className="label-color">Miltal</label>
          <input type="number" name="miltal" required  placeholder="Ange miltal" />

          <label className="label-color">Beskrivning - Ange kända skador</label>
          <textarea name="beskrivning" required placeholder="Beskrivning"></textarea>

          <button type="submit" className="form-submit-btn">Skicka</button>
        </form>

      </div>
      {/* <div>
        <div>
            <h1>hello</h1>
        </div>
      </div> */}

<div className="contact-info">
        <h2>Kontakta oss</h2>
        <ul>
          <li><strong>Telefonnummer:</strong><br /> <a href="tel:0123456789">021-4400011</a></li>
          <li><strong>E-post:</strong><br /> <a href="mailto:info@hallstafordon.se">info@hallstafordon.se</a></li>
          <li><strong>Adress:</strong> <br /><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar" target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></li>
          <li><strong>Öppettider: <br /> </strong> Måndag-Fredag: 10:00 - 18:00<br /> Lördag: 11:00 - 15:00</li>
        </ul>
        <h3>
          Önskar du en visning utanför våra ordinarie öppettider?
        </h3>
        <h5>
          Tveka inte att kontakta oss på Hallsta Fordon <br /> Vi gör vårt bästa för att anpassa oss efter dina önskemål och hittar gärna en tid som passar dig.
        </h5>
      </div>

      <div className="map-wrapper">
        <h2>Hitta oss på kartan</h2>
        <div className="map-frame">
          <iframe
            title="Hallsta Fordon Karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.3352886455593!2d16.687538965346355!3d59.58217802648421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f45d51e0d6a0b%3A0x33a9bfb8c9da69a4!2sBrinkv%C3%A4gen%202%2C%2073430%20Hallstahammar!5e0!3m2!1sen!2sse!4v1672768762992!5m2!1sen!2sse"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>


      <footer className="site-footer">
        <div className="footer-details">
          <p><strong>Adress</strong><br /> <p className="contact-info"><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar"  target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></p></p>
          <p><strong>Telefon</strong><br /> <p className="contact-info"><a href="tel:0123456789" >021-4400011</a></p></p>
          <p><strong>E-post</strong><br /> <p className="contact-info"><a href="mailto:info@hallstafordon.se" >info@hallstafordon.se</a></p></p>
          <p><strong>Öppettider<br /> </strong> <p className="contact-info">Mån-Fre: 10:00 - 18:00 <br /> Lör: 11:00 - 15:00</p></p>
        </div>
      </footer>
    </div>
  );
};

export default SoldCar;