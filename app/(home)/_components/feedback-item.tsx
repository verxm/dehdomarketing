import { Feedback } from "@/app/_entities/feedback";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FeedbackItemParameters {
    feedback: Feedback
}

const FeedbackItem = ({ feedback }: FeedbackItemParameters) => {
    return (
        <div 
            className="
                max-w-[390px] h-[320px] 
                md:max-w-[550px] md:h-[270px]
                xl:max-w-[690px] xl:h-[270px]
                cursor-pointer">
            <Card className="hover:bg-gray-100 h-full">
                <CardHeader className="pt-4">
                    <div className="flex flex-row items-center gap-3">
                        <Avatar>
                            <AvatarImage style={{
                                objectFit: "cover",
                            }} src={feedback.authorImage} />
                        </Avatar>

                        <div className="flex flex-col">
                            <p className="text-sm font-bold italic text-gray-500">{feedback.author}</p>
                            <p className="text-xs text-gray-400">{feedback.authorPosition}</p>
                        </div>
                    </div>
                </CardHeader>
                <Separator className="mt-[-13px] mb-4" />
                <CardContent>
                    <p className="italic text-xs whitespace-pre-line">"{feedback.testimony}"</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default FeedbackItem;