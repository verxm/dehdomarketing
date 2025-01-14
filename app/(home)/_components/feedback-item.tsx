import { Feedback } from "@/app/_entities/feedback";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FeedbackItemParameters {
    feedback: Feedback
}

const FeedbackItem = ({ feedback }: FeedbackItemParameters) => {
    return (
        <div key={feedback.id} className="cursor-pointer">
            <Card className="hover:bg-gray-950/[.05]">
                <CardHeader className="pt-4">
                    <div className="flex flex-row items-center gap-3">
                        <Avatar>
                            <AvatarImage style={{
                                objectFit: "cover",
                            }} src={feedback.authorImage} />
                        </Avatar>

                        <div className="flex flex-col">
                            <p className="text-sm font-bold italic">{feedback.author}</p>
                            <p className="text-xs text-gray-400 ital">{feedback.authorPosition}</p>
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