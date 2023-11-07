"use client";
import React, { useState, useContext, useEffect } from "react";

import { quizStateMachine as quizQuestions, userResults } from "../data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const allQuestions = quizQuestions.questions;
  const initialQuestion = quizQuestions.currentQuestion;

  const [currentQuestion, setCurrentQuestion] = useState(
    allQuestions[initialQuestion]
  );

  const [showUserResults, setShowUserResults] = useState(false);

  // uncomment this useState if you want to see all the products in userResults
  // const [resultTags, setResultTags] = useState([...Object.keys(userResults)]);

  const [resultTags, setResultTags] = useState([]);
  const [answeredAll, setAnsweredAll] = useState(false);

  const [showWelcomePage, setShowWelcomePage] = useState(true);

  const chooseAnswer = (value) => {
    const currentChoice = currentQuestion.answers[value];
    currentChoice?.tag &&
      setResultTags((prevResults) => [...prevResults, currentChoice["tag"]]);
    const nextQuestion = currentChoice.nextQuestion;
    setCurrentQuestion(allQuestions[nextQuestion]);
  };

  useEffect(() => {
    if (currentQuestion.answers.length === 0) {
      setAnsweredAll(true);
      setLoading(true);
      setInterval(() => {
        setShowUserResults(true);
        setLoading(false);
      }, 3000);
    }
  }, [currentQuestion, loading]);

  return (
    <AppContext.Provider
      value={{
        loading,
        chooseAnswer,
        currentQuestion,
        setCurrentQuestion,
        answeredAll,
        resultTags,
        userResults,
        showUserResults,
        showWelcomePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
