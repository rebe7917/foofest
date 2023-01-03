import { Link } from "react-router-dom";

function QuickAbout({ text, fromHomepage }) {
  return (
    <section id="about">
      <div className="about-container">
        <div className="text-wrapper">
          <div className="about-text">
            <h2>ABOUT FOOFEST</h2>
            {text}
            {fromHomepage && (
              <Link to="/about">
                <button className="btn">READ MORE ABOUT FOOFEST</button>
              </Link>
            )}
          </div>
        </div>
        <div className="section-image about-image"></div>
      </div>
    </section>
  );
}

export default QuickAbout;
