import { Customer } from "../_entities/customer";

const allCustomers = [
    {
        id: "1",
        name: "Orlando Bora Lá",
        description: "Agência de viagens para Disney",
        logoPath: "/perfil-mari-orlando-borala.jpeg",
        instagramIdentifier: "orlandoborala",
        beforeInstagramInsights: {
            dateRange: "09/01/2024 a 09/02/2024",
            accountsReached: "100",
            accountsWithEngagement: "200",
            totalFollowers: "300",
            sharedContents: "400",
            profileImagePath: "/orlandoborala-insta-antes.png"
        },
        afterInstagramInsights: {
            dateRange: "10/11/2024 a 10/12/2024",
            accountsReached: "400",
            accountsWithEngagement: "500",
            totalFollowers: "1000",
            sharedContents: "200",
            profileImagePath: "/orlandoborala-insta-depois.png"
        },
    },
] as Customer[]

export const customerRepository = {
    getAll: () => {
        return allCustomers;
    }
}