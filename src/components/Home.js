import React from "react";

export const Home = () => {
  return (
    <div className="md:flex w-full h-screen justify-center bg-slate-200 dark:bg-gray-800 dark:text-white">
      <header className="flex mx-auto w-1/2 mt-5  justify-center">
        <img src="/profile pic.jpeg" className=" rounded-2xl p-2 " />
      </header>

      <section className="flex flex-col justify-center mx-auto md:w-1/2 mt-5 md:text-3xl">
        <h1 className="text-4xl md:text-7xl m-2 font-semibold md:text-left text-center mb-4">
          Full Stack Developer
        </h1>
        <label className="ml-2 font-semibold">Certificates :</label>
        <p className="ml-2 mb-4">Fullstack Academy Web Development Immersive</p>
        <label className="ml-2 font-semibold">Email :</label>
        <p className="ml-2 mb-4">ntreasure14@gmail.com</p>
        <label className="ml-2 font-semibold">Phone :</label>
        <p className="ml-2 mb-4">315-224-3239</p>
      </section>
    </div>
  );
};
