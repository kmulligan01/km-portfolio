import { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { portObject } from "../../data/infoData";
import { ThemeButton } from "../Button";
import { ImageOverlay } from "../ImageOverlay";

export function PortfolioFilter() {
  const [filter, setFilter] = useState<string | null>(null);

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  const filteredImages = filter
    ? portObject.filter((img) => img.category === filter)
    : portObject;

  return (
    <section className="container horz-m">
      <div className="filter-buttons max-w-md m-auto mb-8">
        <ThemeButton className="mr-4" onClick={() => handleFilter("")}>
          All
        </ThemeButton>
        <ThemeButton
          className="mr-4"
          onClick={() => handleFilter("TypeScript React")}
        >
          TypeScript/React
        </ThemeButton>
        <ThemeButton onClick={() => handleFilter("Custom WordPress")}>
          Custom WordPress
        </ThemeButton>
      </div>
      <Masonry columns={3} spacing={2}>
        {filteredImages.map((item, index) => (
          <div key={index}>
            <ImageOverlay
              imageUrl={item.img}
              alt={item.alt}
              title={item.portTitle}
              portLink={item.url}
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}
