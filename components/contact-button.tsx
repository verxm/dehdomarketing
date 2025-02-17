import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";
import { FiMail } from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

interface ContactButtonParameters {
    contactType: ContactType,
    animationDelay: number
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

const ContacButton = ({ contactType, animationDelay }: ContactButtonParameters) => {
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
                    <motion.a 
                        initial={{ opacity: 0, scale: 0.5, y:40}}
                        whileInView={{
                            opacity: 1, 
                            scale: 1 ,
                            y: 0,
                            transition:{
                                duration: 0.8,
                                delay: animationDelay
                                //ease: [0, 0.71, 0.2, 1.01],
                            }
                        }}
                        viewport={{once:true}}
                        href={buttonProperties[contactType]?.RedirectLink} 
                        target="_blank">
                        <Button 
                            variant="default"   
                            className="
                                border border-white
                                translate-x-0 hover:translate-x-0
                                hover:bg-white hover:text-primary hover:border-primary
                                shadow-primary/50 shadow-md 
                                w-12 h-12
                                rounded-full 
                                hover:shadow-sm hover:transition-all">
                            {buttonProperties[contactType]?.Icon}
                        </Button>
                    </motion.a>

                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>{buttonProperties[contactType]?.Tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ContacButton;