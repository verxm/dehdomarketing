import { servicesRepository } from "@/app/_repositories/services-local-repository";

export const whatsAppSenderService = {
    sendBudgetRequest: (
        companyName: string | undefined,
        responsible: string | undefined,
        businessSector: string | undefined,
        instagramIdentifier: string | undefined,
        serviceIds: string[]) => {
        let requestBudgetMessage = `Oi! Tudo bem? %0A%0AGostaria de solicitar um orçamento ⤵️⤵️`

        if (companyName) {
            requestBudgetMessage += `%0A%0ANome da empresa: *${companyName.trim()}*`;
        }

        if (responsible) {
            requestBudgetMessage += `%0ANome do responsável: *${responsible.trim()}*`;
        }

        if (businessSector) {
            requestBudgetMessage += `%0ARamo da empresa: *${businessSector.trim()}*`;
        }

        if (instagramIdentifier) {
            requestBudgetMessage += `%0AInstagram: *@${instagramIdentifier.trim()}*`;
        }

        if (serviceIds && serviceIds.length > 0){
            const splitedServices = servicesRepository
                .getServiceNamesByIds(serviceIds)
                .join(", ");

            requestBudgetMessage += `%0AServiços que tenho interesse: *${splitedServices}*`;
        }

        const whatsAppLink = `https://wa.me/5551999028748?text=${requestBudgetMessage}`;

        window.open(whatsAppLink, '_blank')?.focus();
    }
}