import React from "react";
import "./card.css";

interface Props {
  title: string;
  desc: string;
}

const Card = (props: Props) => {
  const { title, desc } = props;

  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
