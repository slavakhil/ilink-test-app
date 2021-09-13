import React from "react";
import { Card } from "../models/models";
import { Button, Text } from "../styles/CheckAnswer.styled";

interface props {
    answer: string[];
    completedCards: Card[];
    checkResult: (answer: string[], completedCards: Card[]) => void;
    checkFlag: string;
    resultFlag: boolean;
}

const CheckAnswer: React.FC<props> = ({ answer, completedCards, checkResult, checkFlag, resultFlag }) => {
    return (
        <>
            {
                resultFlag ? checkFlag === "OK" ? <Text color="black">This part right</Text> :
                    checkFlag === "WRONG" ? <Text color="red">This part wrong</Text> :
                        checkFlag === "GREAT" ? <Text color="green">Great</Text> :
                            " " : " "
            }
            <Button onClick={() => checkResult(answer, completedCards)}>Check</Button>
        </>
    );
}

export default CheckAnswer;
