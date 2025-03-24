import React from 'react';

export default function LeadershipTimeline() {
  return (
    <section id="outsidecoding" className="p-8 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <h2 className="text-3xl font-bold mb-8 text-center text-[FFFF00]">LEADERSHIP</h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-[#006E51] transform -translate-x-1/2"></div>

      {/* Vice President of IEEE UC Davis */}
      <div className="flex items-center justify-between mb-8 w-full">
        <div className="w-1/2"></div>
        <div className="w-8 h-8 bg-[#F6D155] border-2 border-[#006E51] rounded-full flex items-center justify-center">
          <span className="text-[#006E51] text-lg"></span>
        </div>
        <div className="w-1/2 pl-8">
          <div className="bg-[#CC9966] p-6 rounded-l-full shadow-md">
            <h3 className="text-lg font-bold text-[#006E51]">Vice President of IEEE UC Davis</h3>
            <p className="text-sm font-bold text-[#006E51] mb-2">June 2024 - March 2025</p>
            <p className="text-sm text-gray-800">
              Guided a team, managed events, and promoted tech initiatives within the campus ECE community.
            </p>
          </div>
        </div>
      </div>

        {/* Leadership Certificate Program */}
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="w-1/2 text-right pr-4">
            <div className="bg-[#CC9966] p-8 rounded-r-full shadow-md">
              <h3 className="text-lg font-bold text-[#006E51]">Leadership Certificate from UC Davis CLL</h3>
              <p className="text-sm font-bold text-[#006E51] mb-2">Jan 2024 - May 2024</p>
              <p className="text-sm text-gray-800">
                This transformative experience from UC Davis Centre for Leadership and Learning taught me that true leadership goes beyond tasks—it requires social responsibility and an understanding of societal issues, equipping me to lead with a socially conscious approach.
              </p>
            </div>
          </div>
          <div className="w-8 h-8 bg-[#F6D155] border-2 border-[#006E51] rounded-full flex items-center justify-center">
            <span className="text-[#006E51] text-lg"></span>
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* Peer Mentor for First Year Aggie Connections */}
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="w-1/2"></div>
          <div className="w-8 h-8 bg-[#F6D155] border-2 border-[#006E51] rounded-full flex items-center justify-center">
            <span className="text-[#006E51] text-lg"></span>
          </div>
          <div className="w-1/2 pl-8">
            <div className="bg-[#CC9966] p-6 rounded-l-full shadow-md">
              <h3 className="text-lg font-bold text-[#006E51]">Peer Mentor for First Year Aggie Connections</h3>
              <p className="text-sm font-bold text-[#006E51] mb-2">June 2023 - Dec 2023</p>
              <p className="text-sm text-gray-800">
                Supported and mentored 25 first-year students, helping them adjust to college life and succeed academically.
              </p>
            </div>
          </div>
        </div>

        {/* Deputy Head Girl */}
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="w-1/2 text-right pr-8">
            <div className="bg-[#CC9966] p-6 rounded-r-full shadow-md">
              <h3 className="text-lg font-bold text-[#006E51]">Deputy Head Girl, GEMS Westminster School</h3>
              <p className="text-sm font-bold text-[#006E51] mb-2">Sept 2020 - June 2021</p>
              <p className="text-sm text-gray-800">
                Led the student council, organized events, and represented the student body in school decisions.
              </p>
            </div>
          </div>
          <div className="w-8 h-8 bg-[#F6D155] border-2 border-[#006E51] rounded-full flex items-center justify-center">
            <span className="text-[#006E51] text-lg"></span>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
