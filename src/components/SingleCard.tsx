import React from "react";
import { Card } from "../models/models";
import { Draggable } from "react-beautiful-dnd";
import { CardBlock } from "../styles/SingleCard.styled";

const SingleCard: React.FC<{
  index: number;
  card: Card;
}> = ({ index, card }) => {

  return (
      <Draggable draggableId={card.id.toString()} index={index}>
        {(provided) => (
          <CardBlock
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {card.card}
          </CardBlock>
        )}
      </Draggable>
  );
};

export default SingleCard;
