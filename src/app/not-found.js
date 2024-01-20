import Link from "next/link";

const error = () => {
  return (
    <div className=" flex flex-col items-center gap-8 justify-center h-screen">
      <div className="text-black text-center text-8xl "> 404 </div>

      <div className=" text-winc-pink text-center text-3xl">
        {" "}
        PAGE NOT FOUND !
      </div>

      <Link
        href="/"
        className="text-black text-center text-2xl p-2 underline"
      >
        HOME
      </Link>
    </div>
  );
};

export default error;