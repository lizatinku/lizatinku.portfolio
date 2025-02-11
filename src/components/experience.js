import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import GestureIcon from '@mui/icons-material/Gesture';

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
            Dec 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <StorageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '30px', px: 2 }}>
            <Typography variant="h6" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Full-stack Developer
            </Typography>
            <Typography sx={{ color: 'white' }}>I am developing a responsive web application using the MERN stack (MongoDB, Express.js, React, Node.js) for a landscaping business. I am integrating RESTful APIs for efficient frontend-backend communication and implement JWT-based authentication to enhance security. Additionally, I am designing a user interface with React.js and Tailwind CSS, ensuring a seamless user experience.</Typography>
          </TimelineContent>
        </TimelineItem>

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
              <DeveloperModeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Software Engineer at AI Student Collective
            </Typography>
            <Typography sx={{ color: 'white' }}>Leading frontend development for an AI-powered ASL translation system, ensuring seamless integration with backend models. Designing an intuitive UI with React and Tailwind CSS to enhance accessibility and usability. </Typography>
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
              <GestureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}> 
            <Typography variant="h6" component="span" sx={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
              Undergraduate Researcher
            </Typography>
            <Typography sx={{ color: 'white' }}>In this role, I am researching AI-driven methods to classify cognitive impairment stages and model Alzheimer’s disease progression using the ADNI dataset. I am collaborating with a PhD candidate and fellow UC Davis researchers to improve prediction accuracy and identify critical progression milestones. </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}
            align="left"
          >
            Sept 2024 - Dec 2024
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
              In this role, I provided troubleshooting and debugging support for hardware and software issues on Mac and Windows platforms. I assisted faculty with software/hardware setup and conduct regular checks to ensure compliance with UC Davis policies.
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
            <Typography sx={{ color: 'white' }}>Collaborated on developing a flight price predictor using a large dataset. Learned the machine learning pipeline through self-study and club workshops, including data cleaning, model training, testing, and performance evaluation. Plotted accuracy metrics and ROC curves to assess model effectiveness.</Typography>
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </div>
  );
}
