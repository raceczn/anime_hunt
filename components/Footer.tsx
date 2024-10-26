import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">Anime Hunt</p>

      <Image
        src="/assets/logo.png"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />

      <div className="flex items-center gap-6">
        <Image
          src="./assets/tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./assets/instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./assets/twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
