import React from "react";

interface Props {
  name: string;
  url: string;
}

const Card: React.FC<Props> = ({ name, url }) => {
  return (
    <div className="card info">
      <b className="card-item">{name}</b>
      <div className="card-item">
        <a href={`https://${url}`}>{url}</a>
      </div>
    </div>
  );
};

export default Card;
// export default function Card: ({ name: string }) {
//   return (

//   );
// }
