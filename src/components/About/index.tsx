import AboutImg from "../../assets/nyc.jpeg";
import { ThemeButton } from "../Button";
import { EntranceScroll } from "../EntranceScroll";

export function About() {
  return (
    <EntranceScroll>
      <section className="container grid grid-cols-2 gap-12 items-start">
        <div className="relative h-fit">
          <div className="  border-8 border-secondary rounded-md h-[400px] w-[500px] bg-about contain bg-cover bg-no-repeat">
            <img
              src={AboutImg}
              alt="Picture of Kendra in New York City"
              className="absolute max-w-lg -bottom-10 right-10 rounded-md shadow-md border-offWhite border-8"
            />
          </div>
        </div>
        <div className="lg:text-right">
          <h3 className="uppercase border-b-2 border-offWhite pb-1 ">
            A Little More About Me
          </h3>
          <p>
            I started teaching myself to code via videos and library books in
            2012, where my love for coding was introduced. I continued to learn
            until I felt I could use some more guidance, and that was how I
            found myself reasearching and applying for coding bootcamps in the
            Denver area. I found a coding bootcamp at Denver University and
            applied. I was one of 20 students selected from a pool of over 200
            applicants to be part of the six month long endeavor while working
            fulltime in finance.
          </p>
          <p>
            When I'm not coding, I love enjoying the Colorado outdoors, or
            cuddled up on the couch with a good book and hot cup of coffee. I
            write poetry, play softball, and I'm part of a couple board/card
            game groups located around Denver. My wife and I have made Colorado
            our home after moving to Denver eight years ago.
          </p>
          <ThemeButton url={"mailto:kmulligan589@gmail.com"} target={"_blank"}>
            Send Me An Email
          </ThemeButton>
        </div>
      </section>
    </EntranceScroll>
  );
}
