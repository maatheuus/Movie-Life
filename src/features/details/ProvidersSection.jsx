import HeadingDetails from "./HeadingDetails";

function ProvidersSection({ providers, imageURL }) {
  return (
    providers?.US && (
      <div>
        <HeadingDetails as="h3" label="Where are available?" />
        <div className="grid gap-2 my-6 grid-cols-[repeat(auto-fit,50px)]">
          {providers?.US?.rent?.map((el, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-300"
            >
              <img
                src={imageURL + el?.logo_path}
                alt={el?.provider_name}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default ProvidersSection;
