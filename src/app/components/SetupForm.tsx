import React from "react";
import { useGlobalContext } from "../context";

const SetupForm = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  return (
    <main>
      <h2>Let us help find right products/resources for you</h2>
    </main>
  );
};

export default SetupForm;
