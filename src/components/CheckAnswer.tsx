import React from "react";
import { Card } from "../models/models";
import { Button, Text } from "../styles/CheckAnswer.styled";

interface props {
    answer: string[];
    completedCards: Card[];
    checkResult: (answer: string[], completedCards: Card[]) => void;
    checkFlag: string;
}

const CheckAnswer: React.FC<props> = ({ answer, completedCards, checkResult, checkFlag }) => {
    return (
        <>
            {
                checkFlag === "OK" ? <Text color="black">This part right</Text> :
                    checkFlag === "WRONG" ? <Text color="red">This part wrong</Text> :
                        checkFlag === "GREAT" ? <Text color="green">Great</Text> :
                            checkFlag === " " ? <Text color="black">No cards to check</Text> : ' '
            }
            <Button onClick={() => checkResult(answer, completedCards)}>Check</Button>
        </>
    );
}

export default CheckAnswer;