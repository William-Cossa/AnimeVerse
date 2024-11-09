import Image from "next/image";
import React from "react";

export default function Teste() {
  return (
    <div className=" w-full overflow-hidden">
      <Image
        src={"/lizzy02.jpg"}
        width={1280}
        height={0}
        alt=""
        className="fixed w-full h-auto -z-[1]"
      />
      <section className="w-1/2 h-[30vh] flex items-center ">
        <h1 className="text-xl p-10 font-bold tracking-wider">
          Capacitacao e desenvolvimento Profissional
        </h1>
      </section>

      <section className=" w-full mt-10 grid grid-cols-1 gap-10 z-10">
        <div className=" h-96 w-full bg-slate-500"></div>
        <div className=" h-96 w-full bg-slate-500"></div>
        <div className=" h-96 w-full z-20">
          <Image
            src={"/lizzy02.jpg"}
            width={1280}
            height={0}
            alt=""
            className="w-full h-full "
          />
        </div>
        <div className=" h-96 w-full bg-slate-500"></div>
        <div className=" h-96 w-full bg-slate-500"></div>
        <div className=" h-96 w-full bg-slate-500"></div>
      </section>
    </div>
  );
}
