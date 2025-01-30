import Link from "next/link";
import Image from "next/image";

const SvgButton = ({ href, text, icon, className = "" }) => {
  return (
    <Link
      href={href}
      className={`bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-12 ${className}`}
    >
      <span>{text}</span>
      <Image
        className=""
        src={`/${icon}.png`}
        alt="Next.js logo"
        width={15}
        height={30}
        priority
      />
    </Link>
  );
};

export default SvgButton;
