import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InstagramInsightsParameters {
    insigthsDateRange: string,
    accountsReached: string,
    accountsWithEngagement: string,
    totalFollowers: string,
    sharedContents: string,
    isBefore?: boolean | undefined,
}

const InstagramInsights = ({
    insigthsDateRange,
    accountsReached,
    accountsWithEngagement,
    totalFollowers,
    sharedContents,
    isBefore = false }: InstagramInsightsParameters) => {
    const InsigthsBadge = () => {
        if (isBefore) {
            return <Badge variant="secondary" className="text-primary">Antes</Badge>
        }

        return <Badge>Depois</Badge>
    }

    const InsigthPopoverStyle = () => {
        if (isBefore) {
            return "bg-muted text-primary"
        }

        return "bg-primary text-white";
    }

    return (
        <>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-sm">Insigths</p>
                {/* <p className="text-xs italic text-gray-600 pt-[3px]">{insigthsDateRange}</p> */}
                <Popover >
                    <PopoverTrigger asChild>
                    <InsigthsBadge />
                    </PopoverTrigger>
                    <PopoverContent className= {`w-full h-7 p-0 px-2 items-center justify-center flex flex-col ${InsigthPopoverStyle()}`}  >
                    <p className="text-xs">{insigthsDateRange}</p>
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
                    <p>{accountsReached}</p>
                    <p>{accountsWithEngagement}</p>
                    <p>{totalFollowers}</p>
                    <p>{sharedContents}</p>
                </div>
            </div>
        </>
    );
}

export default InstagramInsights;