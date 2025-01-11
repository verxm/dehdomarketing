import CardImage from "./card-image";

interface ServiceItemParameters {
    name: string,
    description: string,
    imagePath: string,
}

const ServiceItem = ({ name, description, imagePath }: ServiceItemParameters) => {
    return (
        <CardImage
            title={name}
            description={description}
            image={imagePath} />
    );
}

export default ServiceItem;