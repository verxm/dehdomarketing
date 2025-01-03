import { FlipWords } from "@/components/flip-words";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return ( 
        <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-5 pt-6">
          <h1 className="text-4xl mb-4 tracking-tighter">
            Marketing com
            <b><FlipWords className="text-primary" words={words} /> </b><br />
            de quem ama o que faz para quem ama o que faz
          </h1>

          <p className="max-w-2xl mx-auto text-xl font-medium text-balance text-neutral-600">
            Soluções de comunicação de forma criativa e aplicadas a estratégias assertivas
          </p>
        </div>
     );
}
 
export default PresentationSession;