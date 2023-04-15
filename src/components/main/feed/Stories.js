import { useSelector } from "react-redux";

import Story from "../../UI/Story";

function Stories() {
  const STORIES = useSelector((state) => state.stories);

  return (
    <div className="flex justify-center items-center w-[100%] max-[850px]:justify-center">
      {STORIES.map((story, index) => (
        <Story Icon={story.icon} name={story.name} key={index} index={index} />
      ))}
    </div>
  );
}

export default Stories;
