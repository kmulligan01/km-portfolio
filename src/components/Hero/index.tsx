import { ThemeButton } from "../Button";
import { TypeAnimation } from "react-type-animation";
import { SOCIAL_MEDIA_ICONS } from "../../data/infoData";
import { EntranceScroll } from "../EntranceScroll";
import { PDFButton } from "../PDFButton";

export function Hero() {
  return (
    <EntranceScroll>
      <section className="container lg:mt-40 relative mt-0">
        <div className="">
          <h6>Hey there and welcome! My name is</h6>
          <h1 className="font-black md:text-8xl text-6xl">Kendra Mulligan</h1>
          <TypeAnimation
            sequence={[
              "Developer & Puppy Lover",
              1500,
              "Developer & Avid Reader",
              1500,
              "Developer & Camper",
              1500,
              "Developer & Kayaker",
              1500,
            ]}
            wrapper="h2"
            speed={10}
            style={{ fontWeight: 800 }}
            repeat={Infinity}
          />
          <p className="text-offWhite md:max-w-4xl">
            I’ve been developing for over 5 years, and have recently gained the
            prominent title of Senior Web Developer. When I’m not coding, you
            can catch me outside camping, kayaking, or simply just enjoying
            beautiful Colorado scenery. I enjoy time with my wife, and puppies –
            both of which are my inspiration for most of my projects. Feel free
            to drop me a line, or check out my projects and achievements below!
          </p>
          <div className="md:mt-10">
            <ThemeButton
              className="mr-4 md:mb-0 mb-4"
              url={"mailto:kmulligan589@gmail.com"}
              target={"_blank"}
              aria-label="Send Kendra an email"
            >
              Send Me An Email
            </ThemeButton>
            <PDFButton
              aria-label="Download Kendra's resume"
              text="Download Resume"
            />
          </div>
        </div>
        <aside className="xl:absolute right-5 top-0 hidden xl:block">
          {SOCIAL_MEDIA_ICONS.map((item) => (
            <ThemeButton
              key={item.id}
              size="icon"
              variant="outline"
              className="not-last:mb-3"
              url={item.url}
              target={"_blank"}
            >
              <item.icon />
            </ThemeButton>
          ))}
        </aside>
      </section>
    </EntranceScroll>
  );
}
