import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";
import { FiMail } from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface ContactButtonParameters {
    contactType: ContactType,
}

export enum ContactType {
    WhatsApp,
    Instagram,
    Email
}

interface ContactButtonProperties {
    Icon: JSX.Element,
    Tooltip: string,
}

const ContacButton = ({ contactType }: ContactButtonParameters) => {
    const buttonProperties: { [key in ContactType]?: ContactButtonProperties } = {
        [ContactType.WhatsApp]: {
            Icon: <BsWhatsapp size={64} />,
            Tooltip: "+55 51 99902-8748",
        },
        [ContactType.Instagram]: {
            Icon: <BsInstagram size={64} />,
            Tooltip: "@dehdomarketing",
        },
        [ContactType.Email]: {
            Icon: <FiMail size={64} />,
            Tooltip: "contatodeboradeborba@gmail.com",
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="default" className="
                            border border-white 
                            shadow-primary shadow-md 
                            w-12 h-12
                            rounded-full 
                            hover:shadow-sm hover:transition-all">
                        {buttonProperties[contactType]?.Icon}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>{buttonProperties[contactType]?.Tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ContacButton;