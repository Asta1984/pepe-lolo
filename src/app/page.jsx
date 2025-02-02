import Link from "next/link";
import ClipBoard from "@/components/ClipBoard";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-6 min-h-dvh">
            <img
                className="rounded-full w-28 object-cover h-28"
                src="/hayasakasmall.gif"
                alt="Aihayasaka"
            />

            <section className="flex flex-col items-center text-center">
                <h1 className="text-cyan-400 font-serif text-2xl">Ai Hayasaka</h1>

                <p className="text-sm text-neutral-400 font-medium font-serif italic">
                    Professional Retard and a good friend
                </p>
            </section>

            <div className="text-lg font-medium text-neutral-400 flex gap-6 items-center">
                
                <Link
                href="https://github.com/Asta1984"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://x.com/mandal_sal88300"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5 text-gray-300" />
              </Link>
            </div>
            

            <section className="flex gap-1 flex-col items-center">
                <p className="font-medium">Gimme gimme gimme {"👉👈"}</p>

                <ul className="font-medium text-lg text-neutral-400 flex gap-6 items-center">
                    <ClipBoard
                        address={
                            "bc1qpj4ezfpd7z2rzx628aexkl53lrrfurp5pgjy2k"
                        }
                        currencyName={"Bitcoin"}
                    />

                    <ClipBoard
                        address={"0xB796af2A1937DdD47A51a0AA23812282FFc9cAb1"}
                        currencyName={"Ethereum"}
                    />

                    <ClipBoard
                        address={"8GjLZzhzbiGct3GXZoHowmzbYhnnQq9hG2Az7t1qS18C"}
                        currencyName={"Solana"}
                    />
                </ul>
            </section>
        </main>
    );
}
