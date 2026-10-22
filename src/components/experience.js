import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import Typography from '@mui/material/Typography';

export default function Experience() {
  const experiences = [
    {
      title: "Production Engineering Fellow (2.5% acceptance rate)",
      date: "June – Sept 2025",
      ongoing: true,
      description:
        "Learned production infrastructure fundamentals and built Flask modules using Docker, NGINX, and DigitalOcean, with Grafana monitoring and unit testing.",
    },
    {
      title: "SWE Intern at Value Health",
      date: "June - Aug 2025",
      description:
        "Built full-stack components in Agile sprints for use by patients and healthcare providers.",
    },
    {
      title: "Undergraduate Researcher",
      date: "Sept 2024 – Aug 2025",
      description:
        "Built ML models with Python & Pytorch to predict Alzheimer's progression. Presented work at NorCal Undergraduate Research Symposium at SJSU.",
    },
    {
      title: "Full-stack Developer(Freelance)",
      date: "Dec 2024 – March 2025",
      description:
        "Built a website using the MERN stack for a landscaping business. Implemented REST APIs in backend & designed frontend in React.js",
    },
    {
      title: "SWE at AI Student Collective(AISC)",
      date: "Oct 2024 – May 2025",
      description:
        "Led frontend development for an AI-powered ASL translator. Designed UI in Figma and built frontend using Next.js and Tailwind CSS.",
    },

    {
      title: "Computer Room Consultant at UC Davis IET",
      date: "Sept 2024 – Dec 2024",
      description:
        "Provided Mac/Windows troubleshooting support for 100+ faculty and students. Ensured compliance with UC Davis policies.",
    },
    {
      title: "ML Engineer at GDSC Club",
      date: "Nov 2022 – March 2023",
      description:
        "Built a flight price predictor using Python libraries. Learned the ML pipeline and evaluated model using ROC curves.",
    },
  ];

  return (
    <div id="experience" className="bg-black py-20 px-4 text-white">
      <h2 className="text-center text-4xl font-bold text-pink-400 mb-12">
        My Journey
      </h2>
      <Timeline position="alternate" sx={{ maxWidth: '900px', mx: 'auto' }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                variant={exp.ongoing ? "outlined" : "filled"}
                color="success"
              />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                background: "#111",
                border: "3px solid #FFFFFF",
                borderRadius: 4,
                px: 3,
                py: 2,
                boxShadow: "0 0 10px rgba(255,255,255,0.05)",
                ml: index % 2 === 0 ? 4 : -13,  
                mr: index % 2 !== 0 ? 4 : 0, 
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#64ffda", fontWeight: "bold" }}>
                {exp.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "#aaa", mb: 1, display: "block" }}>
                {exp.date}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ddd" }}>
                {exp.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
