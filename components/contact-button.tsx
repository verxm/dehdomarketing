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
    RedirectLink: string
}

const ContacButton = ({ contactType }: ContactButtonParameters) => {
    const buttonProperties: { [key in ContactType]?: ContactButtonProperties } = {
        [ContactType.WhatsApp]: {
            Icon: <BsWhatsapp size={64} />,
            Tooltip: "+55 (51) 99902-8748",
            RedirectLink: "https://wa.me/5551999028748",
        },
        [ContactType.Instagram]: {
            Icon: <BsInstagram size={64} />,
            Tooltip: "@dehdomarketing",
            RedirectLink: "https://www.instagram.com/dehdomarketing",
        },
        [ContactType.Email]: {
            Icon: <FiMail size={64} />,
            Tooltip: "contatodeboradeborba@gmail.com",
            RedirectLink: "mailto:contatodeboradeborba@gmail.com",
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href={buttonProperties[contactType]?.RedirectLink} target="_blank">
                        <Button 
                            variant="default"   
                            className="
                                border border-white 
                                shadow-primary shadow-md 
                                w-12 h-12
                                rounded-full 
                                hover:shadow-sm hover:transition-all">
                            {buttonProperties[contactType]?.Icon}
                        </Button>
                    </a>

                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>{buttonProperties[contactType]?.Tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ContacButton;