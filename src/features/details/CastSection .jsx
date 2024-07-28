import { CastList } from "./ExpanderCast";
import HeadingDetails from "./HeadingDetails";

function CastSection({ castData, imageURL }) {
  return (
    <div className="my-5">
      <HeadingDetails as="h3" label="Cast" />
      <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4 items-end">
        <CastList castData={castData} imageURL={imageURL} />
      </div>
    </div>
  );
}

export default CastSection;
