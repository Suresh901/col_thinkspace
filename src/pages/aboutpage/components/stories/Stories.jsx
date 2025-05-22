import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Stories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:px-12 flex flex-col items-center justify-center my-20">
      <h1
        className="font-bold text-3xl text-center lg:mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Stories
      </h1>
      <div className="flex flex-col px-6 lg:flex-row gap-10 ">
        <div
          className="lg:w-1/2 md:px-6 pt-10 lg:pt-0 flex items-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="https://images.ctfassets.net/pdf29us7flmy/4dRKN4OCnUTH8NFn0hfbd6/0e2a8ed7351b0f34e0ae72a2e39e15cf/GettyImages-764798619_optimized__1_.jpg?w=720&q=100&fm=jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div
          className="lg:w-1/2 "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-md md:text-lg leading-relaxed lg:pl-10 text-justify">
            What began as a bold vision shared by three determined individuals
            quickly turned into a movement that would redefine IT solutions in
            Nepal. Fueled by passion, innovation, and a desire to create
            something impactful, we set out on a journey to bridge the
            technological gap in businesses. But we knew we couldn't do it
            alone. From the very beginning, we brought in ten bright and
            ambitious interns young minds eager to learn, grow, and contribute
            to something bigger than themselves. Together, we built the
            foundation of what would soon become a game-changer in the industry.
            The road wasn't easy. Challenges came in waves tight budgets,
            demanding clients, and moments of uncertainty. But instead of
            backing down, we pushed forward, learning from every failure and
            celebrating every small win. What started in a small office with big
            dreams soon transformed into a thriving IT company, earning
            recognition and trust across Nepal and beyond. Yet, this is just the
            beginning. Even with years of experience under our belt, the journey
            ahead is filled with untapped potential and groundbreaking
            innovations waiting to be unveiled. Stay tuned there’s a lot more to
            come from us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
