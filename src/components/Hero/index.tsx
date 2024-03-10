import { ThemeButton } from "../Button";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export function Hero() {
  const SOCIAL_MEDIA_ICONS = [
    { id: 1, icon: <FacebookIcon />, label: "Facebook" },
    { id: 2, icon: <InstagramIcon />, label: "Instagram" },
    { id: 3, icon: <XIcon />, label: "X" },
    { id: 4, icon: <PhoneIphoneIcon />, label: "Phone" },
  ];

  return (
    <section className="container md:mt-40 relative">
      <div>
        <h6>Hey there and welcome! My name is</h6>
        <h1 className="font-black">Kendra Mulligan</h1>
        <h2 className="font-black">Developer & Nature Lover</h2>
        <p className="text-offWhite md:max-w-4xl">
          I’ve been developing for over 5 years, and have recently gained the
          prominent title of Senior Web Developer. When I’m not coding, you can
          catch me outside camping, kayaking, or simply just enjoying beautiful
          Colorado scenery. I enjoy time with my wife, and puppies – both of
          which are my inspiration for most of my projects. Feel free to drop me
          a line, or check out my projects and achievements below!
        </p>
        <div className="md:mt-10">
          <ThemeButton className="md:mr-4 ">Send Me An Email</ThemeButton>
          <ThemeButton>Download My Resume</ThemeButton>
        </div>
      </div>
      <aside className="md:absolute right-0 top-0">
        {SOCIAL_MEDIA_ICONS.map(({ icon, id }) => (
          <ThemeButton
            key={id}
            onClick={() => {}}
            size="icon"
            variant="outline"
          >
            {icon}
          </ThemeButton>
        ))}
      </aside>
    </section>
  );
}
