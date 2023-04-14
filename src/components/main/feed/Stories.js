import STORIES from '../../../data/stories';
import Story from '../../UI/Story';

function Stories() {
  return (
    <div className="flex justify-center items-center w-[100%] max-[850px]:justify-center">
      {STORIES.map((story, index) => (
        <Story Icon={story.icon} name={story.name} key={index} index={index} />
      ))}
    </div>
  );
}

export default Stories;
