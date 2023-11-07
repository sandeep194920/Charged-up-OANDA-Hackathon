"use client";

import React from "react";
import { useGlobalContext } from "../context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import UserResults from "./UserResults";
import Image from "next/image";
// import Card from "./Card";
function App() {
  const {
    loading,
    chooseAnswer,
    currentQuestion,
    answeredAll,
    resultTags,
    userResults,
    showUserResults,
    showLanding,
    setShowLanding
  } = useGlobalContext();

  const { text: QuestionText, answers } = currentQuestion;

  if (!showLanding) {
    return <>
      <h1>Charged Up</h1>
      <div>
        <p>Hello, my name is George, it's great to meet you! I am robot designed to help humans make decisions.</p>
        <p>I was built by OANDA to help people just like you determine whether our products are the best fit for your needs.</p>
      </div>
      <Image
        className="rounded-lg"
        src="/images/introbot.png"
        width={200}
        height={200}
        alt="product"
      />
      <button
        className="landing-btn"
        dangerouslySetInnerHTML={{ __html: "Start the Assessment!"}}
        onClick={() => setShowLanding(true)}
      />
    </>
  }
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
