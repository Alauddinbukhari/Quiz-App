

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questoinNr: number;
    totalQuestions; number;
}


const QuestionCard: React.FC<Props> = ({ question, answer, callback, userAnswer, questoinNr, totalQuestions }) => (<div>Question Card</div>);

export default QuestionCard;