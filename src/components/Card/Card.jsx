const Card = (props) => {
  return (
    <div
      key={props.title}
      className="flex flex-col w-28 h-28 m-5 justify-center gap-3"
    >
      <img src={props.img} alt={props.title} />
      <p className="text-center">{props.title}</p>
    </div>
  );
};

export default Card;
