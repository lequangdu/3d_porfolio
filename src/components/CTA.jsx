import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        <a
          href="mailto:quangdule5@gmail.com
        "
          className="text-blue-500 hover:text-blue-800"
        >
          Let's talk.
        </a>
      </p>
      <Link to="/contact" className="btn">
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
