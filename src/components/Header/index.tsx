import { useEffect, useState } from "react";
import MobileNav from "../MobileNav";
import { ThemeButton } from "../Button";
import logo from "../../assets/port-logo.png";

const navLinks = [
  {
    text: "My Story",
    url: "/about",
  },
  {
    text: "My Pieces",
    url: "/pieces",
  },
  ,
  {
    text: "Contact Me",
    url: "/contact",
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
      <div className="container-none py-8">
        {!screenIsSmall && (
          <div className="flex justify-between container-none">
            <img
              src={logo}
              alt="Whiskey Wave Logo"
              className="lg:max-w-[150px] max-w-[60px] max-h-[60px]"
            />

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
              <ThemeButton variant="outline">My Resume</ThemeButton>
            </nav>
          </div>
        )}
        {isScreenSmall() && <MobileNav links={navLinks} />}
      </div>
    </header>
  );
}
