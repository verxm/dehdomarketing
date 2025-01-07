import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";
import { FiMail } from "react-icons/fi";

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
}

const ContacButton = ({ contactType }: ContactButtonParameters) => {
    const buttonProperties: { [key in ContactType]?: ContactButtonProperties } = {
        [ContactType.WhatsApp]: {
            Icon: <BsWhatsapp size={64} />,
        },
        [ContactType.Instagram]: {
            Icon: <BsInstagram size={64} />,
        },
        [ContactType.Email]: {
            Icon: <FiMail size={64} />
        }
    }

    return (
        <Button variant="default" className="
                border border-white 
                shadow-primary shadow-md 
                w-12 h-12
                rounded-full 
                hover:shadow-sm hover:transition-all">
            {buttonProperties[contactType]?.Icon}
        </Button>
    )
}

export default ContacButton;