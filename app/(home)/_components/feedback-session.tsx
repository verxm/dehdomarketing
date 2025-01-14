import FeedbackItem from "./feedback-item";
import { Feedback } from "@/app/_entities/feedback";

interface FeedbackSessionParameters {
    feedback: Feedback
}

const FeedbackSession = ({ feedback }: FeedbackSessionParameters) => {
    return (
        <FeedbackItem feedback={feedback} />
    );
}

export default FeedbackSession;