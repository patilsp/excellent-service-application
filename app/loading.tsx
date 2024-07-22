import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Image
        src='/icons/loader.svg'
        width={120}
        height={120}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
