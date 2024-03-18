import { ThemeButton } from "../Button";
import { SOCIAL_MEDIA_ICONS } from "../../data/infoData";

export function Footer() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <footer className="container-none text-center mb-12">
      <h6>&copy; 2024 - Designed and Built by Kendra Mulligan</h6>
      <div className="flex justify-center items-center">
        {SOCIAL_MEDIA_ICONS.map((item) => (
          <ThemeButton
            key={item.id}
            onClick={() => handleClick(item.url)}
            className="not-last:mr-2"
            size="icon"
            variant="outline"
            aria-label={item.label}
            url={item.url}
            target={"_blank"}
          >
            <item.icon />
          </ThemeButton>
        ))}
      </div>
    </footer>
  );
}
