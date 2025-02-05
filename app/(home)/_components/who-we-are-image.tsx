import Image from "next/image";

interface WhoWeAreImageParameters {
    imagePath: string,
}

const WhoWeAreImage = ({ imagePath }: WhoWeAreImageParameters) => {
    return (
        <Image
            src={imagePath}
            alt="quem-sou-1.JPEG"
            width="100" height="300"
            className="
                rounded-xl object-cover 
                w-full min-h-[300px]
                lg:min-h-[400px]
                lg:mt-3" />
    );
}

export default WhoWeAreImage;