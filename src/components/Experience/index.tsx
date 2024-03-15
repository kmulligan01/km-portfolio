import Coffee from "../../assets/coffee.jpg";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import { jobObject } from "../../data/infoData";
import { CodeXml } from "lucide-react";
import { ThemeButton } from "../Button";

export function Experience() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8">
      <div>
        {jobObject.map((job, index) => (
          <Timeline position="alternate" key={job.id}>
            <TimelineItem>
              <TimelineOppositeContent align="right" sx={{ py: "12px", px: 2 }}>
                <span className="font-links text-sm">{job.dates}</span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined">
                  <CodeXml />
                </TimelineDot>
                {index < jobObject.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <span className="font-links text-secondary">{job.company}</span>
                <p className="text-sm">{job.role}</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        ))}
      </div>
      <div className=" lg:text-right">
        <h3 className="uppercase border-b-2 border-offWhite pb-1 ">
          My Job Experience
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          delectus minima error facilis odio quam, autem excepturi, dolores nam
          voluptates fugiat tempora iure suscipit perspiciatis maiores magni ad
          quisquam itaque. Asperiores architecto dicta iusto esse illum, quo in?
          Dolorum distinctio, laboriosam quia explicabo numquam rem repudiandae,
          porro molestias ab sunt doloremque delectus animi accusamus ipsa
          voluptas! Tempore at nemo consequatur.
        </p>
        <ThemeButton>Download Resume</ThemeButton>
      </div>
    </section>
  );
}
