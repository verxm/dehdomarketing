"use client"

import { InstagramInsight } from "@/app/_entities/instagram-insights";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { motion } from "framer-motion";
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
            metric: "Reels",
            before: beforeInsights.reels,
            after: afterInsights.reels
        },
        {
            metric: "Seguidores",
            before: beforeInsights.totalFollowers,
            after: afterInsights.totalFollowers
        },
        {
            metric: "Stories",
            before: beforeInsights.stories,
            after: afterInsights.stories
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
        <motion.div 
            whileInView={{opacity:[0, 1], transition: {duration: 2}}}
            viewport={{once: true}}
            className="flex flex-col items-center gap-2">
            <div className="
                flex flex-row gap-3 
                text-xxs text-gray-500 italic text-nowrap
                justify-center">
                <p>Antes: {beforeInsights.dateRange}</p>
                <p>Depois: {afterInsights.dateRange}</p>
            </div>
            <ChartContainer config={chartConfig} className="
                min-h-[100px] w-full ml-[-20px]
                md:max-h-[230px]
                lg:max-h-[320px]">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        className="text-xxs text-nowrap text-ellipsis"
                        dataKey="metric"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={ (value) => `${value}` }
                    />
                    <YAxis
                        className="text-xxs"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        allowDataOverflow={true}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="before" fill="var(--color-before)" radius={4} />
                    <Bar dataKey="after" fill="var(--color-after)" radius={4} />
                </BarChart>
            </ChartContainer>
        </motion.div>
    );
}

export default InstagramInsights;