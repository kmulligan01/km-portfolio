import AboutImg from "../../assets/nyc.jpeg";

export function About() {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-12 items-start">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            tempore incidunt rem consequuntur corporis quos sit minima quisquam
            quidem adipisci. Amet cupiditate fuga iure commodi. Alias numquam
            suscipit consectetur magni. Soluta commodi magni porro omnis ab vel
            impedit quia aliquam harum odio voluptate aspernatur vitae quis
            fugit ipsum ut iste dolorem sint, iusto veniam eum assumenda. Optio
            temporibus quae animi!
          </p>
        </div>
      </div>
    </section>
  );
}
