import ContactButton, { ContactType } from "./contact-button";

const Contacts = () => {
    return (
        <div className="flex flex-row justify-center gap-3 md:gap-5">
            <ContactButton contactType={ContactType.WhatsApp} />

            <ContactButton contactType={ContactType.Instagram} />

            <ContactButton contactType={ContactType.Email} />
        </div>
    );
}

export default Contacts;