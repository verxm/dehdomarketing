import { servicesRepository } from "@/app/_repositories/services-local-repository";

export const whatsAppSenderService = {
    sendBudgetRequest: (
        companyName: string | undefined,
        responsible: string | undefined,
        businessSector: string | undefined,
        serviceIds: string[]) => {
        let requestBudgetMessage = `Oi! Tudo bem? %0A%0AGostaria de solicitar um orçamento ⤵️⤵️`

        if (companyName) {
            requestBudgetMessage += `%0A%0ANome da empresa: *${companyName}*`;
        }

        if (responsible) {
            requestBudgetMessage += `%0ANome do responsável: *${responsible}*`;
        }

        if (businessSector) {
            requestBudgetMessage += `%0AQual o ramo da empresa: *${businessSector}*`;
        }

        if (serviceIds && serviceIds.length > 0){
            const splitedServices = servicesRepository
                .getServiceNamesByIds(serviceIds)
                .join(", ");

            requestBudgetMessage += `%0AQual serviço tens interesse: *${splitedServices}*`;
        }

        const whatsAppLink = `https://wa.me/5551999028748?text=${requestBudgetMessage}`;

        window.open(whatsAppLink, '_blank')?.focus();
    }
}