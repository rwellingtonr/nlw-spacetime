import Image from "next/image";
import spaceTimeLogo from "../../assets/logo.svg";

export function Hero() {
  return (
    <div className="space-y-5">
      <Image
        src={spaceTimeLogo}
        loading="lazy"
        alt="Logo do nlw spacetime"
        quality={75}
      />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>{" "}
      <a
        href="#"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm leading-none text-black transition-colors hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  );
}
