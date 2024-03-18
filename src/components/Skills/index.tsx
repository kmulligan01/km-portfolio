import Slider from "@mui/material/Slider";
import { infoObject } from "../../data/infoData";
import Coffee from "../../assets/coffee.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="container grid lg:grid-cols-2 gap-14"
    >
      <div>
        <h3 className="uppercase border-b-2 border-offWhite pb-1">
          My Software Skills
        </h3>

        {infoObject.map((data) => (
          <div key={data.id} className="flex justify-between items-center my-8">
            <div className="flex gap-4">
              <div className="border-2 border-secondary p-2 rounded-md flex items-center justify-center ">
                <data.icon width="30" height="30" className="invert " />
              </div>
              <p className="text-left font-links">{data.title}</p>
            </div>
            <div className="w-[70%]">
              <Slider
                sx={{
                  "& .MuiSlider-track": {
                    color: "rgb(242, 245, 247,0.8)",
                  },
                  "& .MuiSlider-thumb": {
                    backgroundColor: "rgb(43, 140, 136,0.8)",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "rgb(43, 140, 136,0.8)",
                  },
                }}
                disabled
                defaultValue={data.skill}
                aria-label={`My ${data.title} skill level is ${data.skill}%`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative ">
        <div className="  border-8 border-secondary rounded-md h-[400px] w-[500px] bg-skills  bg-cover bg-no-repeat mx-auto mt-7">
          <img
            src={Coffee}
            alt="Picture of Kendra's Workspace"
            className="absolute max-w-sm top-32 right-10 rounded-md shadow-md border-offWhite border-8"
          />
        </div>
      </div>
    </motion.section>
  );
}
