import Image from "next/image";
import Link from "next/link";

import ilu from '../../../public/images/ILU.svg'

const Thankyou = () => {
  return (
    <div className="flex justify-center items-center gap-8 w-full h-screen bg-[#111213]">
      <div className="flex flex-col justify-start gap-8 p-4">
        <p className="inline-block text-4xl font-semibold text-neutral-100">Thank You!</p>
        <p className="inline-block text-lg font-regular max-w-[600px] text-neutral-400">
          Your order request is waiting approval.
        </p>
        <p className="inline-block text-lg font-regular max-w-[600px] text-neutral-400">
          You can expect to hear from us <span className="text-white">within the next 24 hours.</span>
        </p>
        <p className="inline-block text-lg font-regular max-w-[600px] text-neutral-400">
            In the meantime, feel free to stay connected with us <Link href="https://www.linkedin.com/company/conquestbits/posts/?feedView=all&viewAsMember=true" target="_blank" className="text-[#FB723D]">here.</Link>
        </p>
        <Image src={ilu} alt="" width={150} className="mt-8"></Image>
      </div>
    </div>
  );
};

export default Thankyou;
