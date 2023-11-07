"use client";

import React from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import Card from "./Card";
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
    userResults,
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
            {!answeredAll && (
              <article className="container mt-12">
                <h2>Thanks for answering all the questions</h2>
                <div className="flex flex-col items-center justify-center ">
                  <p className="text-lg ">
                    Based on the choices and your experience, you can checkout
                  </p>

                  {resultTags.map((tag: string, i: string) => {
                    const cardProps = userResults[tag];
                    return <Card key={i} {...cardProps} />;
                  })}
                </div>
              </article>
            )}
          </article>

          {/* <button className="next-question" onClick={nextQuestion}>
          next question
        </button> */}
        </section>
      </div>
    </main>
  );
}

export default App;
