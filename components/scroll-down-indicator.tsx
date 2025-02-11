import { FaLongArrowAltDown } from "react-icons/fa";

const ScrollDownIndicator = () => {
    return (
        <div className="flex flex-row justify-end pb-5 mt-[-18px] pr-2">
            <FaLongArrowAltDown className="absolute text-gray-500 opacity-60" />
        </div>
    );
}

export default ScrollDownIndicator;