import { feedbacksRepository } from "@/app/_repositories/feedbacks-local-repository";
import FeedbackItem from "./feedback-item";
import Marquee from "@/components/ui/marquee";

const FeedbackSession = () => {
    const allFeedbacks = feedbacksRepository.getAll();

    return (
        <>
            <div className="px-5 mb-3 flex flex-col items-center">
                <h2 className="text-lg uppercase text-gray-700 font-bold">✨ Feedbacks ✨</h2>
                <p className="text-sm text-muted-foreground">De quem já vivieu essa transformação</p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee key="marquee-1" pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    ))}
                </Marquee>
                <Marquee key="marquee-2" reverse pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
            </div>
        </>
    );
}

export default FeedbackSession;