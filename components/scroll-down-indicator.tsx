import { FaLongArrowAltDown } from "react-icons/fa";

const ScrollDownIndicator = () => {
    return (
        <div className="flex flex-row justify-end pb-3">
            <FaLongArrowAltDown className="absolute text-gray-500" />
        </div>
    );
}

export default ScrollDownIndicator;