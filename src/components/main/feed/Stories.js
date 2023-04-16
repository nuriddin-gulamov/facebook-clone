import { useSelector } from "react-redux";

import Story from "../../UI/Story";

function Stories() {
  const STORIES = useSelector((state) => state.stories);

  return (
    <div className="flex justify-center items-center w-[100%] max-[850px]:justify-center">
      {STORIES.map((story, index) => (
        <div className="max-sm:hidden">
          <Story
            Icon={story.icon}
            name={story.name}
            index={index}
            key={index}
          />
        </div>
      ))}
      {STORIES.slice(0, 3).map((story, index) => (
        <div className="sm:hidden">
          <Story
            Icon={story.icon}
            name={story.name}
            index={index}
            key={index}
          />
        </div>
      ))}
    </div>
  );
}

export default Stories;
