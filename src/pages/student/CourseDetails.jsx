import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCoursedata] = useState(null);
  const { allCourses, calculateRating } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCoursedata(findCourse);
  };
  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="relative flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-[500px] z-0 bg-gradient-to-b from-cyan-50 via-cyan-100/50 to-white"></div>

        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          <div className="flex items-center gap-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((__, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? " ratings" : " rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1
                ? " students"
                : " student"}
            </p>
          </div>
          <p className="text-sm">
            Course by <span className="text-blue-600 underline">Sumaan</span>
          </p>
        </div>

        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
