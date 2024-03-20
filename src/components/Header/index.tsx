import { useEffect, useState } from "react";
import MobileNav from "../MobileNav";
import { PDFButton } from "../PDFButton";
import logo from "../../assets/port-logo.png";

const navLinks = [
  {
    text: "My Story",
    url: "#about",
  },
  {
    text: "My Pieces",
    url: "#portfolio",
  },
  {
    text: "Experience",
    url: "#experience",
  },
  {
    text: "Skillset",
    url: "#skills",
  },
  {
    text: "Contact Me",
    url: "mailto:kmulligan589@gmail.com",
  },
];

export function Header() {
  const [screenIsSmall, setScreenIsSmall] = useState(isScreenSmall());

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenIsSmall(isScreenSmall());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-transparent">
      <div className="container-none lg:py-8 pt-8">
        {!screenIsSmall && (
          <div className="flex justify-between items-center container-none">
            <img
              src={logo}
              alt="Whiskey Wave Logo"
              className="lg:max-w-[150px] max-w-[60px] max-h-[60px]"
            />
            <div className="flex items-center">
              <nav className="flex">
                <ul className="flex justify-around items-center ">
                  {navLinks.map((link, index) => (
                    <li key={index} className="mr-4">
                      <a
                        href={link && link.url}
                        className="text-offWhite hover:text-secondary-hover font-links uppercase text-sm"
                      >
                        {link && link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <PDFButton
                aria-label="Download Kendra's resume"
                text="My Resume"
                variant={true}
              />
            </div>
          </div>
        )}
        {isScreenSmall() && <MobileNav links={navLinks} />}
      </div>
    </header>
  );
}
