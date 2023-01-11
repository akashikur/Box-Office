import React, { useCallback } from "react";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../Style";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { useShows } from "../../misc/custom-hooks";

const ShowGrid = ({ data }) => {
  const [starredshows, dispatchstarred] = useShows();
  const onStareClick = useCallback(
    (showId, isStarred) => {
      if (isStarred) {
        dispatchstarred({ type: "REMOVE", showId: showId });
      } else {
        dispatchstarred({ type: "ADD", showId: showId });
      }
    },
    [dispatchstarred]
  );
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStareClick={onStareClick}
            isStarred={starredshows.includes(show.id)}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
