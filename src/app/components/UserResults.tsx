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
        <article className="container flex flex-col justify-center items-center">
          <div className="max-w-[60rem]">
            <div className="flex flex-col space-y-4 max-w-5xl bg-white p-7">
              <h3 className="mb-3 font-extrabold text-3xl">
                End of Assessment
              </h3>
              <Image
                className="rounded-lg"
                src="/images/endbot.png"
                width={200}
                height={200}
                alt="product"
              />
              <div className="mb-10">
                <p>
                  Thank you so much for completing the Charged Up Assessment!
                </p>
                <p>
                  Based on your knowledge and preferences, I think that OANDA is
                  a perfect fit for you!
                </p>
                <p>
                  Below are a list of resources that are specific to your needs
                  as a trader. Please take some time to review them and if these
                  seem like a good match, sign up for your firsrt OANDA account
                  now!
                </p>
              </div>
              <Link
                href="https://www.oanda.com/apply/"
                className="mx-auto bg-slate-900 w-fit text-white px-4 py-2 rounded-md"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
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
