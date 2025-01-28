import { WorkForm } from "../_entities/workForm";

const allWorkForms = [
    {
        id: "1",
        title: "Planejamento",
        description: "Vou entender mais sobre o seu negócio, elaborar um bom plano visando alcançar os seus objetivos.",
        imagePath: "/work-form-planejamento.PNG",
    },
    {
        id: "2",
        title: "Execução",
        description: "Utilizo as melhores ferramentas disponíveis para ir além das expectativas e aumentar suas vendas.",
        imagePath: "/work-form-execucao.PNG",
    },
    {
        id: "3",
        title: "Conversação",
        description: "Alguém está procurando pelo seu serviço neste momento. Seja encontrado antes da concorrência.",
        imagePath: "/work-form-conversao.PNG",
    },
    {
        id: "4",
        title: "Relacionamento",
        description: "Sua empresa marcará presença na internet, não só para ganhar likes, mas sim para ser reconhecido.",
        imagePath: "/work-form-relacionamento.JPG",
    },
] as WorkForm[];

export const workFormRepository = {
    getAll: () => {
        return allWorkForms;
    }
}