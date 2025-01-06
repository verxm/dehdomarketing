import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";
import { FiMail } from "react-icons/fi";


const Contacts = () => {
    return (
        <div className="flex flex-row justify-center gap-3 md:gap-5">
            <Button variant="default" className="
                border border-white 
                shadow-primary shadow-md 
                w-12 h-12
                rounded-full 
                hover:shadow-sm hover:transition-all">
                <BsWhatsapp size={64}/>
            </Button>

            <Button variant="default" className="
                border border-white
                shadow-primary shadow-md 
                w-12 h-12 
                rounded-full 
                hover:shadow-sm hover:transition-all">
                <BsInstagram size={64}/>
            </Button>

            <Button variant="default" className="
                border border-white 
                shadow-primary shadow-md 
                w-12 h-12 
                rounded-full 
                hover:shadow-sm hover:transition-all">
                <FiMail size={64}/>
            </Button>
        </div>
    );
}

export default Contacts;