import React from "react";

const Stories = () => {
  return (
    <div className="md:px-12 flex flex-col items-center justify-center my-20">
      <h1 className="font-bold text-3xl text-center lg:mb-10">Our Stories</h1>
      <div className="flex flex-col px-6 lg:flex-row gap-10 ">
        <div className="lg:w-1/2 md:px-6 pt-10 lg:pt-0 flex items-center">
          <img
            src="https://colthinkspace.com/_app/immutable/assets/firmbee-com-gcsNOsPEXfs-unsplash.Dt_L6CNf.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 ">
          <p className="text-md md:text-xl leading-relaxed lg:pl-10 text-justify">
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
