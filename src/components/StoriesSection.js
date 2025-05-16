// src/components/StoriesSection.js
import React from "react";

const StoriesSection = () => (
    <div className="stories-section">
        <h3 className="stories-title">Stories You’ll Love</h3>
        <div className="stories-container">
          <div className="story-card">
            <strong>“I failed my first coding test…”</strong>
            <br />
            But after joining CompileIT, I learned how to approach problems, not
            just memorize syntax. Now, I’m a junior developer at a fintech
            startup.
          </div>
          <div className="story-card">
            <strong>“From retail to tech.”</strong>
            <br />I was working at a mall, unsure about my future. CompileIT
            gave me structure, mentors, and confidence to switch to software
            development.
          </div>
          <div className="story-card">
            <strong>“English was a barrier for me.”</strong>
            <br />
            The platform made learning comfortable with clear explanations and
            practice-focused lessons. Today, I work with an international remote
            team.
          </div>
          <div className="story-card">
            <strong>“My daughter inspired me.”</strong>
            <br />
            Watching her code during lockdown made me curious. CompileIT helped
            this 42-year-old mom rediscover her career in QA testing!
          </div>
        </div>
      </div>
);

export default StoriesSection;
