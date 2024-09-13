import Image from 'next/image';

function HomeHeader() {
  return (
  <section>
      <section className="w-full h-[calc(100vh-71px)] relative bg-slate-600">
      <Image
        src={'/images/homeHeader.png'}
        alt={'homeHeader'}
        objectFit="cover"
        width={700}
        height={400}
        className="h-full w-full absolute"
      />

      你好哈哈
    </section>
  </section>
  );
}

export default HomeHeader;
