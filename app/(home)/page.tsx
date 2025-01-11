import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServiceItem from "@/app/(home)/_components/service-item";

interface Service {
  id: string,
  name: string,
  description: string,
  image: string,
}

export default function Home() {
  const services: Service[] = [
    {
      id: "1",
      name: "Gestão de Redes Sociais",
      description: "▸ Planejamento e desenvolvimento de conteúdos para as redes sociais\n▸ Desenvolvimento de banners e imagens\n▸ Roteiro para stories e vídeos\n▸ Criação de legendas persuasivas\n▸ Captação e edição de vídeos\n▸ Briefing, análise de dados para entender melhor a necessidade do público alvo",
      image: "/gestao-de-redes-sociais.jpeg",
    }
  ];
  return (
    <>
      <Header />

      <div className="pt-14 px-7">
        <PresentationSession />

        <div className="pt-5">
          <Contacts />
        </div>
      </div>

      <div className="mt-10 mb-[4.5rem]">
        <div className="px-5 mb-3 flex flex-col items-center">
          <h2 className="text-lg uppercase text-gray-700 font-bold">Serviços oferecidos</h2>
          <p className="text-sm text-muted-foreground">Como podemos ajudar...</p>
        </div>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {services.map((service) => (
            <div key={service.id} className="min-w-[350px] max-w-[350px]">
              <ServiceItem name={service.name} description={service.description} imagePath={service.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}