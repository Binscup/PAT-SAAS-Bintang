import React, { useState } from "react";

const GetInTouch = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image:
        "https://qph.cf2.quoracdn.net/main-thumb-370110287-50-vydtpmnxhhujdzfhwelnvodcgblzhvmi.jpeg",
      text: "I am a part of the Jakarta Intercultural School, class of 2021. I am an Indonesian citizen and one of the student ambassadors. There is no one way to describe my experience at JIS. But to sum it up, I would say it's AMAZING!!!",
      name: "Kevin",
    },
    {
      image: "https://qph.cf2.quoracdn.net/main-thumb-192140800-50-xmhpegphfysvmjjwxliupjijbjdrgmkq.jpeg",
      text: " don’t go to Jakarta International School but I do go to an International school in the Jabodetabek area and personally I feel like our point of views are broadened and I feel like we also have a more liberal viewpoint on issues such as sexuality, equality and politics I guess.",
      name: "Adny Dias",
    },
    {
      image: "/asset/pict/biola.jpg",
      text: "Many people feel that there is a limited amount of abundance, wealth, or chance to succeed in life. Furthermore, there is a solid belief that if one person succeeds, another must fail.",
      name: "Merlin Nguyen",
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="GTI">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card Slider */}
          <div className="relative">
            <div className="view-box overflow-hidden relative">
              <div
                id="testimonials"
                className="transition-transform duration-500 flex"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full flex justify-center items-center"
                  >
                    <div className="max-w-md p-4 text-center">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="w-24 h-24 rounded-full mx-auto"
                      />
                      <p className="mt-4">{testimonial.text}</p>
                      <h3 className="mt-2 font-semibold">{testimonial.name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="controls flex justify-center mt-4">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer h-4 w-4 bg-gray-400 rounded-full mx-1 ${
                      activeIndex === index ? "bg-blue-500" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800-500 text-white p-2 rounded"
              onClick={handlePrevClick}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                ></path>
              </svg>
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800-500 text-white p-2 rounded"
              onClick={handleNextClick}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                ></path>
              </svg>
            </button>
          </div>

          {/* Form */}
          <div>
            <form className="max-w-md p-4  shadow-md rounded-lg relative">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
