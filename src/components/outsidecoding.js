import React from 'react';

export default function Projects() {
  return (
    <div>
      <section id="public-speaking" className="p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-6">PUBLIC SPEAKING</h2>
            <p className="text-lg mb-4">
              <i>"If you can speak, you can influence. If you can influence, you can change lives."</i>
            </p>
            <img src="/publicspeaking.jpg" alt="Public Speaking" className="w-full h-auto mb-4" />
            <p className="mb-4">
              I was introduced into the realm of public speaking by my dad. From a young age, I’ve seen how speaking can spark change and make a difference. It’s not just about talking in front of people—it’s about using your voice to inspire, persuade, and connect with others.
            </p>
            <ul className="list-disc list-inside mb-8">
              <li><a href="https://youtu.be/ssm215gXKE8?si=T30Kqsug1uYBb48l&t=4680" className="text-emerald-800 hover:underline" target="_blank" rel="noopener noreferrer">"Is AI helping or hurting healthcare?" - Public Speaking Video 1</a></li>
              <li><a href="https://drive.google.com/file/d/1xJpyAavWMRyP_c1Vi1HMKsT3s5W4X0ZT/view?usp=sharing" className="text-emerald-800 hover:underline" target="_blank" rel="noopener noreferrer">Public Speaking Video 2</a></li>
              <li><a href="https://youtu.be/NY3L0amH_qQ?si=DV3nwFWaSq5CpCRv" className="text-emerald-800 hover:underline" target="_blank" rel="noopener noreferrer">"Hope - The Essence of Life" - Public Speaking Video 3</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="public-speaking" className="p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-6">LEADERSHIP</h2>
            <p className="text-lg mb-4">
              <i>"A good leader knows the way, shows the way, and goes the way."</i>
            </p>
            <img src="/leadership.jpg" alt="Leadership pic" className="w-full h-auto mb-4" />
            <p className="mb-4">
              Leadership isn't just about being in charge; it's about guiding and inspiring others. It’s often said that with great power comes great responsibility. I believe this is especially true in leadership. It's not just about having authority but using it to make a positive impact. My journey in leadership has been shaped by various roles and experiences.
            </p>
            <ul className="list-disc list-inside mb-8">
              <li>Vice President of IEEE UC Davis chapter</li>
              <li>Deputy Head Girl of my High School</li>
              <li>Peer Mentor for First Year Aggie Connections</li>
            </ul>
            <p>
              <a href="/Liza%20CLL%20certificate.jpg" className="text-emerald-800 hover:underline" target="_blank" rel="noopener noreferrer">Certificate from UC Davis Centre for Leadership and Learning</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
