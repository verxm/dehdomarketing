"use client"

import { InstagramInsight } from "@/app/_entities/instagram-insights";
import { Badge } from "@/components/ui/badge";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface InstagramInsightsParameters {
    beforeInsights: InstagramInsight,
    afterInsights: InstagramInsight,
}

const InstagramInsights = ({
    beforeInsights,
    afterInsights }: InstagramInsightsParameters) => {
    const chartData = [
        {
            metric: "Alcance",
            before: beforeInsights.accountsReached,
            after: afterInsights.accountsReached
        },
        {
            metric: "Enganjamento",
            before: beforeInsights.accountsWithEngagement,
            after: afterInsights.accountsWithEngagement
        },
        {
            metric: "Seguidores",
            before: beforeInsights.totalFollowers,
            after: afterInsights.totalFollowers
        },
        {
            metric: "Compartilhamentos",
            before: beforeInsights.sharedContents,
            after: afterInsights.sharedContents
        },
    ]

    const chartConfig = {
        before: {
            label: "Antes",
            color: "#F6E7D8",
        },
        after: {
            label: "Depois",
            color: "#9B5B2A",
        },
    } satisfies ChartConfig

    return (
        <>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        className="text-xxs text-nowrap text-ellipsis"
                        dataKey="metric"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`
                        }
                    />
                    <YAxis
                        className="text-xxs"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        allowDataOverflow={true}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend className="text-xs" content={<ChartLegendContent />} />
                    <Bar dataKey="before" fill="var(--color-before)" radius={4} />
                    <Bar dataKey="after" fill="var(--color-after)" radius={4} />
                </BarChart>
            </ChartContainer>

            {/* <div className="flex flex-row justify-between">
                <p className="font-bold text-sm text-gray-600">Insigths</p>
                <Popover >
                    <PopoverTrigger asChild>
                        <InsigthsBadge className="cursor-pointer" isBefore={isBefore} />
                    </PopoverTrigger>
                    <PopoverContent className={`w-full h-7 p-0 px-2 items-center justify-center flex flex-col ${InsigthPopoverStyle()}`}  >
                        <p className="text-xs">{insights.dateRange}</p>
                    </PopoverContent>
                </Popover>

            </div>
            <div className="flex flex-row justify-between p-4">
                <div className="flex flex-col text-sm">
                    <p>Contas alcançadas:</p>
                    <p>Contas com engajamento:</p>
                    <p>Total de seguidores:</p>
                    <p>Conteúdo que você compartilhou:</p>
                </div>
                <div className="flex flex-col text-sm">
                    <p>{insights.accountsReached}</p>
                    <p>{insights.accountsWithEngagement}</p>
                    <p>{insights.totalFollowers}</p>
                    <p>{insights.sharedContents}</p>
                </div>
            </div> */}
        </>
    );
}

export default InstagramInsights;

interface InsigthsBadgeParameters {
    className: string,
    isBefore?: boolean | undefined,
}

const InsigthsBadge = ({ className, isBefore }: InsigthsBadgeParameters) => {
    if (isBefore) {
        return <Badge variant="secondary" className={`text-primary ${className}`}>Antes</Badge>
    }

    return <Badge className={className}>Depois</Badge>
}