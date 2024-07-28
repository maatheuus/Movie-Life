function ImageHeader({ imageURL, backdropPath, title }) {
  return (
    <div className="w-full h-[280px] relative hidden lg:block">
      <div className="w-full h-full">
        <img
          alt={`image of the ${title}`}
          className="h-full w-full object-cover"
          src={imageURL + backdropPath}
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </div>
  );
}

export default ImageHeader;
