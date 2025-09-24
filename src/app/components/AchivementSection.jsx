 "use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

// Professional achievements based on 6+ years experience
const achievementsList = [
  {
    metric: "Projects Completed",
    value: "50",
    postfix: "+"
  },
  
  {
    metric: "Active Users",
    value: "200000",
    prefix: "~"
  },
  {
    metric: "Years Experience",
    value: "6",
    postfix: "+"
  },
  {
    metric: "Clients Served",
    value: "30",
    postfix: "+"
  },
  {
    metric: "Web Applications",
    value: "40",
    postfix: "+"
  },
  {
    metric: "Mobile Apps",
    value: "10",
    postfix: "+"
  }
];

const AchivementSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 md:px-16 bg-gray-900 rounded-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsList.map((achive, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl py-8 px-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-white text-4xl sm:text-5xl font-extrabold flex items-center">
              {achive?.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achive?.value.replace(/,/g, ""))}
                locale="en-US"
                className="text-white"
                configs={(_, index) => ({
                  mass: 1,
                  tension: 140 * (index + 1),
                  friction: 100
                })}
              />
              {achive?.postfix}
            </h2>
            <p className="text-[#ADB7BE] mt-2 text-center font-medium">{achive?.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchivementSection;
