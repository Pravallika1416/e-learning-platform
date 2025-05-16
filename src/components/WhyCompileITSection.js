import React from "react";
import { FaChevronDown } from "react-icons/fa";
const WhyCompileITSection = () => (
  <div className="why-compileit-section">
    <h3 className="section-title">Why CompileIT?</h3>
    <p>
      Practical learning paths. Expert mentors. Career support. Community-driven.
    </p>

    {/* OLD Advantage Section with List */}
    <section className="whyus-section">
     

      {/* Comparison Table Section */}
      <div className="feature-compare">
        <table className="feature-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>CompileIt</th>
              <th>Free Resources</th>
              <th>Other Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Structured + problem solving based</td>
              <td><span className="icon checked">✔</span></td>
              <td><span className="icon crossed">✖</span></td>
              <td><span className="icon checked">✔</span></td>
            </tr>
            <tr>
              <td>Fastest 1:1 doubt support</td>
              <td><span className="icon checked">✔</span></td>
              <td><span className="icon crossed">✖</span></td>
              <td><span className="icon crossed">✖</span></td>
            </tr>
            <tr>
              <td>Integrated prep platform</td>
              <td><span className="icon checked">✔</span></td>
              <td><span className="icon crossed">✖</span></td>
              <td><span className="icon crossed">✖</span></td>
            </tr>
            <tr>
              <td>Profiles highlighted on Naukri</td>
              <td><span className="icon checked">✔</span></td>
              <td><span className="icon crossed">✖</span></td>
              <td><span className="icon crossed">✖</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Progress Bars */}
      <div className="progress-container">
  <div className="progress-row">
    <span>CompileIT </span>
    <div className="progress-bar">
      <div className="progress-fill compileit-bar"></div>
    </div>
    <div className="progress-end-label">
      <span className="icon">⚡</span>
      <span>Your dream role, faster and with confidence!</span>
    </div>
  </div>

  <div className="progress-row">
    <span>Others </span>
    <div className="progress-bar">
      <div className="progress-fill others-bar"></div>
    </div>
    <div className="progress-end-label">
      <span>Average role, under-confident</span>
    </div>
  </div>
</div>
   

    </section>
    
  </div>
);

export default WhyCompileITSection;
