"use client";

import React from "react";
import { useGlobalContext } from "../context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import UserResults from "./UserResults";
// import Card from "./Card";
function App() {
  const {
    loading,
    chooseAnswer,
    currentQuestion,
    showUserResults,
    showWelcomePage,
  } = useGlobalContext();

  const { text: QuestionText, answers } = currentQuestion;

  if (showWelcomePage) return <SetupForm />;

  return (
    <main>
      {!showUserResults ? (
        <section className="flex flex-col items-center">
          <div className="quiz">
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
            {loading && <Loading />}
          </div>
        </section>
      ) : (
        <UserResults />
      )}
    </main>
  );
}

export default App;
