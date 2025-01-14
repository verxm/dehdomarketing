import { Feedback } from "../_entities/feedback";

const allFeedbacks = [
    {
        id: "1",
        author: "Gabriela Torres",
        authorImage: "/perfil-gabi-gt-clinic.jpeg",
        authorPosition: "Proprietária - GT Clinic",
        testimony: "Queria vir te dizer que estou muito feliz com os nossos resultados esse mês, conseguimos, conseguimos aumentar muito a visibilidade da página.. até levei um susto kkk \n\nDébora eu sou muito grata por todo teu empenho e dedicação por fazer a minha marca aparecer e crescer, sou grata por tudo pois sei que essa dedicação além de ser algo profissional, criamos uma conexão de parceria e muita sintonia (hoje eu entendo q o marketing é isso) te agrade muito por tanto.",
    },
    {
        id: "2",
        author: "Mariana Colombo",
        authorImage: "/perfil-mari-orlando-borala.jpeg",
        authorPosition: "Proprietária - Orlando Bora Lá",
        testimony: "Temos uma agência de turismo especializada em Orlando e nossa página do Instagram estava totalmente defazada e com várias informações fora de ordem.\nFoi quando tivemos a ideia de contratar uma social media.\nE o que falar dessa profissional incrível?!?!\nEla é cheia de ideias, alegria, dedicada e super atenciosa.\nEm pouco tempo transformou a nossa página (que por sinal está linda) e quadruplicou o número de contas alcançadas.\nSucesso total.\nE que nossa parceira possa perdurar por muito tempo...\nParabéns e cada vez mais sucesso pra ti!!!",
      },
      {
        id: "3",
        author: "Patrícia Kroth",
        authorImage: "/perfil-patricia-instituto-derma.jpeg",
        authorPosition: "Proprietária - Instituto Derma",
        testimony: "Profissional maravilhosa! Super dedicada, extremamente competente. Só sinto não ter conhecido Débora antes!\n\nAdoro seu trabalho",
      },
      {
        id: "4",
        author: "Andréa Romera",
        authorImage: "/perfil-andrea-massoterapeuta.jpeg",
        authorPosition: "Massoterapeuta",
        testimony: "Debora, tenho que te agradecer pelo excelente trabalho que está fazendo no meu Instagram.\nGuriaaaa...\n\nO reels que tu gravou comigo deu mais de 2k visualizações, para o meu primeiro reels está maravilhoso.\nObrigada pelas ideias e pelas dicas de story que tu está me dando.\nEstou muito grata!\n\nAdoro seu trabalho",
      },
      {
        id: "5",
        author: "Priscila Guedes",
        authorImage: "/perfil-priscila-esteta.jpeg",
        authorPosition: "Esteta Cosmetóloga",
        testimony: "Débora, você  é top e suas dicas são reais, muitas pessoas vende algo que não é real e quando isso vai de contro nossa realidade profissional frusta, mas tu inspira muito, baita profissional e empodera muitas, com esse coração!",
      },
] as Feedback[]

export const feedbacksRepository = {
    getAll: () => {
        return allFeedbacks;
    }
}