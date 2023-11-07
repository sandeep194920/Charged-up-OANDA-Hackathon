"use client";

import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import UserResults from "./UserResults";
import Image from "next/image";
// import Card from "./Card";
function App() {
  const {
    loading,
    chooseAnswer,
    currentQuestion,
    showUserResults,
    showLanding,
    setShowLanding,
  } = useGlobalContext();

  const { text: QuestionText, answers } = currentQuestion;

  if (!showLanding) {
    return (
      <div className="flex flex-col space-y-7 max-w-5xl bg-white px-12 py-8">
        <h1>Charged Up</h1>
        <h3>Discover Your Ideal Financial Path with OANDA</h3>
        {/* <p>
          Hello, my name is George, it&apos;s great to meet you! I am robot designed
          to help humans make decisions.
        </p>
        <p>
          I was built by OANDA to help people just like you determine which of
          our products are the best fit for your needs.
        </p> */}
        <p>
          Hello, my name is George, it&apos;s great to meet you! I am a robot
          designed to help humans make decisions. I was built by OANDA to assist
          people just like you in determining which of our products are the best
          fit for your needs.
          <br></br>
          <br></br>
          Discover the Perfect Financial Tools with OANDA! Are you ready to
          embark on a journey towards financial success? Whether you&apos;re new
          to investing or an experienced trader, our personalized
          recommendations will guide you to the tools and knowledge you need for
          your financial goals. Click the &apos;Start&apos; button below, and
          let&apos;s get started on your financial adventure!
        </p>
        <Image
          className="rounded-lg ml-[-2rem] "
          src="/images/introbot.png"
          width={200}
          height={200}
          alt="product"
        />
        <button
          className="mx-auto bg-slate-900 w-fit text-white px-3 py-2 rounded-md"
          onClick={() => setShowLanding(true)}
        >
          Start the Assessment
        </button>
      </div>
    );
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
