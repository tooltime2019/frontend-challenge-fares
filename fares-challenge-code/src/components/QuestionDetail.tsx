import React, {FC} from 'react'

interface QuestionDetailProps {
    title: string
}

const QuestionDetail: FC<QuestionDetailProps> = ({title}) => {

    return (
        <div>
            <h2>im in the box {title}</h2>
        </div>
    )
}