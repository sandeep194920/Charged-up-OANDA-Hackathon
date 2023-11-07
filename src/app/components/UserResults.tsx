"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../context";
import Card from "./Card";

function UserResults() {
  const { resultTags, userResults } = useGlobalContext();
  return (
    <section className="flex flex-col items-center">
      <div className="quiz">
        <article className="container mt-12">
          <h2>Complete</h2>
          <div>
            <p>Thank you so much for completing the Charged Up Assessment!</p>
            <p>Based on your knowledge and preferences, I think that OANDA is a perfect fit for you!</p>
            <p>Below are a list of resources that are specific to your needs as a trader. Please take some time to review them.</p>
            <p>If these seem like a good match, sign up for your firsrt OANDA account now!</p>
            <Link href="https://www.oanda.com/apply/" passHref>
              <button
                className="apply-btn"
                dangerouslySetInnerHTML={{ __html: "Sign up"}}
              />
            </Link>
          </div>
          <Image
            className="rounded-lg"
            src="/images/endbot.png"
            width={200}
            height={200}
            alt="product"
          />
          <div className="flex flex-col items-center justify-center ">
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
