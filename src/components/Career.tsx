import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Manager</h4>
                <h5>Healthcare Sector</h5>
              </div>
              <h3>2019 - Present</h3>
            </div>
            <p>
              5+ years of experience in healthcare operations management, overseeing complex administrative workflows, optimizing service delivery, and ensuring high-quality patient care and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
