import { InstagramInsight } from "./instagram-insights";

export interface Customer {
    id: string,
    name: string,
    description: string,
    logoPath: string,
    beforeInstagramInsights: InstagramInsight,
    afterInstagramInsights: InstagramInsight,
    instagramIdentifier: string
}