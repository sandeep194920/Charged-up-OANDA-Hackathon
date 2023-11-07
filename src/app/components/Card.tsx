import Link from "next/link";
import React from "react";
import Image from "next/image";

type CardProps = {
  heading: string;
  text: string;
  link: string;
  image: string;
};

function Card({ heading, text, link, image }: CardProps) {
  return (
    <div className="max-w-[60rem] min-w-[60rem] my-10 bg-gray-100 p-8 rounded-lg">
      <div className="flex flex-col">
        <h3 className="mb-6">{heading}</h3>
        <div className="flex">
          <p className="flex-grow">{text}</p>
          <Image src={image} width={200} height={200} alt="product" />
        </div>
        <button className="bg-slate-900 w-fit text-white px-3 py-2 rounded-md">
          <Link href={link}>Explore this product</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
