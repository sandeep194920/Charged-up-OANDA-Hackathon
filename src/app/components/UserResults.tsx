"use client";

import { useGlobalContext } from "../context";
import Card from "./Card";

function UserResults() {
  const { resultTags, userResults } = useGlobalContext();
  return (
    <section className="flex flex-col items-center">
      <div className="quiz">
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
      </div>
    </section>
  );
}

export default UserResults;
