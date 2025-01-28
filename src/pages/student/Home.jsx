import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";

const Home = () => {
  return (
    <div className="felx flex-col items center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
    </div>
  );
};

export default Home;
