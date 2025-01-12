import { Service } from "@/app/_entities/service"

const allServices = [
    {
        id: "1",
        name: "GESTÃO DE REDES SOCIAIS",
        description: "Transforme suas redes sociais em uma máquina de resultados!\n\nNós cuidamos de tudo para garantir que a sua marca decole nas plataformas digitais mais importantes: Instagram, Facebook, Google Meu Negócio, TikTok e muito mais.\n\nOferecemos uma gestão completa e personalizada:\n\n✨ Pesquisa de tendências para manter a sua marca atual e relevante.\n✨ Legendas criativas que encantam e conectam.\n✨ Organização do perfil e identidade visual única que representa a sua essência.\n✨ Produção de fotos, vídeos e designs profissionais que impressionam.\n✨ Planeamento, publicação estratégica, monitoramento e relatórios completos para medir resultados.\n\n💡 Mais visibilidade, mais interação e mais resultados.\n📲 Vamos criar uma presença digital que encanta e converte!",
        image: "/gestao-de-redes-sociais.jpeg",
    },
    {
        id: "2",
        name: "GESTÃO DE TRÁFEGO PAGO",
        description: "🚀 Gestão de Tráfego Pago que Transforma Cliques em Clientes!\n\nChegou a hora de levar sua marca ao próximo nível. Criamos e gerenciamos campanhas patrocinadas nas redes sociais para potencializar sua presença digital, ampliar o alcance do seu conteúdo e transformar engajamento em vendas.\n\n💡 Porque quem não é visto, não é lembrado – e quem não é lembrado, perde oportunidades!\n\nGaranta que sua marca seja a escolha certa para os seus clientes.",
        image: "/trafego-page.png",
    },
    {
        id: "3",
        name: "ANÁLISE DE PERFIL",
        description: "Você sabia que o Instagram é como uma vitrine da sua marca? Para atrair olhares e ganhar credibilidade, é essencial que essa \"casa\" esteja impecável. ✨\n\nCom nossa Análise de Perfil, nós transformamos o seu Instagram em um espaço atraente e alinhado com a essência da sua empresa.\n\n💡 O que entregamos:\n\n•⁠  ⁠Foto de perfil que transmite profissionalismo e autoridade\n•⁠  ⁠⁠Análise do nome e \"@\" do perfil\n•⁠  ⁠⁠Biografia que mostre qual transformação a pessoa terá ao comprar de você\n•⁠  ⁠⁠Análise dos destaques\n•⁠  ⁠⁠Chamada para atenção (CTA)\n•⁠  ⁠⁠Arquivo completo com ideias e estratégicas práticas",
        image: "/analise-de-perfil.jpeg",
    },
    {
        id: "4",
        name: "CAPTAÇÕES DE VÍDEOS",
        description: "Levo minha expertise até sua empresa ou evento para produzir vídeos que fortalecem seu posicionamento digital e destacam seu trabalho de forma única.\n\n📸 Como funciona a captação:\nProduções 100% personalizadas, realizadas por mim, com equipamentos de última geração e câmeras profissionais. \n\nO resultado? Vídeos com qualidade cinematográfica que impressionam e conectam!\n\n📈 Mostre o melhor da sua marca e conquiste seu público com imagens que falam por você.",
        image: "/prod-conteudo.jpeg",
    },
    {
        id: "5",
        name: "CRIAÇÃO DE INFOPRODUTOS",
        description: "Está começando sua jornada online ou quer dar um up no seu negócio? Deixe a parte criativa conosco! \n\nCriamos tudo o que você precisa para se destacar: \n•⁠  ⁠Identidade visual \n•⁠  ⁠Logo\n•⁠  ⁠Portfólio\n•⁠  ⁠Cartão de visita\n•⁠  ⁠Flyers \n•⁠  ⁠Materiais para eventos.\n\nNós cuidamos de cada detalhe para garantir que seus serviços sejam divulgados da melhor forma possível.",
        image: "/criacao-infoprodutos.jpeg",
    },
] as Service[];

export const servicesRepository = {
    getAll: () => {
        return allServices;
    }
}