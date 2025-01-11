import ServiceItem from "./service-item";

interface Service {
    id: string,
    name: string,
    description: string,
    image: string,
}

const ServicesSession = () => {
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
        </>
    );
}

export default ServicesSession;