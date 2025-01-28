import { WorkForm } from "../_entities/workForm";

const allWorkForms = [
    {
        id: "1",
        title: "Planejamento",
        description: "Vou entender mais sobre o seu negócio, elaborar um bom plano visando alcançar os seus objetivos.",
        imagePath: "/gestao-de-redes-sociais.jpeg",
    },
    { // TODO: alterar image paths
        id: "2",
        title: "Execução",
        description: "Utilizo as melhores ferramentas disponíveis para ir além das expectativas e aumentar suas vendas.",
        imagePath: "/trafego-page.png",
    },
    {
        id: "3",
        title: "Conversação",
        description: "Alguém está procurando pelo seu serviço neste momento. Seja encontrado antes da concorrência.",
        imagePath: "/analise-de-perfil.jpeg",
    },
    {
        id: "4",
        title: "Relacionamento",
        description: "Sua empresa marcará presença na internet, não só para ganhar likes, mas sim para ser reconhecido.",
        imagePath: "/prod-conteudo.jpeg",
    },
] as WorkForm[];

export const workFormRepository = {
    getAll: () => {
        return allWorkForms;
    }
}