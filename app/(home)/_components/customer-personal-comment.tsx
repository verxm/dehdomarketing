import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLongArrowAltDown } from "react-icons/fa";

interface CustomerPersonalCommentParameters {
    comment: string,
}

const CustomerPersonalComment = ({ comment }: CustomerPersonalCommentParameters) => {
    const dehProfileImagePath = "/perfil-deh.jpeg";

    return (
        <Alert className="px-2">
            <div className="flex flex-row gap-3 items-center py-2">
                <Avatar>
                    <AvatarImage className="object-cover" src={dehProfileImagePath} />
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <AlertTitle className="italic">~ Deh</AlertTitle>
            </div>

            <AlertDescription className="italic h-[150px] overflow-y-auto whitespace-pre-line">
                "{comment}"
            </AlertDescription>
            <div className="flex flex-row justify-end pb-3">
                <FaLongArrowAltDown className="absolute text-gray-500" />
            </div>
        </Alert>
    );
}

export default CustomerPersonalComment;