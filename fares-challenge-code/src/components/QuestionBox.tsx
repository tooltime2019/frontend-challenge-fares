import {  FC } from "react"
import "./QuestionBox.css"

interface QuestionProps {
    title: string
    publishedAt: string
    choicesLength: number
}

const QuestionBox: FC<QuestionProps> = ({title, publishedAt, choicesLength}) => {


    return (
        <div className="question-box">
            <div className="question-box-title">
                {title}
            </div>
            <div className="question-attribute">
                {publishedAt}
            </div>
            <div className="question-attribute">
                {choicesLength}
            </div>
        </div>
    )
}

export default QuestionBox