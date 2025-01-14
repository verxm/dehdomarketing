import { feedbacksRepository } from "@/app/_repositories/feedbacks-local-repository";
import FeedbackItem from "./feedback-item";

const FeedbackSession = () => {
    const allFeedbacks = feedbacksRepository.getAll();

    return (
        <>
            {allFeedbacks.map((feedback) => (
                <FeedbackItem feedback={feedback} />
            ))}
        </>
    );
}

export default FeedbackSession;