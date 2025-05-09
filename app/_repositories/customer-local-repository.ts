import { Customer } from "../_entities/customer";

const allCustomers = [
    {
        id: "1",
        name: "GT Clinic",
        description: "A Dra. Gabriela Torres, proprietária da GT Clinic em Itapema/SC, enfrentava um desafio comum entre profissionais da área estética: transmitir sua essência e atrair clientes pelas redes sociais. Após passar por três agências de marketing, ainda não havia encontrado uma estratégia que refletisse sua autenticidade e atingisse os resultados desejados.\n\nFoi nesse cenário que assumimos a gestão das redes sociais. No Instagram, trouxemos uma abordagem diferenciada: compartilhamos o dia a dia da clínica, resultados transformadores e vídeos explicativos que estabeleceram uma conexão genuína com as seguidoras. Alinhamos conteúdos estratégicos focados em “curar” a dor do público-alvo — a busca por maior autoestima.\n\nCom essa nova estratégia, os resultados não demoraram a aparecer. Hoje, a Dra. Gabriela conta com uma base sólida de clientes fiéis, muitas das quais chegam até ela por recomendações espontâneas no próprio Instagram. Um exemplo de como uma comunicação bem direcionada pode transformar um negócio.",
        logoPath: "/logo-gt-clinic.PNG",
        instagramIdentifier: "estetica.gtclinic",
        beforeInstagramInsights: {
            dateRange: "25/07/2023 à 09/08/2023",
            accountsReached: 1099,
            reels: 618,
            totalFollowers: 1842,
            stories: 121,
            profileImagePath: "/insta-gt-clinic-antes.PNG"
        },
        afterInstagramInsights: {
            dateRange: "17/12/2024 à 15/01/2025",
            accountsReached: 15989,
            reels: 5991,
            totalFollowers: 2408,
            stories: 957,
            profileImagePath: "/insta-gt-clinic-depois.PNG"
        },
    },
    {
        id: "2",
        name: "Orlando Bora Lá",
        description: "A Mariana, proprietária da agência, procurou-nos com um desafio claro: a falta de tempo e criatividade para criar conteúdos relevantes e atrativos para as redes sociais da sua empresa. Identificamos rapidamente as suas necessidades e iniciamos a reestruturação completa do perfil da marca, tornando-o mais atrativo e profissional.\n\nImplementamos estratégias personalizadas que incluiram a criação de conteúdos consistentes e direcionados, com o objetivo de esclarecer dúvidas frequentes do público-alvo e reforçar a confiança na empresa. Paralelamente, ativamos campanhas de tráfego pago, otimizadas para alcançar o público certo e gerar maior visibilidade.\n\nOs resultados não tardaram a surgir. Hoje, a Orlando Bora Lá registra um crescimento expressivo e demonstra elevada satisfação com os resultados alcançados. Este é um exemplo claro do impacto de uma estratégia bem elaborada e de um trabalho contínuo na comunicação digital.",
        logoPath: "/perfil-mari-orlando-borala.jpeg",
        instagramIdentifier: "orlandoborala",
        beforeInstagramInsights: {
            dateRange: "09/01/2024 à 09/02/2024",
            accountsReached: 1223,
            reels: 218,
            totalFollowers: 5283,
            stories: 195,
            profileImagePath: "/insta-orlandoborala-antes.PNG"
        },
        afterInstagramInsights: {
            dateRange: "17/12/2024 à 15/01/2025",
            accountsReached: 33656,
            reels: 32627,
            totalFollowers: 9129,
            stories: 1619,
            profileImagePath: "/insta-orlandoborala-depois.PNG"
        },
    },
    {
        id: "3",
        name: "Instituto Derma",
        description: "A Dra. Patrícia Kroth, proprietária do Instituto Derma, buscou nossa ajuda após enfrentar dificuldades para gerar resultados efetivos nas redes sociais. Apesar de realizar diversas postagens, não conseguia alcançar o retorno esperado. Além disso, sentia insegurança em relação à criação de conteúdos e tinha receio de gravar vídeos.\n\nIniciamos o trabalho desenvolvendo estratégias focadas em conteúdos atrativos e relevantes para o público, incorporando depoimentos de pacientes que já haviam realizado procedimentos na clínica, fortalecendo assim a confiança dos seguidores. Gradualmente, introduzimos vídeos no planejamento, sempre oferecendo suporte com roteiros detalhados e ideias criativas para destacar a expertise da profissional.\n\nHoje, o Instituto Derma conta com um perfil no Instagram bem estruturado e alinhado aos seus objetivos, gerando resultados consistentes e engajamento significativo.",
        logoPath: "/logo-instituto-derma.JPG",
        instagramIdentifier: "instituto.dermanilo",
        beforeInstagramInsights: {
            dateRange: "10/10/2023 à 10/11/2023",
            accountsReached: 976,
            reels: 669,
            totalFollowers: 10273,
            stories: 363,
            profileImagePath: "/insta-instituto-derma-antes.PNG"
        },
        afterInstagramInsights: {
            dateRange: "08/01/2025 à 08/02/2025",
            accountsReached: 65997,
            reels: 54464,
            totalFollowers: 12993,
            stories: 3212,
            profileImagePath: "/insta-instituto-derma-depois.PNG"
        },
    },
    
] as Customer[]

export const customerRepository = {
    getAll: () => {
        return allCustomers;
    }
}