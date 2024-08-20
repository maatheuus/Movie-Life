import HeadingDetails from "./HeadingDetails";
import { Star } from "lucide-react";
import DetailsText from "./DetailsText";
import { formatDate, formatLocale } from "../../utils/utils";
import Divider from "../../ui/Divider";

function DetailsSection({ data, duration, director, writer }) {
  return (
    <div>
      <HeadingDetails as="h2" label={data.title || data.name} />
      <p className="text-neutral-400">{data.tagline}</p>
      <p className="text-lg font-semibold text-stone-400 mb-2 flex gap-3 flex-wrap items-end">
        Genres :{" "}
        {data?.genres?.map(({ id, name }) => (
          <span
            key={id}
            className="bg-stone-200 text-stone-900 text-base px-1 font-bold rounded-md"
          >
            {name}
          </span>
        ))}
      </p>
      <Divider />
      <div className="flex flex-wrap items-center gap-3">
        <p className="flex gap-x-1 items-center text-stone-100">
          <Star /> {Number(data?.vote_average).toFixed(1)}+
        </p>
        <span>|</span>
        <DetailsText title="Views" text={Number(data?.popularity)} />
        <span>|</span>
        <DetailsText title="Duration" text={duration} />
        <span>|</span>
        <DetailsText title="Budget" text={formatLocale(data?.budget)} />
      </div>
      <Divider />
      <div>
        <HeadingDetails as="h3" label="Overview" className="!text-stone-300" />
        <p className="text-stone-50">{data?.overview}</p>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center gap-3 my-3 text-center">
        <DetailsText title="Status" text={data?.status} />
        <span>|</span>
        <DetailsText
          title="Release Date"
          text={formatDate(data?.release_date)}
        />
        <span>|</span>
        <DetailsText title="Revenue" text={formatLocale(data?.revenue)} />
      </div>
      <Divider />
      <div>
        <DetailsText title="Director" text={director} />
        {writer && <DetailsText title="Writer" text={writer} />}
      </div>
    </div>
  );
}

export default DetailsSection;
