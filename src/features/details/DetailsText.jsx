function DetailsText({ title, text }) {
  return (
    <p className="text-stone-400">
      {title} : <span className="text-stone-100">{text}</span>
    </p>
  );
}

export default DetailsText;
