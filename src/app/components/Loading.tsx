import Image from "next/image";

const Loading = () => {
  return (
    <main>
      <Image
        src="/images/loading_mobile.gif"
        alt="loading"
        width={300}
        height={300}
      />
    </main>
  );
};

export default Loading;
