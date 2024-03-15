import { portObject } from "../../data/infoData";
import { ImageOverlay } from "../ImageOverlay";
import { CustomIcon } from "../CustomIcon";
import { ThemeButton } from "../Button";

export function Portfolio() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <section className="container">
      <h3 className="uppercase border-b-2 border-offWhite pb-1 ">
        My Portfolio Pieces
      </h3>

      <div className="">
        {portObject.map((item, index) => (
          <>
            <div className="grid lg:grid-cols-2 ">
              <div className="">
                <h3>{item.portTitle}</h3>
                <p>{item.description}</p>
                <ThemeButton onClick={() => handleClick(item.url)}>
                  View
                </ThemeButton>
              </div>

              <div className="mx-auto mt-10">
                <ImageOverlay
                  imageUrl={item.img}
                  alt={item.alt}
                  title={item.portTitle}
                  description={item.shortDescription}
                  portLink={item.url}
                />
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-5 border-b border-b-offWhite my-10">
                {item.languages.map((language, languageIndex) => (
                  <div key={languageIndex} className="not-last:mb-8 ">
                    <CustomIcon customIcon={language} />
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
