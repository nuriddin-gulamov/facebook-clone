import { useSelector } from "react-redux";

import Story from "../../UI/Story";

function Stories() {
  const STORIES = useSelector((state) => state.stories);

  return (
    <div className="flex justify-center max-[310px]:justify-start items-center w-[100%] max-[850px]:justify-center">
      {STORIES.map((story, index) => (
        <div className="max-sm:hidden" key={index}>
          <Story
            Icon={story.icon}
            img={story.img}
            name={story.name}
            index={index}
          />
        </div>
      ))}
      {STORIES.slice(0, 3).map((story, index) => (
        <div className="sm:hidden" key={index}>
          <Story
            Icon={story.icon}
            img={story.img}
            name={story.name}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default Stories;
