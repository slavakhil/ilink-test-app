import React, { useState } from "react";
import CardsList from "./components/CardsList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Card } from "./models/models";
import { getSente } from "./api";
import { useEffect } from "react";
import CheckAnswer from "./components/CheckAnswer";
import user from './assets/img/user.png'
import { Header, Image, QuestionBlock, Sentence, Wrapper } from "./styles/App.styled";
import GlobalStyled from "./styles/Global.styled";

function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sortById(arr: Card[]) {
  arr.sort((a, b) => a.id > b.id ? 1 : -1);
}

const App: React.FC = () => {
  const [rusSent, setRusSent] = useState<string>('');
  const [enSent, setEnSent] = useState<string>('');
  const [cards, setCards] = useState<Card[]>([]);
  const [completedCards, setCompletedCards] = useState<Card[]>([]);
  const [answer, setAnswer] = useState<string[]>([])
  const [checkFlag, setCheckFlag] = useState<string>('');
  const [resultFlag, setResultFlag] = useState<boolean>(false);

  useEffect(() => {
    const getSent = async () => {
      let data = (await getSente()).data.data.sentence;
      setRusSent(data.ru);
      setEnSent(data.en)
      let arrayAnswerWords = data.en.split(' ');
      let arrayWords = shuffle(data.en.split(' '));
      for (let i: number = 0; i < arrayAnswerWords.length; i++) {
        answer.push(arrayAnswerWords[i]);
        setAnswer([...answer]);
        cards.push({
          id: i,
          card: arrayWords[i],
        })
        setCards([...cards]);
      }
    }
    getSent();
  }, []);

  const checkResult = (answer: string[], completedCards: Card[]) => {
    setResultFlag(true);
    if (completedCards.length === 0) return setCheckFlag(" ")
    for (let i = 0; i < completedCards.length; i++) {
      if (completedCards[i].card !== answer[i]) {
        return setCheckFlag('WRONG');
      }
    }
    if (answer.length === completedCards.length) {
      setCheckFlag("GREAT");
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en";
      speech.text = enSent;
      window.speechSynthesis.speak(speech);
      return;
    }
    else return setCheckFlag("OK");
  }

  

  const onDragEnd = (result: DropResult) => {

    const { destination, source } = result;

    console.log(result);

    

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (
      destination.droppableId === 'CardsList' &&
      source.droppableId === 'CardsList'
    ) {
      return;
    }

    let add;
    let active = cards;
    let complete = completedCards;
    // Source Logic
    if (source.droppableId === "CardsList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "CardsList") {
      active.splice(destination.index, 0, add);
    } else {
      
      complete.splice(destination.index, 0, add);
    }
    setResultFlag(false);
    setCompletedCards(complete);
    sortById(active);
    setCards(active);

  };

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Header>Translate the sentence</Header>
        <QuestionBlock>
          <Image src={user} />
          <Sentence>{rusSent}</Sentence>
        </QuestionBlock>
        <DragDropContext onDragEnd={onDragEnd}>
          <CardsList
            cards={cards}
            completedCards={completedCards}
          />
          <CheckAnswer
            answer={answer}
            completedCards={completedCards}
            checkResult={checkResult}
            checkFlag={checkFlag}
            resultFlag={resultFlag}
          />
        </DragDropContext>
      </Wrapper>
    </>
  );
};


export default App;
