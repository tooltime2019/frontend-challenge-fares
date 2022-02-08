import React, {useEffect, useState} from 'react'
import Question from "../models/Question"

const useLoadQuestions = (): Array<Question> => {

    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        window.fetch("https://polls.apiblueprint.org/questions")
            .then(response => {
                if (response.ok) {
                    return response.json()
                        .then(data => {
                            setQuestionList(data)
                        })
                }
            })
    }, [])

    return questionList
}

export default useLoadQuestions