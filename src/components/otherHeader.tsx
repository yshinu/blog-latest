import { BookText, Calculator, Calendar, Flame, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function OtherHeader() {
  return (
    <section>
      <section className="w-full h-[calc(40vh-71px)] relative bg-slate-600 hidden sm:block">
        <Image
          src="/images/cover.jpg"
          alt="OtherHeader"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute flex items-center justify-center text-white flex-col gap-8  inset-0 backdrop-blur-md bg-white/30 bg-opacity-20 z-10 z-10">
          <h3 className="tracking-tight inline font-semibold from-[#bc6dba] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            如何学习Nextjs？
          </h3>
          <div className="sm:flex gap-4 items-center flex-wrap text-black hidden ">
            <Link href={"#"} className="flex items-center gap-1">
              <Calendar color="#6F42C1" />
              <span>2024-05-05 16:48</span>
            </Link>
            <Link href={"#"} className="flex items-center gap-1">
              <BookText color="#6F42C1" />
              <span>学习</span>
            </Link>
            <Link href={"#"} className="flex items-center gap-1">
              <Tag color="#6F42C1" />
              <span>Nextjs</span>
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
        </div>
      </section>
      <section className="w-full h-[150px] sm:hidden flex items-center justify-center relative">
        <Image
          src="/images/cover.jpg"
          alt="OtherHeader"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
        <div className=" absolute inset-0 flex justify-center items-center  backdrop-blur-md bg-white/30 bg-opacity-20 z-10">
        <h3 className="tracking-tight inline font-semibold from-[#bc6dba] to-[#b249f8] text-[1.5rem]  bg-clip-text text-transparent bg-gradient-to-b">
          如何学习Nextjs？
        </h3>
        </div>
      </section>
    </section>
  );
}

export default OtherHeader;