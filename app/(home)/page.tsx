import Header from "@/components/header";
import PresentationSession from "./presentation-session";
import Contacts from "@/components/contacts";
import ServiceItem from "@/components/service-item";

export default function Home() {
  return (
    <>
      <Header />

      <div className="pt-14 px-7">
        <PresentationSession />

        <div className="pt-5">
          <Contacts />
        </div>

        <ServiceItem
          name="Gestão de Redes Sociais"
          description="▸ Planejamento e desenvolvimento de conteúdos para as redes sociais\n
            ▸ Desenvolvimento de banners e imagens\n
            ▸ Roteiro para stories e vídeos\n
            ▸ Criação de legendas persuasivas\n
            ▸ Captação e edição de vídeos\n
            ▸ Briefing, análise de dados para entender melhor
            ▸ a necessidade do público alvo"
          imagePath="/gestao-de-redes-sociais.jpeg" />
      </div>
    </>
  );
}