// src/components/LearningModelSection.js
import React from "react";

const LearningModelSection = () => (
  <div className="learning-model-section">
    <h2 className="section-title">
      A 3-stage learning model to turn you into a CompileIT Champion
    </h2>
    <div className="learning-model-container">
      <div className="learning-model-stage">
        <div className="learning-model-text">Stage 1: Foundations</div>
        <p>
          Master the fundamentals, coding essentials, and basic problem-solving
          skills.
        </p>
      </div>
      <div className="learning-model-stage">
        <div className="learning-model-text">Stage 2: Skill-building</div>
        <p>
          Deep dive into advanced topics with real-world projects to enhance
          your expertise.
        </p>
      </div>
      <div className="learning-model-stage">
        <div className="learning-model-text">Stage 3: Career Launch</div>
        <p>
          Prepare for job interviews, develop a portfolio, and land your dream
          job in tech.
        </p>
      </div>
    </div>
  </div>
);

export default LearningModelSection;
