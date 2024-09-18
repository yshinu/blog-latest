import Image from 'next/image';

function HomeHeader() {
  return (
    <section>
      <section className="w-full h-[calc(100vh-71px)] relative bg-slate-600">
        <Image
          src="/images/homeheader.png"
          alt="homeHeader"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"

        />

        <div className="absolute flex items-center justify-center text-white flex-col gap-8  inset-0 bg-black bg-opacity-10 z-10">
          <h3 className="tracking-tight inline font-semibold from-[#bc6dba] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            来者犹可追
          </h3>
          <section className='flex gap-4'>
            <a href="#">
              <Image
                src="/icons/github.svg"
                alt="github"
                width={28}
                height={28}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/email.svg"
                alt="email"
                width={28}
                height={28}
              />
            </a>
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeHeader;
