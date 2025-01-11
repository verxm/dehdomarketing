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
          description="Planejamento e desenvolvimento de conteúdos
            para as redes sociais;
            Desenvolvimento de banners e imagens;
            Roteiro para stories e vídeos;
            Criação de legendas persuasivas;
            Captação e edição de vídeos;
            Briefing, análise de dados para entender melhor
            a necessidade do público alvo;"
          imagePath="/gestao-de-redes-sociais.jpeg" />
      </div>
    </>
  );
}