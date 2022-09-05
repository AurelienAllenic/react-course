import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Survey = () => {
  const {questionNumber} = useParams();
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <>
        <h1>Questionnaire</h1>
        <h2>Question {questionNumber}</h2>
        <nav>
        <Link to={`/survey/${prevQuestionNumber}`}>précédent</Link>
        <Link to={`/survey/${nextQuestionNumber}`}>suivant</Link>
        </nav>
    </>
  )
}

export default Survey