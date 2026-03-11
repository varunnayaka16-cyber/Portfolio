import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VARun
            </h1>
          </div>
          <div className="landing-info">
            <h3>I Craft UGC Content &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Build Premium Websites</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Build Premium Websites</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
