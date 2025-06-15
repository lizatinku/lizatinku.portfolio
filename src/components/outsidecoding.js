import React from 'react';

export default function LeadershipTimeline() {
  return (
    <section id="outsidecoding" className="p-8 bg-black shadow-xl rounded-lg border border-[#222]">
      <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
        LEADERSHIP
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-green-600 transform -translate-x-1/2"></div>

        {[
          {
            side: "right",
            title: "Vice President of IEEE UC Davis",
            date: "June 2024 - March 2025",
            description:
              "Guided a team of 10 members, managed events, and promoted tech initiatives to within the campus ECE community.",
          },
          {
            side: "left",
            title: "Technical Project Manager",
            date: "April 2025 - May 2025",
            description:
              "Led a group of 5 students to build an ML model for a F1 race predictor in a 6 week sprint.",
          },
          {
            side: "right",
            title: "Leadership Certificate from UC Davis CLL",
            date: "Jan 2024 - May 2024",
            description:
              "This transformative experience taught me that true leadership requires social responsibility and empathy, not just delegation.",
          },
          {
            side: "left",
            title: "Peer Mentor for First Year Aggie Connections",
            date: "June 2023 - Dec 2023",
            description:
              "Supported and mentored 25 first-year students, helping them adjust to college life and succeed academically.",
          },
          {
            side: "right",
            title: "Deputy Head Girl, GEMS Westminster School",
            date: "Sept 2020 - June 2021",
            description:
              "Selected to lead 400+ students. Organized school-wide events and acted as liaison between administration and student body.",
          },
        ].map((entry, i) => (
          <div key={i} className="flex items-center justify-between mb-12 w-full relative">
            {entry.side === "left" ? (
              <>
                <div className="w-1/2 text-right pr-6">
                  <div className="bg-[#111827] p-4 rounded-r-3xl shadow-md border border-gray-600 max-w-sm ml-auto">
                    <h3 className="text-base font-bold text-white">{entry.title}</h3>
                    <p className="text-xs font-semibold text-pink-400 mb-1">{entry.date}</p>
                    <p className="text-sm text-gray-300">{entry.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 shadow-md"></div>
                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 shadow-md"></div>
                <div className="w-1/2 pl-6">
                  <div className="bg-[#111827] p-4 rounded-l-3xl shadow-md border border-gray-600 max-w-sm">
                    <h3 className="text-base font-bold text-white">{entry.title}</h3>
                    <p className="text-xs font-semibold text-pink-400 mb-1">{entry.date}</p>
                    <p className="text-sm text-gray-300">{entry.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
