import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';

export default function Experience() {
  return (
    <div id="experience" className="p-4 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <h2 className="text-5xl font-bold text-[#CC9966] mb-8 text-center">EXPERIENCE</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}
            align="right"
          >
            Oct 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Software Engineer at AI Student Collective
            </Typography>
            <Typography sx={{ color: 'white' }}>In this role, I am developing AI models to translate ASL gestures into spoken language and text using computer vision techniques. I collaborate with a team of engineers to refine the gesture recognition model and design a user-friendly frontend interface with React and Tailwind CSS for improved accessibility. </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}
            align="left"
          >
            Sept 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}> 
            <Typography variant="h6" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Undergraduate Researcher in E-search program
            </Typography>
            <Typography sx={{ color: 'white' }}>In this role, I am researching AI-driven methods to classify cognitive impairment stages and model Alzheimer’s disease progression using the ADNI dataset. I am collaborating with a PhD candidate and fellow UC Davis researchers to improve prediction accuracy and identify critical progression milestones. </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}
            align="left"
          >
            Sept 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Computer Room Consultant at UC Davis
            </Typography>
            <Typography sx={{ color: 'white' }}>
              In this role, I provide troubleshooting and debugging support for hardware and software issues on Mac and Windows platforms. I assist faculty with software/hardware setup and conduct regular checks to ensure compliance with UC Davis policies.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}
            align="right"
          >
            Nov 2022 - March 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              ML Engineer at Google Developer Student Club
            </Typography>
            <Typography sx={{ color: 'white' }}>In this role, I collaborated with a team of 4 engineers to develop a flight price predictor using a Kaggle dataset, applying machine learning techniques such as data cleaning and model training. I presented the project at the End-of-Year Showcase, demonstrating strong technical and communication skills.</Typography>
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </div>
  );
}
