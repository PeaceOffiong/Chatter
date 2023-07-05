import Image from "next/image";

const Others = () => {
  return (
    <>
      <aside>
        <Image
          src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688571350/Person5_y6puh1.svg"
          alt="person"
          height="100"
          width="100"
        />
        <Image
          src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688508310/Person3_pyrdkh.svg"
          alt="person"
          height="100"
          width="100"
        />
        <Image
          src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688508246/Person4_xyxjfe.svg"
          alt="person"
          height="100"
          width="100"
        />
      </aside>
      <aside>
        <h1>Write, read and connect with great minds on chatter</h1>
        <p>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <button className="cursor-pointer h-10 w-28 bg-blue-700 rounded-md capitalize text-white self-start">
          Get Started
        </button>
      </aside>
    </>
  );
};

export default Others;
