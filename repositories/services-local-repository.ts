import { Service } from "@/app/_entities/service"

const allServices = [
    {
        id: "1",
        name: "Gestão de Redes Sociais",
        description: "▸ Planejamento e desenvolvimento de conteúdos para as redes sociais\n▸ Desenvolvimento de banners e imagens\n▸ Roteiro para stories e vídeos\n▸ Criação de legendas persuasivas\n▸ Captação e edição de vídeos\n▸ Briefing, análise de dados para entender melhor a necessidade do público alvo",
        image: "/gestao-de-redes-sociais.jpeg",
    },
    {
        id: "2",
        name: "Tráfego Pago",
        description: "▸ Facebook e Instagram ADS - trabalho com a emoção do cliente, fazendo com que ele compre a sua solução\n▸ Google ADS - O Google é o maior mecanismo de busca do MUNDO, por que não colocar sua empresa no topo dessa ferramenta?",
        image: "/trafego-page.png",
    },
    {
        id: "3",
        name: "Análise de Perfil",
        description: "▸ Foto de perfil que transmite profissionalismo e autoridade\n▸ Análise do nome e “@” do perfil\n▸ Biografia que mostre qual transformação a pessoa terá ao comprar de você\n▸ Análise dos destaques\n▸ Chamada para atenção (CTA)\n▸ Arquivo com todas as estratégias e pontos de melhorias",
        image: "/analise-de-perfil.jpeg",
    },
    {
        id: "4",
        name: "Vídeos de eventos & realizações de REELS",
        description: "▸ Irei até sua empresa ou evento realizar a produção de vídeos necessários para construir o seu posicionamento digital e divulgar o seu trabalho\n▸ Captações exclusivas realizadas por mim, utilizando equipamentos de alta performance para entregar uma qualidade cinematográfica",
        image: "/prod-conteudo.jpeg",
    },
    {
        id: "5",
        name: "Criação de Infoprodutos",
        description: "▸ E-book\n▸ Id. visual\n▸ Portfólio\n▸ Cartão visita\n▸ Cartão digital (interativo)\n▸ Flyer\n▸ Folders\n▸ Materiais para eventos",
        image: "/criacao-infoprodutos.jpeg",
    },
] as Service[];

export const servicesRepository = {
    getAll: () => {
        return allServices;
    }
}