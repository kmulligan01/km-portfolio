import { portObject } from "../../data/infoData";
import { ImageOverlay } from "../ImageOverlay";
import { CustomIcon } from "../CustomIcon";
import { ThemeButton } from "../Button";
import { EntranceScroll } from "../EntranceScroll";

export function Portfolio() {
  return (
    <EntranceScroll>
      <section id="portfolio" className="container">
        <h3 className="uppercase border-b-2 border-offWhite pb-1 ">
          My Portfolio Pieces
        </h3>

        {portObject.map((item, index) => (
          <div key={index}>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="">
                <h3 className="font-bold">{item.portTitle}</h3>
                <p>{item.description}</p>
                <ThemeButton
                  url={item.url}
                  target={"_blank"}
                  aria-label={`View Kendra's ${item.portTitle} project`}
                >
                  View
                </ThemeButton>
              </div>

              <div className="mx-auto mt-10">
                <ImageOverlay
                  imageUrl={item.img}
                  alt={item.alt}
                  title={item.portTitle}
                  portLink={item.url}
                />
              </div>
            </div>

            <div className="border-b border-b-offWhite my-10 grid  grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
              {item.languages.map((language, languageIndex) => (
                <div key={languageIndex} className="not-last:mb-8 ">
                  <CustomIcon customIcon={language} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </EntranceScroll>
  );
}
