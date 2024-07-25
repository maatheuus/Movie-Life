function Heading({ as, label, className }) {
  if (as === "h1") {
    return <h1 className={`font-bold text-2xl ${className}`}>{label}</h1>;
  }
  if (as === "h2") {
    return <h2 className={`font-bold text-xl ${className}`}>{label}</h2>;
  }
}

export default Heading;
