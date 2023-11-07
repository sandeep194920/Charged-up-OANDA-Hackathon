"use client";

import React from "react";
import { useGlobalContext } from "../context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    // waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    chooseAnswer,
    currentQuestion,
    answeredAll,
    resultTags,
  } = useGlobalContext();

  // if (waiting) {
  //   return <SetupForm />;
  // }
  if (loading) {
    return <Loading />;
  }
  // const { question, correct_answer, incorrect_answers } = questions[index];
  // // ^ Placing correct_answer at the end
  // // const answers = [...incorrect_answers, correct_answer]

  // // ^Let's shuffle the answers so that we don't have the correct_answer placed at the end always
  // let answers = [...incorrect_answers];
  // const tempIndex = Math.floor(Math.random() * 4);
  // answers.splice(tempIndex, 0, correct_answer);

  const { text: QuestionText, answers } = currentQuestion;

  return (
    <main>
      <Modal />
      <div className="flex flex-col items-center">
        <section className="quiz">
          {/* <p className="correct-answers">
          correct answers : {correct}/{index}
        </p> */}
          <article className="container">
            <h2 dangerouslySetInnerHTML={{ __html: QuestionText }} />
            <div className="btn-container">
              {answers.map(
                (
                  answer: { text: string; nextQuestion: string },
                  index: string
                ) => {
                  return (
                    <button
                      key={index}
                      className="answer-btn"
                      dangerouslySetInnerHTML={{ __html: answer.text }}
                      onClick={() => chooseAnswer(index)}
                    />
                  );
                }
              )}
            </div>
          </article>

          {/* <button className="next-question" onClick={nextQuestion}>
          next question
        </button> */}
        </section>
        {answeredAll && (
          <section className="container">
            <h2>Thanks for answering all the questions</h2>
            <div className="flex flex-col">
              <h3>
                Based on the choices and your experience, you can checkout
              </h3>

              {resultTags.map((tag, i) => {
                <p key={i}>{tag}</p>;
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
