import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <div className="pb-14 mt-20 px-6 md:px-0 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-medium text-gray-800 text-center">
        Testimonials
      </h2>
      <p className="md:text-base text-gray-500 mt-3 text-center">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-4 flex gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-500 mt-3">{testimonial.feedback}</p>

            {/* Read More */}
            <a href="#" className="text-blue-600 font-medium mt-3 inline-block">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
