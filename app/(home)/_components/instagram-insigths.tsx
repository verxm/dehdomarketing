import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
    const InsigthPopoverStyle = () => {
        if (isBefore) {
            return "bg-muted text-primary"
        }

        return "bg-primary text-white";
    }

    return (
        <>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-sm text-gray-600">Insigths</p>
                <Popover >
                    <PopoverTrigger asChild>
                        <InsigthsBadge className="cursor-pointer" isBefore={isBefore} />
                    </PopoverTrigger>
                    <PopoverContent className={`w-full h-7 p-0 px-2 items-center justify-center flex flex-col ${InsigthPopoverStyle()}`}  >
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