function HeadingDetails({ as, label, className }) {
  if (as === "h1") {
    return <h1 className={`font-bold text-4xl ${className}`}>{label}</h1>;
  }
  if (as === "h2") {
    return (
      <h2
        className={`text-2xl lg:text-4xl font-bold text-stone-100 mb-2 font-serif ${className}`}
      >
        {label}
      </h2>
    );
  }
  if (as === "h3") {
    return (
      <h2 className={`text-xl font-bold text-stone-100 mb-1 ${className}`}>
        {label}
      </h2>
    );
  }
}

export default HeadingDetails;
