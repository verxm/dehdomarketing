import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return (
        <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
            <div className="border-x-4 border-white bg-primary h-40 w-40 flex items-center rounded-full shadow-md">
                <Image src="/logo.png" alt="Logo Deh do Marketing" height={200} width={200} />
            </div>

            <h1 className="font-[600] mt-11 text-3xl mb-4 tracking-tighter">
                Marketing com<br className="sm:hidden"/>
                {/* TODO: fazer com que o tamanho das palafras não altere o tamanho da frase */}
                <b><FlipWords className="font-tanpearl text-primary w-[50]" words={words} /> </b>
            </h1>

            <p className="max-w-xl mx-auto text-base text-neutral-600">
            Tudo o que sua marca precisa para conquistar <b>resultados de impacto</b>. Oferecemos soluções criativas, alinhadas a <b>estratégias precisas</b>, para levar sua comunicação a um <b>novo nível</b>.
            </p>
        </div>
    );
}

export default PresentationSession;