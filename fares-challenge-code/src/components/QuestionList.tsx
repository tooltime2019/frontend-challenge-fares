import React, {FC, useEffect, useState} from 'react';
import QuestionBox from "./QuestionBox"
import "./QuestionList.css"
import useLoadQuestions from "../hooks/useLoadQuestions"
import Question from "../models/Question"

const QuestionList: FC = () => {

    const questionList = useLoadQuestions()

    return (
        <div>
            <div className="question-list-header">Questions</div>
            <Router>
                <div className ="question-list">
                    <nav>
                        {
                            questionList.map((questionBox: Question) => (
                                <QuestionBox 
                                    title={questionBox.question} 
                                    publishedAt = {questionBox.published_at} 
                                    choicesLength= {questionBox.choices.length}
                                />
                            ))
                        }
                    </nav>
                    <Route path="/questions/"
                </div>
            </Router>
        </div>
    )
}

export default QuestionList