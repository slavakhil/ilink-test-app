import React from "react";
import { Card } from "../models/models";
import SingleCard from "./SingleCard";
import { Droppable } from "react-beautiful-dnd";
import lines from "../assets/img/lines.png"
import { CardsBlock, Container, ImageLines, Lines } from "../styles/CardsList.styled";

interface props {
  cards: Card[];
  completedCards: Card[];
}

const CardsList: React.FC<props> = ({
  cards,
  completedCards
}) => {

  return (
    <Container>
      <Lines>
        <ImageLines src={lines} alt="" />
      </Lines>
      <Droppable droppableId="CardsAnswer" direction="horizontal">
        {(provided) => (
          <CardsBlock
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {completedCards.map((card, index) => (
              <SingleCard
                index={index}
                card={card}
                key={card.id}
              />
            ))}
            {provided.placeholder}
          </CardsBlock>
        )}
      </Droppable>
      <Droppable droppableId="CardsList" direction="horizontal">
        {(provided) => (
          <CardsBlock
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <SingleCard
                index={index}
                card={card}
                key={card.id}
              />
            ))}
            {provided.placeholder}
          </CardsBlock>
        )}
      </Droppable>
    </Container>
  );
};

export default CardsList;
