import ContactButton, { ContactType } from "../../../components/contact-button";

const Contacts = () => {
    return (
        <div className="flex flex-row justify-center gap-3 md:gap-5">
            <ContactButton contactType={ContactType.WhatsApp} animationDelay={0} />
            <ContactButton contactType={ContactType.Instagram} animationDelay={0.2} />
            <ContactButton contactType={ContactType.Email} animationDelay={0.3} />
        </div>
    );
}

export default Contacts;