"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 20, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 200, text: "Code Commits" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.3,    // trigger when 30% visible
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section ref={ref} >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <h3 className="text-4xl xl:text-6xl font-extrabold text-accent">
                {startCount ? (
                  <CountUp end={item.num} duration={2.5} />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-sm md:text-base text-white/70 font-medium max-w-[120px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
