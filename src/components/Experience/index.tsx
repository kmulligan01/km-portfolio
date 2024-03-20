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
import { PDFButton } from "../PDFButton";
import { EntranceScroll } from "../EntranceScroll";
import style from "./style.module.css";

export function Experience() {
  return (
    <EntranceScroll>
      <section
        id="experience"
        className="container lg:grid lg:grid-cols-2 lg:gap-8"
      >
        <div>
          {jobObject.map((job, index) => (
            <Timeline position="alternate" key={job.id}>
              <TimelineItem className={style.timelineDates}>
                <TimelineOppositeContent
                  align="right"
                  sx={{ py: "12px", px: 2 }}
                  className={style.timelineDateText}
                >
                  <span className="font-links text-base">{job.dates}</span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    color="secondary"
                    variant="outlined"
                    className={style.timelineDot}
                  >
                    <CodeXml />
                  </TimelineDot>
                  {index < jobObject.length - 1 && (
                    <TimelineConnector className={style.timelineDot} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <span className="font-links text-secondary text-lg">
                    {job.company}
                  </span>
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
            After successfully completing my six month coding bootcamp, I
            started my work experience as a frontend developer for a home
            improvement company where I quickly worked myself up to managing a
            small team of 2 other developers. Together, we completed upwards of
            5-8 sites a day utilizing JavaScript, HTML, CSS, and much more.
          </p>
          <p>
            While working at the home improvement company, I started my
            freelance business on the side where I have been helping my clients
            build an online presence. I own my own hosting so I can assist my
            clients from the ground up with hosting, domains, branding, content,
            websites, and SEO rich sites.
          </p>
          <p>
            I was hired by EverCommerce Solutions in 2021 as a mid-level
            developer where I have earned over 4 awards that align with the
            companies mission and values such as "Be Kind", and "Succeed
            Together". I was promoted to Senior level devloper in 2023 where I
            continue to grow my skillset, and mentor junior developers. Some of
            the technologies I get the chance to work with include GraphQL,
            Headless WordPress, email marketing templates, attribution, and much
            more.
          </p>
          <PDFButton
            aria-label="Download Kendra's resume"
            text="Download Resume"
          />
        </div>
      </section>
    </EntranceScroll>
  );
}
