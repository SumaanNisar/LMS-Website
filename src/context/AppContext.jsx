import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setenrolledCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  const calculateNoOflectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  const calculateChapterTime = (chapter) => {
    if (
      !chapter ||
      !chapter.chapterContent ||
      !Array.isArray(chapter.chapterContent)
    ) {
      return humanizeDuration(0, { units: ["h", "m"] });
    }

    let time = 0;
    chapter.chapterContent.forEach((lecture) => {
      time += lecture?.lectureDuration || 0;
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateCourseDuration = (course) => {
    if (!course || !course.courseContent) {
      return humanizeDuration(0, { units: ["h", "m"] });
    }

    let time = 0;
    course.courseContent.forEach((chapter) => {
      if (chapter.chapterContent) {
        chapter.chapterContent.forEach((lecture) => {
          time += lecture?.lectureDuration || 0;
        });
      }
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Fetch User Enrolled Courses
  const fetchUserEnrolledCourses = async () => {
    setenrolledCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    calculateRating,
    isEducator,
    setIsEducator,
    navigate,
    calculateNoOflectures,
    calculateChapterTime,
    calculateCourseDuration,
    enrolledCourses,
    fetchUserEnrolledCourses,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
