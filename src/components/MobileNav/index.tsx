import * as React from "react";
import { ThemeButton } from "../Button";
import { Drawer, Link } from "@mui/material";

import logo from "../../assets/port-logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

type MobileNavProps = {
  links: {
    text: string;
    url: string;
  }[];
};

export default function MobileNav({ links }: MobileNavProps) {
  const [state, setState] = React.useState({ right: false });
  const anchor = "right";
  const toggleDrawer =
    (anchor: string, open: boolean) => (event: React.SyntheticEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        // Handle keyboard event
        return;
      }

      // Handle other events (e.g., mouse click)
      setState({ ...state, [anchor]: open });
    };

  const SOCIAL_MEDIA_ICONS = [
    { id: 1, icon: <FacebookIcon />, label: "Facebook" },
    { id: 2, icon: <InstagramIcon />, label: "Instagram" },
    { id: 3, icon: <XIcon />, label: "X" },
    { id: 4, icon: <PhoneIphoneIcon />, label: "Phone" },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Whiskey Wave Logo"
          className="lg:max-w-[150px] max-w-[60px] max-h-[60px]"
        />

        <ThemeButton onClick={toggleDrawer(anchor, true)} size="icon">
          <MenuIcon />
        </ThemeButton>
      </div>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "200px",
            paddingY: "32px",
            background: "#dbd5ad",
          },
        }}
      >
        <div className="text-lg font-copy flex flex-col px-2  ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              underline="none"
              color="#272421"
              className="not-last:border-b not-last:mb-2 "
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="bottom-0 absolute px-2 pb-8 left-0">
          <div className="flex">
            {SOCIAL_MEDIA_ICONS.map(({ icon, id }) => (
              <ThemeButton
                key={id}
                onClick={() => {}}
                size="icon"
                variant="dark"
                className="not-last:mr-2"
              >
                {icon}
              </ThemeButton>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}
