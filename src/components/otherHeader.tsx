'use client'
import { BookText, Calculator, Calendar, Flame, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function OtherHeader() {
  const searchParams = useSearchParams()
  return (
    <section>
      <section className="w-full h-[calc(30vh-71px)] relative bg-slate-600 hidden sm:block">
        <Image
          src={searchParams.get("cover")||"/images/homeheader.png"}
          alt="OtherHeader"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute flex items-center justify-center text-white flex-col gap-8  inset-0 backdrop-blur-md bg-white/30 bg-opacity-20 z-10">
          <h3 className={` tracking-tight inline font-semibold  text-[#b249f8] text-[2.5rem] sm:text-5xl`}>
            {searchParams.get("title")}
          </h3>
        {
          searchParams.get("createdAt")&&  <div className="sm:flex gap-4 items-center flex-wrap text-black hidden ">
          <Link href={"#"} className="flex items-center gap-1">
            <Calendar color="#6F42C1" />
            <span>{searchParams.get("createdAt")}</span>
          </Link>
          <Link href={"#"} className="flex items-center gap-1">
            <BookText color="#6F42C1" />
            <span>{searchParams.get("category")}</span>
          </Link>
          <Link href={"#"} className="flex items-center gap-1">
            <Flame color="#6F42C1" />
            <span>180</span>
          </Link>
          <Link href={"#"} className="flex items-center gap-1">
            <Calculator color="#6F42C1" />
            <span>5866字</span>
          </Link>
        </div>
        }
        </div>
      </section>
      <section className="w-full h-[150px] sm:hidden flex items-center justify-center relative">
        <Image
          src={searchParams.get("cover")||"/images/homeheader.png"}
          alt="OtherHeader"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
        <div className=" absolute inset-0 flex justify-center items-center  backdrop-blur-md bg-white/30 bg-opacity-20 z-10">
        <h3 className="flex p-3 font-semibold  text-[#b249f8] text-[1.5rem]  ">
          {searchParams.get("title")}
        </h3>
        </div>
      </section>
    </section>
  );
}

export default OtherHeader;
