import { Blur, Footer, Hero, Stripes } from "@/components";
import { EmptyMemories } from "@/components/EmptyMemories";
import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Right */}

      <div className="relative flex flex-col  items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
        <Blur />
        <Stripes />

        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            {" "}
            <span className="underline">
              Crie sua conta e salve suas memórias!
            </span>
          </p>
        </a>

        <Hero />
        <Footer />
      </div>
      {/* Left */}
      <div className="flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
       <EmptyMemories />
      </div>
    </main>
  );
}
