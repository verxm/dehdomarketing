interface WhoWeAreImageParameters {
    imagePath: string,
}

const WhoWeAreImage = ({ imagePath }: WhoWeAreImageParameters) => {
    return (
        <img
            src={imagePath}
            alt="Deh do Marketing Image"
            width="100" height="300"
            className="
                rounded-xl object-cover 
                w-full min-h-[300px]
                lg:min-h-[400px]
                lg:mt-6" />
    );
}

export default WhoWeAreImage;