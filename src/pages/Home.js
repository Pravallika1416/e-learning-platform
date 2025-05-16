// src/pages/Home.js
import React, { useRef } from "react";
import "./Home.css";
import IntroSection from "../components/IntroSection";
import CoursesSection from "../components/CoursesSection";
import AchievementsSection from "../components/AchievementsSection";
import WhyUsSection from "../components/WhyUsSection";
import WhyCompileITSection from "../components/WhyCompileITSection";
import AlumniSection from "../components/AlumniSection";
import StoriesSection from "../components/StoriesSection";
import LearningModelSection from "../components/LearningModelSection";
import FacultySection from "../components/FacultySection";
import FooterBanner from "../components/EndFotter";

const Home = () => {
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      {/* Header Section */}
      <IntroSection scrollToCourses={scrollToCourses} />

      {/* Courses Section */}
      <CoursesSection ref={coursesRef} />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Why CompileIT Section */}
      <WhyCompileITSection />

      {/* Alumni Section */}
      <AlumniSection />

      {/* Stories Section */}
      <StoriesSection />

      {/* Learning Model Section */}
      <LearningModelSection />

      {/* Faculty Section */}
      <FacultySection />

      {/* Footer CompileIT Banner */}
      <FooterBanner />
    </div>
  );
};

export default Home;
