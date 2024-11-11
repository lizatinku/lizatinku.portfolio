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

export default function Experience() {
  return (
    <div id="experience" className="p-4 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-[#CC9966] mb-8 text-center">EXPERIENCE</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
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
            <Typography variant="h6" component="span">
              Software Engineer
            </Typography>
            <Typography>AI Student Collective</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body2"
            color="text.secondary"
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
          <TimelineContent sx={{ py: '60px', px: 2 }}> {/* Increased vertical padding */}
            <Typography variant="h6" component="span">
              Undergraduate Researcher
            </Typography>
            <Typography>UC Davis College of Engineering</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
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
            <Typography variant="h6" component="span">
              Machine Learning Engineer
            </Typography>
            <Typography>Google Developer Student Club</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
