import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Star } from "../Style";
import { Styledshowcard } from "./ShowStyle";
const ShowCard = ({ id, image, name, summary, onStareClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <Styledshowcard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={() => onStareClick(id, isStarred)}>
          <Star active={isStarred} />
        </button>
      </div>
    </Styledshowcard>
  );
};

export default memo(ShowCard);
